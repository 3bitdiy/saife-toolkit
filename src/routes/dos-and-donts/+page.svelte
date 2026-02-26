<script lang="ts">
  import {base} from "$app/paths";
  import CommonHeader from "$lib/common-header.svelte";
  import HomeHeroIcon from "$lib/home-hero-icon.svelte";
  import Do from "$lib/do.svelte";
  import DoDontBox from "$lib/do-dont-box.svelte";
  import Dont from "$lib/dont.svelte";

  import type {PageData} from "./$types";

  export let data: PageData;
</script>

<CommonHeader
  title="Recommended actions, restrictions, and guidelines for designing human rights-respecting policies on (generative) AI and digital technologies"
>
  <HomeHeroIcon slot="icon" />
  <svelte:fragment>
    <p class="text-blue-osce font-medium leading-5">
      Key principles to consider when developing strategies and policies on (generative) AI and
      digital technologies. Click <a
        href="https://rfom.osce.org/representative-on-freedom-of-media/510332"
        target="_blank">here</a
      >
      for more recommendations on safeguarding freedom of expression in the use of AI for content governance,
      and
      <a href="https://rfom.osce.org/representative-on-freedom-of-media/598525" target="_blank"
        >here</a
      >
      for recommendations on promoting media freedom and public interest journalism in the age of Big
      Tech and AI.
    </p>
  </svelte:fragment>
</CommonHeader>

<main class="container mx-auto py-12 px-4 flex flex-col md:flex-row md:space-x-16">
  <section class="w-100 md:w-1/2">
    <h2 class="flex items-center space-x-2 mb-10">
      <Do class="w-8 h-8 bg-green p-1.5 rounded-md" />
      <span class="font-extrabold leading-8 tracking-tight text-3xl text-black">Do</span>
    </h2>

    {#each data.dos as { text }}
      <DoDontBox class="my-8" kind="do" {text} />
    {/each}
  </section>

  <section class="w-100 md:w-1/2">
    <h2 class="flex items-center space-x-2 mb-10">
      <Dont class="w-8 h-8" />
      <span class="font-extrabold leading-8 tracking-tight text-3xl text-black">Don't</span>
    </h2>

    {#each data.donts as { text }}
      <DoDontBox class="my-8" kind="dont" {text} />
    {/each}
  </section>
</main>
