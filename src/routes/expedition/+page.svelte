<script lang="ts">
  import CommonHeader from "$lib/common-header.svelte";
  import HomeHeroIcon from "$lib/home-hero-icon.svelte";
  import Box from "$lib/expedition-box.svelte";
</script>

<CommonHeader title="SAIFE Expedition">
  <HomeHeroIcon slot="icon" />
  <p class="font-medium leading-5">
    Additional resources for the SAIFE Expedition Conference: “Spotlight on AI and Freedom of
    Expression: A SAIFE Expedition | OSCE.”
  </p>
</CommonHeader>

<main class="container mx-auto py-12 px-4">
  <h2 class="font-extrabold text-3xl leading-9 my-12">Conference description</h2>

  <p class="mb-4 leading-6">
    In December 2022, the OSCE RFoM organized a special conference: the SAIFE Expedition. The event
    started with a high-level opening and screening of the interactive storytelling documentary Made
    to Measure at Vienna’s Stadtkino, followed by a discussion with the film producers and
    reception. On the next day, the event entailed two main panel discussions, one exploring the use
    of AI in promoting newsworthy and public interest content online and the other looking at online
    content governance in times of crises. Aside, the event included several parallel sessions
    co-organised with more than 50 experts from civil society, academia, OSCE executive structures,
    the industry and partner organizations. Thereby, the conference provided an interactive center
    stage for discussions on AI and free speech dialogue, bringing together OSCE participating
    States and various stakeholders. More information can be found here: Spotlight on AI and Freedom
    of Expression: A SAIFE Expedition | OSCE.
  </p>

  <Box title="Panel: Public Interest Framework in the Digital Realm">
    This panel explored the opportunities of a “public interest framework” for the digital
    information landscape and content recommender systems that promote quality media and public
    interest information to address many of the media freedom challenges posed by AI-based content
    governance systems, as identified in the SAIFE Policy Manual. The panel deliberated key
    recommendations of the OSCE Advisory Group of Eminent Experts on Freedom of the Media regarding
    a digital public interest framework. This panel provided a starting point for further
    discussions on opportunities for a healthier and more vibrant online information space –
    conducive to democracy, sustainable development, and comprehensive security.
  </Box>
</main>
