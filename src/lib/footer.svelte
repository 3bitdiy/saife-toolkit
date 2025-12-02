<script lang="ts">
  import c from "clsx";

  import OsceLogo from "$lib/osce-footer-logo.svelte";
  import RdrLogo from "$lib/rdr-logo.svelte";

  let clazz = "";
  export {clazz as class};
</script>

<footer class={c("text-white bg-blue-osce min-h-[128px] py-8 px-2 md:px-0", clazz)}>
  <div
    class="container mx-auto h-full space-y-4 md:flex md:items-center md:justify-center md:space-x-48"
  >
    <div>
      <p class="font-bold leading-6">
        This resource hub was supported by Ranking Digital Rights in 2022, a public-interest
        research program that advances corporate accountability for human rights in the digital age.
        RDR works with an ecosystem of stakeholders to set global standards for how private tech
        companies can govern and operate platforms and services that advance freedom of expression,
        information, and privacy.
      </p>
      <p class="font-bold leading-6 whitespace-nowrap mt-6">© 2023 OSCE All rights reserved.</p>
    </div>

    <div class="flex space-x-14">
      <div class="flex flex-col space-y-1">
        <span class="text-xs leading-4">A toolkit by:</span>
        <OsceLogo class="h-20" />
      </div>

      <div class="flex flex-col space-y-1">
        <span class="text-xs leading-4">Co-produced with:</span>
        <RdrLogo class="h-16" />
      </div>
    </div>
  </div>
</footer>
