<script lang="ts">
  import c from "clsx";

  import Listen from "$lib/listen.svelte";
  import Read from "$lib/read.svelte";
  import Watch from "$lib/watch.svelte";

  let clazz = "";
  export {clazz as class};
  export let category: string;
</script>

<div
  class={c("rounded-md border border-blue max-w-fit px-2 py-1 flex items-center space-x-2", clazz)}
>
  {#if category === "Read"}
    <Read class="text-blue w-10 h-10" />
  {:else if category === "Listen"}
    <Listen class="text-blue w-10 h-10" />
  {:else if category === "Watch"}
    <Watch class="text-blue w-10 h-10" />
  {/if}
  <span class="uppercase font-semibold leading-5">{category}</span>
</div>
