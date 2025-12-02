<script lang="ts">
  import c from "clsx";

  import Minus from "$lib/minus.svelte";
  import Plus from "$lib/plus.svelte";
  import ShadowBox from "$lib/shadow-box.svelte";

  let clazz = "";
  export {clazz as class};
  export let title: string;

  let isCollapsed = true;

  const toggleCollapse = () => {
    isCollapsed = !isCollapsed;
  };
</script>

<ShadowBox class={c(clazz)}>
  <svelte:fragment>
    <div class={c("flex justify-between items-center", {"mb-10": !isCollapsed})}>
      <h2 class="text-lg uppercase font-extrabold">{title}</h2>
      <button class="group flex items-center" on:click={toggleCollapse}>
        {#if isCollapsed}
          <Plus class="w-10 h-10" />
        {:else}
          <Minus class="w-10 h-10" />
        {/if}
      </button>
    </div>

    {#if !isCollapsed}
      <p class="leading-6 mb-4">
        <slot />
      </p>
    {/if}
  </svelte:fragment>
</ShadowBox>
