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

<ShadowBox class={c("!py-[20px] !px-[30px]", clazz)} on:click={toggleCollapse}>
  <svelte:fragment>
    <div class={c("flex justify-between items-center cursor-pointer", {"mb-[30px]": !isCollapsed})}>
      <h2 class="text-lg uppercase font-extrabold">{title}</h2>

      <button
        type="button"
        class="group flex items-center"
        on:click|stopPropagation={toggleCollapse}
      >
        {#if isCollapsed}
          <Plus class="w-[30px] h-[30px]" />
        {:else}
          <Minus class="w-[30px] h-[30px]" />
        {/if}
      </button>
    </div>

    {#if !isCollapsed}
      <div class="leading-6 mb-4" on:click|stopPropagation>
        <slot />
      </div>
    {/if}
  </svelte:fragment>
</ShadowBox>
