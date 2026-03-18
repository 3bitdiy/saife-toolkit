<script lang="ts">
  import Header from "$lib/header.svelte";

  export let title: string;
</script>

<Header>
  <div class="flex items-start lg:items-center h-full">
    <div class="flex justify-center">
      <div class="flex flex-col text-white gap-2">
        <div class="flex items-start sm:items-center gap-4">
          <slot name="icon" />
          <h1 class="font-bold text-2xl md:text-3xl leading-8">{title}</h1>
        </div>
        <div class="[&_p]:leading-6"><slot /></div>
      </div>
    </div>
  </div>
</Header>
