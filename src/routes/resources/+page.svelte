<script lang="ts">
  import c from "clsx";

  import CategoryTag from "$lib/category-tag.svelte";
  import CommonHeader from "$lib/common-header.svelte";
  import ResourceBox from "$lib/resource-box.svelte";
  import HomeHeroIcon from "$lib/home-hero-icon.svelte";

  import type {PageData} from "./$types";

  const images = import.meta.glob("../../data/resources/*.{jpg,png,jpeg,webp}", {
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

  $: resourceData = data.resources
    .filter(({category, tags}) => {
      const categoryOk = filter ? category === filter : true;
      const tagOk = activeTag ? (tags ?? []).includes(activeTag) : true;
      return categoryOk && tagOk;
    })
    .sort((a, b) => {
      const yearA = Number(a.year) || 0;
      const yearB = Number(b.year) || 0;
      const monthA = Number(a.month) || 0;
      const monthB = Number(b.month) || 0;

      if (yearA !== yearB) return yearB - yearA;
      return monthB - monthA;
    });
</script>

<CommonHeader title="Key resources: AI and freedom of expression">
  <HomeHeroIcon slot="icon" />
  <p class="font-medium leading-5">
    The use of AI systems by digital platforms is radically reshaping our information ecosystems and
    playing a critical role in determining what we read, see, and share online. The following is a
    repository of essential resources, research, podcasts, videos, and other materials from experts
    around the world who are exploring the effects of these technologies on freedom of expression,
    media pluralism, access to information, and the free exchange of ideas—and how restrictions to
    these fundamental rights can harm society, undermine democracy, and erode human rights.
  </p>
</CommonHeader>

<main class="container mx-auto py-0 sm:py-12 px-4 flex flex-col">
  <div class="flex flex-col items-center min-h-[120px] justtify-center">
    <!-- Tag Filter -->
    <div
      class="flex flex-col sm:flex-row gap-3 sm:gap-10 justify-center items-stretch sm:items-center pt-6 pb-0 sm:pb-4 w-full sm:w-auto mx-auto"
    >
      <button
        class="self-stretch flex items-center w-full sm:w-auto"
        on:click={() => filterCategory("Read")}
      >
        <CategoryTag category="Read" isActive={filter === "Read"} />
      </button>

      <button
        class="self-stretch flex items-center w-full sm:w-auto"
        on:click={() => filterCategory("Listen")}
      >
        <CategoryTag category="Listen" isActive={filter === "Listen"} />
      </button>

      <button
        class="self-stretch flex items-center w-full sm:w-auto"
        on:click={() => filterCategory("Watch")}
      >
        <CategoryTag category="Watch" isActive={filter === "Watch"} />
      </button>
    </div>

    <!-- Tag filter -->
    <div class="flex flex-col sm:flex-row justify-center mb-6 sm:mb-12 w-full sm:w-auto mx-auto">
      {#if activeTag}
        <button
          type="button"
          class="
            inline-flex items-center justify-center w-full sm:w-auto whitespace-normal break-words
            px-[15px] py-[12px] sm:py-[8px] mt-6 sm:mt-8 mb-0 rounded-[28px] border
            text-base sm:text-sm font-semibold leading-5
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
