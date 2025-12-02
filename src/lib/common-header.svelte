<script lang="ts">
  import Header from "$lib/header.svelte";
  import HeaderIcon from "$lib/header-icon.svelte";

  export let title: string;
</script>

<Header>
  <div class="flex items-center h-full">
    <div class="flex justify-center space-x-4">
      <HeaderIcon class="h-10 w-10 shrink-0" />

      <div class="text-blue-osce">
        <h1 class="font-bold text-3xl leading-8 pb-4">{title}</h1>

        <slot />
      </div>
    </div>
  </div>
</Header>
