<script lang="ts">
  import c from "clsx";

  export let theme: "light" | "dark" = "dark";
</script>

<header
  class={c("h-[371px]", {"header-light": theme === "light", "header-dark": theme === "dark"})}
>
  <div class="container mx-auto h-full">
    <slot />
  </div>
</header>
