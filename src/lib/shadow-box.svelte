<!-- <script lang="ts">
  import c from "clsx";

  let clazz = "";
  export {clazz as class};
  export let theme: "regular" | "do" | "dont" = "regular";
</script>

<div
  class={c("bg-white p-8 rounded-[1.25rem] shadow-box shadow-blue-osce", clazz, {
    "shadow-blue-osce": theme === "regular",
    "shadow-green": theme === "do",
    "shadow-rose": theme === "dont",
  })}
>
  <slot />
</div> -->

<script lang="ts">
  import c from "clsx";
  import {createEventDispatcher} from "svelte";

  const dispatch = createEventDispatcher();

  let clazz = "";
  export {clazz as class};
  export let theme: "regular" | "do" | "dont" = "regular";
</script>

<div
  class={c("bg-white p-8 rounded-[1.25rem] shadow-box shadow-blue-osce", clazz, {
    "shadow-blue-osce": theme === "regular",
    "shadow-green": theme === "do",
    "shadow-rose": theme === "dont",
  })}
  on:click={(e) => dispatch("click", e)}
>
  <slot />
</div>
