<script lang="ts">
  import c from "clsx";

  export let theme: "light" | "dark" = "light";
</script>

<header
  class={c("min-h-72 py-32", {"header-light": theme === "light", "header-dark": theme === "dark"})}
>
  <div class="container mx-auto h-full">
    <slot />
  </div>
</header>
