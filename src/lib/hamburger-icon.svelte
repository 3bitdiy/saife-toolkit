<script lang="ts">
  import c from "clsx";

  let clazz = "";
  export {clazz as class};
</script>

<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="60" height="60" class="hamburger-icon-bg" />
  <path
    d="M21.875 23.6201H38.125"
    class="hamburger-icon-path"
    stroke-width="2.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M21.875 29.8701H38.125"
    class="hamburger-icon-path"
    stroke-width="2.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M21.875 36.1201H38.125"
    class="hamburger-icon-path"
    stroke-width="2.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>

<style>
  .hamburger-icon-bg {
    fill: white;
    transition: fill 0.2s;
  }
  .hamburger-icon-path {
    stroke: rgb(36, 57, 101);
    transition: stroke 0.2s;
  }
  svg:hover .hamburger-icon-bg {
    fill: rgb(36, 57, 101);
  }
  svg:hover .hamburger-icon-path {
    stroke: white;
  }
</style>
