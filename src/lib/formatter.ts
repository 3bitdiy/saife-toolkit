import slugify from "@sindresorhus/slugify";
import cheerio from "cheerio";

import type {Glossary} from "../types";

type CheerioTag = string | cheerio.Element | cheerio.Cheerio;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isTagElement = (element: any): element is cheerio.TagElement =>
  element?.attribs !== undefined;

const hasChildTag = (tag: string, $: cheerio.Cheerio): boolean => $.has(tag).get().length > 0;

const removeEmptyTag = (tag: CheerioTag, $: cheerio.Root): void => {
  $(tag).each((_idx, el) => {
    const $el = $(el);
    if ($el.text().trim() === "" && !hasChildTag("img", $el)) $el.remove();
  });
};

const removeTag = (tag: CheerioTag, filter: string | undefined, $: cheerio.Root): void => {
  if (filter) {
    $(tag).has(filter).remove();
  } else {
    $(tag).remove();
  }
};

export const normalizeHtml = (src: string): string => {
  // scrub escaped spaces
  const html = src.replaceAll("&nbsp;", " ").replaceAll(/<img ([\s\w!",./=?]*)>/g, "<img $1 />");

  const $ = cheerio.load(html, {xmlMode: true, decodeEntities: false});

  // remove comments container in footer
  removeTag("div", "a[href^=#cmnt_ref][id^=cmnt]", $);

  // as well as inline comment references
  removeTag("sup", "a[id^=cmnt]", $);

  // We don't need break lines and Google Docs formats them non closing anyways
  removeTag("br", undefined, $);

  // empty paragraphs and div's can sneak in, lets get rid of them
  removeEmptyTag("p", $);
  removeEmptyTag("div", $);
  removeEmptyTag("span", $);
  removeEmptyTag("h2", $);
  removeEmptyTag("h3", $);
  removeEmptyTag("h4", $);

  // rewrite the id's to something more friendly.
  $("h2").each((_idx, el) => {
    const id = slugify($(el).text());
    $(el).attr("id", id);
  });

  // We make two passes over the Google Doc HTML. The first pass trasnforms the
  // HTML tree itself. In the second pass we transform attributes of HTML tags.
  $("body *").map((_idx, el) => {
    const $el = $(el);

    if (isTagElement(el)) {
      // Extract pull quotes.
      if (el.tagName === "p" && $el.hasClass("subtitle")) {
        const quote = $el.html();
        $el.replaceWith(`<blockquote><p>${quote}</p></blockquote>`);
      }

      // Unnest images
      if (el.tagName === "p" && $el.has("img").get().length > 0) {
        $el.replaceWith(el.children);
      }
    }

    return el;
  });

  $("body *").map((_idx, el) => {
    const $el = $(el);

    // Remove all classes. We add classes as we go along where necessary.
    $el.removeAttr("class");

    // Remove all styles. Replace bold, italic and underline with
    // appropriate classes.
    const elStyle = $el.attr("style");
    if (elStyle) {
      // FIXME: I'm filtering out width styles of images. Right now I
      // assume that images are not a requirement. But, I need to deal
      // with those if the need ever arises.
      // Keep italic, bold and underline style definitions.
      elStyle
        .split(";")
        .filter((styleRule) => {
          if (isTagElement(el) && ["img"].includes(el.tagName) && /width/.test(styleRule)) {
            return true;
          }
          return /font-style:italic|font-weight:700|text-decoration:underline/.test(styleRule);
        })
        .forEach((style) => {
          if (style === "font-style:italic") $(el).addClass("italic");
          if (style === "font-weight:700") $(el).addClass("font-bold");
          // FIXME: Ignore underlined text since it clashes with the style of
          // links.
          // if (style === "text-decoration:underline")
          // $(el).addClass("underline");
        });

      $el.removeAttr("style");
    }

    if ($el.attr("class")) {
      $el.attr("className", $el.attr("class") || "");
      $el.removeAttr("class");
    }

    // remove unnecessary <span> tags (whose styles were completely scrubbed)
    if (!$el.attr("className") && isTagElement(el) && el.tagName === "span") {
      $el.replaceWith(el.children);
    }

    // Google HTML wraps links in a google.com redirector, extract the original link at set this as an href
    if (isTagElement(el) && el.tagName === "a" && $(el).attr("href")) {
      // We haven't decoded HTML entities so therefore we have to match & as &amp;
      const [isRedirected, redirectUrl] =
        ($el.attr("href") || "").match("https://www.google.com/url\\?q=(.+)&amp;sa=") || [];
      if (!isRedirected) return el;

      $el.attr("href", decodeURI(redirectUrl));
    }

    return el;
  });

  // Generating HTML might fail. In this case we simply crash.
  const normalizedHtml = $("body").html();
  if (!normalizedHtml) {
    throw new Error("Failed to convert to HTML");
  }
  return normalizedHtml;
};

export const processHtml = (src: string): string => {
  let html = src;
  html = normalizeHtml(src);
  return html;
};

export const glossary = (title: string, src: string): Glossary => {
  const $ = cheerio.load(src, {xmlMode: true, decodeEntities: false});

  const description = $("p").first().toString();
  const sections = $("h1")
    .map((i, el) => {
      let $$ = $(el);
      const sectionTitle = $$.text();
      const descriptions = [];

      // eslint-disable-next-line no-cond-assign
      while (($$ = $$.next())) {
        if ($$.length === 0 || $$.prop("tagName") === "H1") break;
        descriptions.push($$.toString());
      }
      return {title: sectionTitle, description: descriptions.join("")};
    })
    .get();

  return {
    title,
    description,
    sections,
  };
};
