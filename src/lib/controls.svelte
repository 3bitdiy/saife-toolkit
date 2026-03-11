<script lang="ts">
  import {beforeNavigate} from "$app/navigation";
  import {base} from "$app/paths";
  import Hamburger from "$lib/hamburger-icon.svelte";
  import Home from "$lib/home-icon.svelte";
  import {page} from "$app/stores";

  let isOpen = false;
  let container: HTMLDivElement;

  const onWindowClick = (e: MouseEvent) => {
    if (container && !container.contains(e.target as Node)) {
      isOpen = false;
    }
  };

  const toggleDropdown = () => {
    isOpen = !isOpen;
  };

  const closeDropdown = () => {
    isOpen = false;
  };

  const menuItems = [
    // {type: "divider"},
    {description: "Learn More About This Resource Hub", href: `${base}/essay`, type: "item"},
    {description: "Resources", href: `${base}/resources`, type: "item"},
    {description: "Dos and Don'ts", href: `${base}/dos-and-donts`, type: "item"},
    {description: "Policy Manual (2025)", href: `${base}/policy-2025`, type: "item"},
    {description: "Conference (2025)", href: `${base}/conference-2025`, type: "item"},
    {description: "Policy Manual (2022)", href: `${base}/policy`, type: "item"},
    {description: "Conference (2022)", href: `${base}/expedition`, type: "item"},
    {description: "Made to Measure", href: "https://www.madetomeasure.online/en/", type: "item"},
    {description: "Glossary", href: `${base}/glossary`, type: "item"},
    {description: "About the OSCE #SAIFE project", href: `${base}/about`, type: "item"},
  ];

  beforeNavigate(closeDropdown);
</script>

<svelte:window on:click={onWindowClick} />

<div bind:this={container} class="bg-white flex items-center relative">
  <!-- <a href={`${base}`}> -->
  <a href={base || "/"}>
    <Home />
  </a>

  <button on:click={toggleDropdown}>
    <Hamburger />
  </button>

  {#if isOpen}
    <div
      class="absolute right-0 top-[60px] w-[min(340px,calc(100vw-1rem))] py-4 px-4 bg-white flex flex-col gap-3"
    >
      {#each menuItems as item}
        {#if item.type === "item"}
          <a
            href={item.href}
            class={"menu-link !block min-w-full box-border border-2 border-solid border-blue rounded-lg font-bold py-2 px-4 transition-colors text-left " +
              ($page.url.pathname === item.href
                ? "bg-blue text-white"
                : "bg-white text-blue hover:bg-blue hover:text-white")}
          >
            {item.description}
          </a>
        {:else if item.type === "divider"}
          <hr class="w-full h-[1px] mx-auto my-4 bg-blue-osce border-0" />
        {/if}
      {/each}
    </div>
  {/if}
</div>
