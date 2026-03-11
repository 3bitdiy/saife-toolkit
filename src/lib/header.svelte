<script lang="ts">
  import c from "clsx";

  export let theme: "light" | "dark" = "dark";
</script>

<header
  class={c("min-h-[160px] py-6 lg:h-[371px] lg:py-0", {"header-light": theme === "light", "header-dark": theme === "dark"})}
>
  <div class="container mx-auto h-full">
    <slot />
  </div>
</header>
