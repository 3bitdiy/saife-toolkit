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
    {description: "About the OSCE RFoM’s work on AI", href: `${base}/about`, type: "item"},
    {description: "Learn more about this Resource Hub", href: `${base}/essay`, type: "item"},
    {description: "Resources", href: `${base}/resources`, type: "item"},
    {description: "Dos and Don'ts", href: `${base}/dos-and-donts`, type: "item"},
    {
      description: "Policy Manual on Media Freedom and AI (2025)",
      href: `${base}/policy-2025`,
      type: "item",
    },
    {description: "Conference (2025)", href: `${base}/conference-2025`, type: "item"},
    {
      description: "Policy Manual on Freedom of Expression and AI (2022)",
      href: `${base}/policy`,
      type: "item",
    },
    {description: "Conference (2022)", href: `${base}/expedition`, type: "item"},
    {description: "Made to Measure", href: "https://www.madetomeasure.online/en/", type: "item"},
    {description: "Glossary", href: `${base}/glossary`, type: "item"},
  ];

  beforeNavigate(closeDropdown);
</script>

<svelte:window on:click={onWindowClick} />

<div bind:this={container} class="flex items-center relative">
  <!-- <a href={`${base}`}> -->
  <a href={base || "/"}>
    <Home class="w-[48px] h-[48px] min-[335px]:w-[60px] min-[335px]:h-[60px]" />
  </a>

  <button on:click={toggleDropdown}>
    <Hamburger class="w-[48px] h-[48px] min-[335px]:w-[60px] min-[335px]:h-[60px]" />
  </button>

  {#if isOpen}
    <div
      class="absolute right-0 top-[60px] w-screen sm:w-[463px] py-4 px-4 bg-white flex flex-col gap-3 z-50 overflow-y-auto max-h-[calc(100vh-60px)] sm:max-h-none"
    >
      {#each menuItems as item}
        {#if item.type === "item"}
          <a
            href={item.href}
            class={"menu-link !block min-w-full max-[411px]:max-w-[325px] box-border border-2 border-solid border-blue-osce rounded-lg font-bold py-1.5 px-3 sm:py-2 sm:px-4 text-sm min-[412px]:text-base transition-colors text-left " +
              ($page.url.pathname === item.href
                ? "bg-blue-osce text-white"
                : "bg-white text-blue-osce hover:bg-blue-osce hover:text-white")}
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
