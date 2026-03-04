<script lang="ts">
  import {onDestroy, onMount} from "svelte";
  import {browser} from "$app/environment";
  import c from "clsx";

  export let threshold = 400; // px
  let clazz = "";
  export {clazz as class};

  let visible = false;

  const update = () => {
    if (!browser) return;
    visible = window.scrollY > threshold;
  };

  const goTop = () => {
    if (!browser) return;
    window.scrollTo({top: 0, behavior: "smooth"});
  };

  onMount(() => {
    if (!browser) return;

    update();
    window.addEventListener("scroll", update, {passive: true});

    return () => {
      window.removeEventListener("scroll", update);
    };
  });

  // optional: extra safety
  onDestroy(() => {
    if (!browser) return;
    window.removeEventListener("scroll", update);
  });
</script>

<button
  type="button"
  aria-label="Back to top"
  on:click={goTop}
  class={c(
    "fixed bottom-6 right-6 z-50 transition-opacity duration-200",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-osce focus-visible:ring-offset-2",
    visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
    clazz,
  )}
>
  <!-- SVG (tvoj) -->
  <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_4947_105438)">
      <rect x="3" width="50" height="50" rx="25" fill="white" shape-rendering="crispEdges" />
      <path
        d="M28 40C36.2843 40 43 33.2843 43 25C43 16.7157 36.2843 10 28 10C19.7157 10 13 16.7157 13 25C13 33.2843 19.7157 40 28 40Z"
        stroke="#154678"
        stroke-width="2"
      />
      <path
        d="M35 27L29 22"
        stroke="#154678"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M23 27L29 22"
        stroke="#154678"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_4947_105438"
        x="0"
        y="0"
        width="53"
        height="53"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-3" dy="3" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.2 0 0 0 0 0.321569 0 0 0 0 0.564706 0 0 0 1 0"
        />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4947_105438" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_4947_105438"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
</button>
