<script lang="ts">
  import ArrowLeft from "$lib/arrow-left.svelte";
  import Controls from "$lib/controls.svelte";
  import OsceLogo from "$lib/osce-logo.svelte";
</script>

<header class="h-[60px] bg-blue-osce flex justify-between">
  <a class="flex items-center px-4 space-x-4 hover:border-none" href="https://osce.org">
    <ArrowLeft class="h-5 w-5 shrink-0" />
    <OsceLogo class="h-10" />
    <span class="leading-5 text-white whitespace-nowrap hidden sm:block">back to osce.org</span>
  </a>

  <Controls />
</header>
