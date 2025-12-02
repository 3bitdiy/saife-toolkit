<script lang="ts">
  import c from "clsx";

  import Do from "$lib/do.svelte";
  import Dont from "$lib/dont.svelte";
  import ShadowBox from "$lib/shadow-box.svelte";

  let clazz = "";
  export {clazz as class};
  export let kind: "do" | "dont";
  export let text: string;
</script>

<ShadowBox theme={kind} class={c(clazz)}>
  <svelte:fragment>
    <h3
      class={c("font-extrabold text-xl flex items-center space-x-2 mb-6", {
        "text-green": kind === "do",
        "text-rose": kind === "dont",
      })}
    >
      {#if kind === "do"}
        <Do class="w-8 h-8 bg-green p-1.5 rounded-md" />
        <span>Do</span>
      {/if}

      {#if kind === "dont"}
        <Dont class="w-8 h-8" />
        <span>Don't</span>
      {/if}
    </h3>

    <p class="font-semibold text-lg text-black">{text}</p>
  </svelte:fragment>
</ShadowBox>
