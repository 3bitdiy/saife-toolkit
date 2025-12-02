<script lang="ts">
  export let title: string;
  export let href: string;
</script>

<a class="flex flex-col space-y-4 hover:border-none font-normal" {href}>
  <slot name="image" />
  <h4 class="font-bold leading-8 text-2xl">{title}</h4>
  <slot name="description" />
</a>
