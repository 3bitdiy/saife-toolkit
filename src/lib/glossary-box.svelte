<script lang="ts">
  /* eslint svelte/no-at-html-tags: "off" */
  import c from "clsx";

  import Minus from "$lib/minus.svelte";
  import Plus from "$lib/plus.svelte";
  import ShadowBox from "$lib/shadow-box.svelte";

  let clazz = "bg-white p-8 rounded-[1.25rem] shadow-box shadow-blue-osce";
  export {clazz as class};
  export let title: string;
  export let description: string;
  export let sections: Array<{title: string; description: string}>;

  let isCollapsed = true;

  const toggleCollapse = () => {
    isCollapsed = !isCollapsed;
  };
</script>

<ShadowBox class={c(clazz)}>
  <svelte:fragment>
    <div class={c("flex justify-between items-center", {"mb-10": !isCollapsed})}>
      <h2 class="text-lg uppercase font-extrabold">{title}</h2>
      <button on:click={toggleCollapse}>
        {#if isCollapsed}
          <Plus class="w-10 h-10" />
        {:else}
          <Minus class="w-10 h-10" />
        {/if}
      </button>
    </div>

    {#if !isCollapsed}
      {@html description}

      {#if sections.length > 0}
        <hr class="my-10 bg-blue h-[3px]" />

        <div class="flex flex-col space-y-6">
          {#each sections as section}
            <div>
              <span class="font-bold">{section.title}</span>
              {@html section.description}
            </div>
          {/each}
        </div>
      {/if}
    {/if}
  </svelte:fragment>
</ShadowBox>
