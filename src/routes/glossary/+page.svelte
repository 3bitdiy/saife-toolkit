<script lang="ts">
  import CommonHeader from "$lib/common-header.svelte";
  import HomeHeroIcon from "$lib/home-hero-icon.svelte";
  import GlossaryBox from "$lib/glossary-box.svelte";

  import type {PageData} from "./$types";

  export let data: PageData;
</script>

<CommonHeader title="Glossary of key terms">
  <HomeHeroIcon slot="icon" />
  <p class="font-medium leading-5">
    The following are key terms used in this toolkit to describe how AI-driven technologies are used
    to shape the online content we see, read, and share.
  </p>
</CommonHeader>

<main class="container mx-auto py-12 px-4 flex flex-col space-y-16">
  {#each data.glossary as { title, description, sections }}
    <GlossaryBox {title} {description} {sections} />
  {/each}
</main>
