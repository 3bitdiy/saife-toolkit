<script lang="ts">
  import c from "clsx";
  import {createEventDispatcher} from "svelte";
  import CategoryTag from "$lib/category-tag.svelte";
  import ShadowBox from "$lib/shadow-box.svelte";
  import Chevron from "$lib/chevron.svelte";

  const dispatch = createEventDispatcher<{tagSelect: string}>();

  let clazz = "";
  export {clazz as class};

  export let title: string;
  export let subtitle: string | null;
  export let href: string;
  export let description: string;
  export let category: string;
  export let tags: string[];
  export let Image;
  export let activeTag: string | undefined;

  const onTagClick = (tag: string) => {
    dispatch("tagSelect", tag);
  };

  const resolvedHref =
    href?.startsWith("http://") || href?.startsWith("https://")
      ? href
      : href
      ? `https://www.osce.org/${href.replace(/^\/+/, "")}`
      : "";
</script>

<ShadowBox class={c(clazz)}>
  <svelte:fragment>
    <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
      {#if Image}
        <enhanced:img class="md:max-w-xs" src={Image} alt="Resource image" />
      {/if}

      <div class="flex flex-col gap-6">
        <CategoryTag {category} />
        <h2 class="text-[30px] leading-9 font-extrabold">{title}</h2>
        {#if subtitle}<p class="text-black italic font-thin">{subtitle}</p>{/if}
        {#if description}<p>{description}</p>{/if}
        <!-- {#if href}
          <div class="mt-4 flex items-center">
            <a {href} rel="external" class="font-semibold text-blue-osce"> Go to resource </a>

            <a {href} rel="external" class="ml-4 group flex items-center hover:border-none">
              <span class="rounded-full border-2 border-blue-osce p-2 shrink-0">
                <Chevron
                  class="w-5 h-5 stroke-blue-osce transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </a>
          </div>
        {/if} -->
        {#if resolvedHref}
          <div class="flex items-center">
            <a href={resolvedHref} rel="external" class="font-semibold text-blue-osce">
              Go to resource
            </a>

            <a
              href={resolvedHref}
              rel="external"
              class="ml-4 group flex items-center hover:border-none"
            >
              <span class="rounded-full border-2 border-blue-osce p-2 shrink-0">
                <Chevron
                  class="w-5 h-5 stroke-blue-osce transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </a>
          </div>
        {/if}
      </div>
    </div>

    <hr class="my-10 bg-blue h-[3px]" />

    <div class="flex flex-wrap gap-4 items-center">
      <span class="font-extrabold text-xl leading-[1.2]">Tags:</span>
      {#each tags as tag}
        <button
          type="button"
          class={c(
            "inline-flex items-center max-w-full whitespace-normal break-words",
            "px-[15px] py-[8px] rounded-[28px] border",
            "text-sm font-semibold leading-5",
            "bg-white text-blue border-blue",
            "hover:bg-blue hover:text-white hover:border-blue",
            "active:bg-blue active:text-white active:border-blue",
            "focus-visible:bg-blue focus-visible:text-white focus-visible:border-blue",
            {
              "!bg-blue !text-white !border-blue": activeTag === tag,
            },
          )}
          on:click={() => onTagClick(tag)}
        >
          {tag}
        </button>
      {/each}
    </div>
  </svelte:fragment>
</ShadowBox>
