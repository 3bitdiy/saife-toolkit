<script lang="ts">
  import Header from "$lib/header.svelte";
  import HeaderIcon from "$lib/header-icon.svelte";

  export let title: string;
</script>

<Header>
  <div class="flex items-center h-full">
    <div class="flex justify-center space-x-4">
      <a
        class="flex items-center px-4 space-x-4 hover:border-none"
        href="https://osce.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        <HeaderIcon class="h-10 w-10 shrink-0" />
        <span class="leading-5 text-white font-normal whitespace-nowrap hidden sm:block"
          >back to osce.org</span
        >
      </a>
      <div class="text-blue-osce">
        <h1 class="font-bold text-3xl leading-8 pb-4">{title}</h1>
        <slot />
      </div>
    </div>
  </div>
</Header>
