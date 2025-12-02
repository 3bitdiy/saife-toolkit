<script lang="ts">
  import c from "clsx";

  import CategoryTag from "$lib/category-tag.svelte";
  import ShadowBox from "$lib/shadow-box.svelte";

  let clazz = "";
  export {clazz as class};
  export let title: string;
  export let subtitle: string | null;
  export let href: string;
  export let description: string;
  export let category: string;
  export let tags: string[];
  export let Image;
</script>

<ShadowBox class={c(clazz)}>
  <svelte:fragment>
    <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
      {#if Image}
        <enhanced:img class="md:max-w-xs" src={Image} alt="Resource image" />
      {/if}
      <div class="flex flex-col">
        <CategoryTag {category} />
        <h2 class="text-2xl leading-9 font-extrabold mt-6">{title}</h2>
        {#if subtitle}<p class="text-black italic font-thin">{subtitle}</p>{/if}
        {#if description}<p class="mt-6">{description}</p>{/if}
        {#if href}
          <a class="mt-3" rel="external" {href}>Go to resource</a>
        {/if}
      </div>
    </div>

    <hr class="my-10 bg-blue h-[3px]" />

    <div class="flex flex-wrap gap-4 items-center">
      <span class="font-bold">Tags</span>

      {#each tags as tag}
        <span class="font-bold p-2 border border-blue-osce rounded-md">{tag}</span>
      {/each}
    </div>
  </svelte:fragment>
</ShadowBox>
