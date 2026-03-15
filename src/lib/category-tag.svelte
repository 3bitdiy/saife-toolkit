<script lang="ts">
  import c from "clsx";

  import Listen from "$lib/listen.svelte";
  import Read from "$lib/read.svelte";
  import Watch from "$lib/watch.svelte";

  let clazz = "";
  export {clazz as class};
  export let category: string;
  export let isActive = false;
</script>

<div
  class={c(
    "h-[52px]  w-full sm:w-[152px] inline-flex items-center justify-center",
    "px-[20px] gap-[18px]",
    "rounded-[28px] border border-blue-osce",

    isActive
      ? "bg-blue-osce text-white border-blue-osce"
      : "bg-white text-blue-osce border-blue-osce",
    clazz,
  )}
>
  {#if category === "Read"}
    <Read class="block !w-[32px] !h-[28px] shrink-0" />
  {:else if category === "Listen"}
    <Listen class="block !w-[34px] !h-[30px] shrink-0" />
  {:else if category === "Watch"}
    <Watch class="block !w-[35px] !h-[35px] shrink-0" />
  {/if}

  <span class="uppercase font-semibold leading-6 tracking-[0.05em]">
    {category}
  </span>
</div>
