<script lang="ts">
  import c from "clsx";

  import CategoryTag from "$lib/category-tag.svelte";
  import CommonHeader from "$lib/common-header.svelte";
  import ResourceBox from "$lib/resource-box.svelte";

  import type {PageData} from "./$types";

  const images = import.meta.glob("../../data/resources/*.jpg", {
    query: {enhanced: true},
    eager: true,
  });

  export let data: PageData;

  let filter: string | undefined;

  let activeTag: string | undefined;

  const filterCategory = (category: string) => {
    filter = filter === category ? undefined : category;
  };

  const toggleTag = (tag?: string) => {
    if (!tag) return;
    activeTag = activeTag === tag ? undefined : tag;
    window.scrollTo({top: 0, behavior: "smooth"});
  };

  $: activeTagCount = activeTag
    ? data.resources.filter((r) => (r.tags ?? []).includes(activeTag)).length
    : 0;

  $: resourceData = data.resources.filter(({category, tags}) => {
    const categoryOk = filter ? category === filter : true;
    const tagOk = activeTag ? (tags ?? []).includes(activeTag) : true;
    return categoryOk && tagOk;
  });
</script>

<CommonHeader title="Key resources: AI and freedom of expression">
  <p class="font-medium leading-5">
    The use of AI systems by digital platforms is radically reshaping our information ecosystems and
    playing a critical role in determining what we read, see, and share online. The following is a
    repository of essential resources, research, podcasts, videos, and other materials from experts
    around the world who are exploring the effects of these technologies on freedom of expression,
    media pluralism, access to information, and the free exchange of ideas—and how restrictions to
    these fundamental rights can harm society, undermine democracy, and erode human rights.
  </p>
</CommonHeader>

<main class="container mx-auto py-12 px-4 flex flex-col">
  <div class="flex flex-col items-center min-h-[120px] justtify-center">
    <!-- Tag Filter -->
    <div class="flex flex-wrap gap-10 justify-center items-center pt-4 pb-4">
      <button class="self-stretch flex items-center" on:click={() => filterCategory("Read")}>
        <CategoryTag category="Read" isActive={filter === "Read"} />
      </button>

      <button class="self-stretch flex items-center" on:click={() => filterCategory("Listen")}>
        <CategoryTag category="Listen" isActive={filter === "Listen"} />
      </button>

      <button class="self-stretch flex items-center" on:click={() => filterCategory("Watch")}>
        <CategoryTag category="Watch" isActive={filter === "Watch"} />
      </button>
    </div>

    <!-- Tag filter -->
    <div class="flex justify-center mb-12">
      {#if activeTag}
        <button
          type="button"
          class="
            inline-flex items-center max-w-full whitespace-normal break-words
            px-[15px] py-[8px] mt-8 mb-4 rounded-[28px] border
            text-sm font-semibold leading-5
            !bg-blue-osce !text-white !border-blue-osce
            active:bg-blue-osce active:text-white active:border-blue-osce
            focus-visible:bg-blue-osce focus-visible:text-white focus-visible:border-blue-osce
          "
          on:click={() => toggleTag(activeTag)}
        >
          {activeTag} ({activeTagCount})
        </button>
      {/if}
    </div>
  </div>
  <div class="flex flex-col space-y-16">
    {#each resourceData as { title, subtitle, description, href, category, tags, image }}
      <ResourceBox
        {title}
        {subtitle}
        {description}
        {href}
        {category}
        {tags}
        {activeTag}
        on:tagSelect={(e) => toggleTag(e.detail)}
        Image={images[`../../${image}`]?.default}
      />
    {/each}
  </div>
</main>
