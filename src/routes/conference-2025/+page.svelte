<script lang="ts">
  import {base} from "$app/paths";
  import CommonHeader from "$lib/common-header.svelte";
  import HomeHeroIcon from "$lib/home-hero-icon.svelte";
  import Box from "$lib/expedition-box.svelte";
</script>

<CommonHeader title="Healthy Online Information Spaces: From Policy Guidance to Pathways Forward">
  <HomeHeroIcon slot="icon" />
</CommonHeader>

<main class="container mx-auto py-12 px-4">
  <p class="mb-4 leading-6">
    The “Healthy Online Information Spaces: From Policy Guidance to Pathways Forward” conference
    took place on Wednesday, 22 October 2025, at Hofburg (Vienna) in the framework of the RFoM
    project “Towards Healthy Online Information Spaces”.
  </p>
  <p class="mb-4 leading-6">
    The event served as an interactive forum for in-depth discussion on the pressing challenges and
    emerging opportunities posed by digital technologies for freedom of expression and media
    freedom. With more than 140 participants, representing States, civil society, academia, media,
    and OSCE executive structures, the conference ensured broad and diverse representation across
    geographies, backgrounds, and lived experiences.
  </p>
  <p class="mb-4 leading-6">
    A series of workshops and participatory sessions offered interactive, multi-stakeholder
    discussions on issues shaping media freedom in the digital age. The afternoon of the event was
    dedicated to the launch of the OSCE RFoM Policy Manual on “Safeguarding Media Freedom in the Age
    of Big Tech Platforms and AI”. A high-level panel presented and discussed the Manual’s key
    recommendations, designed to support OSCE participating States in ensuring the availability and
    accessibility of public interest journalism and reliable information in the digital era.
  </p>

  <Box
    class="mb-8"
    title="Launch of the Policy Manual on Safeguarding Media Freedom in the Age of Big Tech Platforms and AI"
  >
    <div class="mb-4">
      <div class="aspect-w-16 aspect-h-9 my-2">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/OrZiPjVHSQo"
          title="Launch Video"
          frameborder="0"
          allowfullscreen
        />
      </div>
      <p class="mt-4"><a href={`${base}/policy`} class="text-blue-osce">Policy Manual</a></p>
    </div>
  </Box>

  <Box class="mb-8" title="Outcome of the Interactive Sessions and Closing">
    <div class="mb-4">
      <div class="aspect-w-16 aspect-h-9 my-2">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/sb4YUVppOOE"
          title="Closing Session Video"
          frameborder="0"
          allowfullscreen
        />
      </div>
    </div>
  </Box>

  <Box title="Resources">
    <ul class="font-medium leading-6 space-y-2 list-disc list-inside">
      <li>Conference final report</li>
      <li>Annotated agenda</li>
      <li>List of biographies</li>
      <li>Information package</li>
    </ul>
  </Box>
</main>
