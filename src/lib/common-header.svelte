<script lang="ts">
  import Header from "$lib/header.svelte";

  export let title: string;
</script>

<Header>
  <div class="flex items-start lg:items-center h-full">
    <div class="flex justify-center">
      <div class="flex flex-col sm:flex-row items-start text-white gap-4">
        <slot name="icon" />
        <div>
          <h1 class="font-bold text-2xl md:text-3xl leading-8 pb-4">{title}</h1>
          <div class="[&_p]:leading-6"><slot /></div>
        </div>
      </div>
    </div>
  </div>
</Header>
