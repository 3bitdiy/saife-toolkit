<script lang="ts">
  import Header from "$lib/header.svelte";
  import HeaderIcon from "$lib/header-icon.svelte";

  export let title: string;
</script>

<Header>
  <div class="flex items-center h-full">
    <div class="flex justify-center space-x-4">
      <div class="flex items-start text-blue-osce space-x-4">
        <slot name="icon" />
        <div>
          <h1 class="font-bold text-3xl leading-8 pb-4">{title}</h1>
          <slot />
        </div>
      </div>
    </div>
  </div>
</Header>
