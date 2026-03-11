<script lang="ts">
  import c from "clsx";
  import {createEventDispatcher} from "svelte";

  const dispatch = createEventDispatcher();

  let clazz = "";
  export {clazz as class};
  export let theme: "regular" | "do" | "dont" = "regular";
</script>

<div
  class={c("bg-white rounded-[1.25rem] border shadow-box", clazz, {
    "p-6 md:p-10 lg:p-[60px] border-blue shadow-blue-osce": theme === "regular",
    "p-[20px] border-green shadow-green": theme === "do",
    "p-[20px] border-rose shadow-rose": theme === "dont",
  })}
  on:click={(e) => dispatch("click", e)}
>
  <slot />
</div>
