<script lang="ts">
  import {base} from "$app/paths";
  import CommonHeader from "$lib/common-header.svelte";
  import Do from "$lib/do.svelte";
  import DoDontBox from "$lib/do-dont-box.svelte";
  import Dont from "$lib/dont.svelte";

  import type {PageData} from "./$types";

  export let data: PageData;
</script>

<CommonHeader title="Dos and don’ts: A first step toward AI policies">
  <svelte:fragment>
    <p class="font-medium leading-5">
      Key principles to consider when developing AI strategies and policies. <a
        href={`${base}/policy`}>Click here</a
      > for more recommendations on safeguarding freedom of expression in the use of AI for content governance.
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
