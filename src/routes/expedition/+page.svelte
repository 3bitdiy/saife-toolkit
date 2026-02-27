<script lang="ts">
  import CommonHeader from "$lib/common-header.svelte";
  import HomeHeroIcon from "$lib/home-hero-icon.svelte";
  import Box from "$lib/expedition-box.svelte";
</script>

<CommonHeader title="SAIFE Expedition">
  <HomeHeroIcon slot="icon" />
  <p class="font-medium leading-5">
    OSCE Conference Putting a Spotlight on AI and Freedom of Expression
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

  <Box class="mb-8" title="SAIFE Expedition Documents">
    <ul class="space-y-2 list-disc list-inside">
      <li>
        <a href="https://www.osce.org/representative-on-freedom-of-media/534807"
          >SAIFE Expedition annotated agenda</a
        >
      </li>
      <li>
        <a href="https://www.osce.org/representative-on-freedom-of-media/534816"
          >SAIFE Expedition short agenda</a
        >
      </li>
      <li>
        <a href="https://www.osce.org/representative-on-freedom-of-media/534810"
          >SAIFE Expedition list of biographies</a
        >
      </li>
      <li>
        <a href="https://www.osce.org/files/f/documents/b/4/534813.pdf"
          >SAIFE Expedition Resources</a
        >
      </li>
    </ul>
  </Box>

  <Box class="mb-8" title="Panel: Content Governance in Times of Crises">
    <div class="mb-4">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/TNKbvuPEIE4?si=HNqz4pjyte5SdUhF"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      />
    </div>
    <span class="mt-8"
      >Building on the SAIFE Policy Manual and an earlier workshop held with civil society and
      academia, this panel aimed at increasing understanding of the specific challenges of content
      governance in crisis situations and at contextualizing existing recommendations on
      transparency, accountability, inclusiveness, and public oversight. The panel provided guidance
      to OSCE participating States on how to ensure free speech safeguards for automated content
      governance in the context of crises, be it conflict, climate change, or COVID.</span
    >
  </Box>

  <Box class="mb-8" title="Panel: Public Interest Framework in the Digital Realm">
    <div class="mb-4">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/UnvlYXiVqe4?si=mBzkWs-1kVBjvVOZ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      />
    </div>
    <span class="mt-8"
      >This panel explored the opportunities of a “public interest framework” for the digital
      information landscape and content recommender systems that promote quality media and public
      interest information to address many of the media freedom challenges posed by AI-based content
      governance systems, as identified in the SAIFE Policy Manual. The panel deliberated key
      recommendations of the OSCE Advisory Group of Eminent Experts on Freedom of the Media
      regarding a digital public interest framework. This panel provided a starting point for
      further discussions on opportunities for a healthier and more vibrant online information space
      – conducive to democracy, sustainable development, and comprehensive security.</span
    >
  </Box>

  <Box class="mb-8" title="Additional conference resources">
    <ul class="space-y-2 list-disc list-inside">
      <li>
        <a
          href="https://ecnl.org/publications/framework-meaningful-engagement-human-rights-impact-assessments-ai"
          >ECNL framework for meaningful engagement</a
        >
      </li>
      <li>
        <a
          href="https://dslua.org/wp-content/uploads/2023/03/Mapping-report.-Responsibility-for-disinformation-in-wartime.pdf"
          >DigSecLab Ukraine Mapping Report "For whom the bell tolls: responsibility for
          disinformation in wartime"</a
        >
      </li>
      <li>
        <a href="https://fra.europa.eu/en/news/2022/test-algorithms-bias-avoid-discrimination"
          >FRA bias in offensive speech detection algorithms</a
        >
      </li>
      <li><a href="https://anatomyof.ai">Vladan Joler, Anatomy of AI</a></li>
      <li><a href="https://nooscope.ai">Vladan Joler, Nooscope</a></li>
      <li><a href="https://extractivism.online">Vladan Joler, New Extractivism</a></li>
      <li>
        Reports by the Center for Democracy and Technology
        <ul class="ml-6 mt-2 space-y-2 list-disc list-inside">
          <li>
            <a
              href="https://cdt.org/insights/do-you-see-what-i-see-capabilities-and-limits-of-automated-multimedia-content-analysis"
              >https://cdt.org/insights/do-you-see-what-i-see-capabilities-and-limits-of-automated-multimedia-content-analysis</a
            >
          </li>
          <li>
            <a
              href="https://cdt.org/insights/facts-and-their-discontents-a-research-agenda-for-online-disinformation-race-and-gender"
              >https://cdt.org/insights/facts-and-their-discontents-a-research-agenda-for-online-disinformation-race-and-gender</a
            >
          </li>
          <li>
            <a
              href="https://cdt.org/insights/mixed-messages-the-limits-of-automated-social-media-content-analysis"
              >https://cdt.org/insights/mixed-messages-the-limits-of-automated-social-media-content-analysis</a
            >
          </li>
        </ul>
      </li>
      <li>
        <a
          href="https://www.accessnow.org/publication/new-content-governance-in-crises-declaration/"
          >Civil Society Declaration of Principles for Content and Platform Governance in Times of
          Crisis</a
        >
      </li>
      <li>
        <a
          href="https://edri.org/our-work/a-safe-internet-for-all-upholding-private-and-secure-communications"
          >EDRi position paper: A safe internet for all – Upholding private and secure
          communications</a
        >
      </li>
      <li>
        <a href="https://www.unesco.org/en/internet-conference/guidelines"
          >UNESCO Guidelines for the Governance of Digital Platforms</a
        >
      </li>
    </ul>
  </Box>
</main>
