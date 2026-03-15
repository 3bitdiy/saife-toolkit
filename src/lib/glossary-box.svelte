<script lang="ts">
  import c from "clsx";

  import Minus from "$lib/minus.svelte";
  import Plus from "$lib/plus.svelte";
  import ShadowBox from "$lib/shadow-box.svelte";

  let clazz = "bg-white !py-[20px] !px-[30px] rounded-[1.25rem] shadow-box shadow-blue-osce";
  export {clazz as class};
  export let title: string;
  export let description: string;
  export let sections: Array<{title: string; description: string}> = [];

  let isCollapsed = true;

  const toggleCollapse = () => {
    isCollapsed = !isCollapsed;
  };
</script>

<ShadowBox class={c(clazz)} on:click={toggleCollapse}>
  <svelte:fragment>
    <div class={c("flex justify-between items-center cursor-pointer", {"mb-[30px]": !isCollapsed})}>
      <h2 class="text-lg uppercase font-extrabold">{title}</h2>

      <button type="button" on:click|stopPropagation={toggleCollapse}>
        {#if isCollapsed}
          <Plus class="w-[30px] h-[30px]" />
        {:else}
          <Minus class="w-[30px] h-[30px]" />
        {/if}
      </button>
    </div>

    {#if !isCollapsed}
      <div on:click|stopPropagation>
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
      </div>
    {/if}
  </svelte:fragment>
</ShadowBox>
