<script lang="ts">
  import Chevron from "$lib/chevron.svelte";
  import CommonHeader from "$lib/common-header.svelte";
  import ShadowBox from "$lib/shadow-box.svelte";
  import {base} from "$app/paths";
</script>

<CommonHeader title="About the OSCE #SAIFE project" />

<main class="container mx-auto py-12 px-4">
  <p class="mb-4 leading-6">
    In 2019, the Office of the OSCE Representative on Freedom of the Media launched the “Spotlight
    on Artificial Intelligence and Freedom of Expression (#SAIFE)” project, the aim of which is to
    develop policy recommendations on the most effective ways to safeguard freedom of expression and
    media freedom when using AI and advanced machine-learning technologies.
  </p>

  <p class="mb-4 leading-6">
    This SAIFE initiative aligns with the OSCE RFoM’s mandate to assist participating States in
    fulfilling their commitments on freedom of expression and media freedom. Who decides (and how)
    to make certain information and content available, to prioritize, or remove matters enormously.
    Just like it matters when governments shape our information space, be it through the misuse of
    arbitrary legislation or any other forms of censorship, it also matters when online platforms
    interfere with our information space. It matters when illegal or other harmful content spreads
    online, endangering our security and creating deeper divides in our societies. It matters that
    individuals and communities are able to seek, receive, and impart the same kinds of information
    no matter where in the world they might be. The way online information is curated and moderated
    has a direct and significant impact on global peace, stability and comprehensive security. The
    international community must ensure that the gatekeepers to information – and their business
    practices— are in line with international human rights standards.
  </p>

  <p class="mb-4 leading-6">
    For the SAIFE project, more than 120 experts from the academic, policy, and advocacy communities
    have come together over two years to explore the impacts of AI on freedom of expression and to
    develop policy recommendations for the deployment of these technologies in ways that safeguard
    media freedom and fundamental freedom of expression rights, along four main thematic areas of
    concerns:
  </p>

  <ol class="list-disc list-inside">
    <li class="marker:text-2xl">
      Content moderation and security: Algorithmic decision-making, machine-learning, and semantic
      technologies are increasingly used to help contend with the huge number of content removal
      decisions social media platforms make on a daily basis in an attempt to tackle various
      legitimate security concerns of the digital era (terrorism, violent extremism, cybercrime,
      coordinated disinformation campaigns). However, these technologies can have vast, often
      unintentional, side-effects on our information environments, and can even produce
      discriminatory outcomes.
    </li>

    <li class="marker:text-2xl">
      Content moderation and hate speech: While legal definitions of hate speech vary, various forms
      of racism, anti-Semitism, and xenophobia are increasingly spreading through social networks.
      Automated filters and machine-learning based techniques are frequently deployed to tackle
      these issues. However, these technologies are “context blind” and not sophisticated enough to
      detect nuances of hate speech which can lead to over-censorship of legitimate content or under
      enforcement of content that is unlawful and warrants removal, with a particularly detrimental
      impact on already marginalized communities.
    </li>

    <li class="marker:text-2xl">
      Content curation and media pluralism: The technological curation of our information space by
      AI fundamentally affects the way we encounter ideas and information online. This can limit
      information pluralism and diversity and undermine freedom of thought and opinion, which are
      necessary for the free exchange of ideas in democratic societies.
    </li>

    <li class="marker:text-2xl">
      Content curation and surveillance: AI technologies heavily rely on the collection, processing,
      and sharing of large amounts of data, both about individual and collective behavior. This data
      can be used to profile individuals and predict future behaviour. Some of these uses can have
      serious repercussions on the right to privacy, as well as on the right to freedom of
      expression and information.
    </li>
  </ol>

  <ShadowBox class="my-12">
    <svelte:fragment>
      <h3 class="font-extrabold text-2xl leading-8 mb-12">
        What do we mean by “artificial intelligence”?
      </h3>

      <p class="mb-4">
        Artificial intelligence refers to systems that resemble, carry out, or mimic functions that
        are typically thought of as requiring human-like intelligence. Examples of these systems
        include facial recognition software, natural language processing, and other applications.
        The development and deployment of these technologies can have a significant impact on human
        rights, including the rights to freedom of expression, access to information, to form and
        hold opinions, non-discrimination, and privacy.
      </p>

      <p class="mb-4">
        In this Resource Hub, we use “artificial intelligence” as a blanket term to encompass forms
        of automation, algorithmic decision making, and machine learning, although these
        technologies have different capacities and functions
      </p>

      <div class="flex">
        <span class="font-bold">See the Glossary to read more about these terms. </span>

        <a
          href={`${base}/glossary`}
          class="ml-4 group flex items-center space-x-2 hover:border-none"
        >
          <span class="rounded-full border-2 border-blue p-2 shrink-0">
            <Chevron
              class="w-6 h-6 stroke-blue-osce transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </a>
      </div>
    </svelte:fragment>
  </ShadowBox>

  <h2 class="font-extrabold text-3xl leading-9 my-12">
    How does AI shape our information environment?
  </h2>

  <p class="mb-4 leading-6">
    Internet intermediaries, and social media platforms in particular, have increasingly turned to
    AI systems to help personalize and disseminate news and information, as well as to flag and
    remove harmful or unlawful content. These applications have dramatically increased the already
    significant power that online platforms have in shaping our information environments, and in
    determining what content we access, view, read, and share online.
  </p>

  <p class="mb-4 leading-6">
    As AI systems play a central role in defining our news and information diets, we must ask: how
    are these systems influencing—or threatening—our rights to freedom of expression and access to
    information? What are the broader implications for the free exchange of ideas and opinions and
    for our ability to exercise the political rights and freedoms that foster healthy democratic
    societies?
  </p>

  <p class="mb-4 leading-6">
    The <a href="https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2022"
      >2022 Digital News Report</a
    > by the Reuters Institute of Journalism at Oxford estimates that 77 percent of all online news is
    accessed through so-called “side door” channels—search engines, social media, and news aggregators—that
    rely on AI systems to both serve and censor the news and information we consume.
  </p>

  <p class="mb-4 leading-6">
    These technologies and systems are designed to deliver content [MOU1] based on how much
    engagement it is likely to generate—as measured by the number of views, likes, and shares—rather
    than for its accuracy, diversity, or public-interest value. Platforms target individuals and
    groups with tailored content (and ads) based on algorithmically-generated collections of our
    data, touching everything from our political affiliations and preferences, to our gender, race,
    age, income, and other characteristics.
  </p>

  <p class="mb-4 leading-6">
    At the root of the problem is a profit model that is based on the mass collection of data about
    our digital activities and behaviors. This is what Harvard scholar Shoshanna Zuboff calls
    “surveillance capitalism.” <a class="fgoto" id="b1" href="#f1">[1]</a> Many platforms today derive
    their revenue from targeted advertising[JH2] , which is powered by opaque algorithmic systems designed
    to capture as much of our data as possible, and then use it to drive reach and engagement, and maximize
    corporate profits. This system creates the distribution channels through which divisive, discriminatory,
    hateful, and illegal online content flows.
  </p>

  <p>
    <span id="f1"> 1.</span> Zuboff, Shoshana. 2019. The Age of Surveillance Capitalism: The Fight
    for a Human Future at the New Frontier of Power. First edition. New York: PublicAffairs.
    <a href="#b1" class="freturn">↩</a>
  </p>

  <ShadowBox class="my-12">
    <div class="flex">
      <span
        >Go to the <a href={`${base}/resources`}>#SAIFE resources</a> to access materials and expert
        contributions produced as part of the #SAIFE project.</span
      >

      <a
        href={`${base}/resources`}
        class="ml-4 group flex items-center space-x-2 hover:border-none"
      >
        <span class="rounded-full border-2 border-blue p-2 shrink-0">
          <Chevron
            class="w-6 h-6 stroke-blue-osce transition-transform duration-300 group-hover:translate-x-1"
          />
        </span>
      </a>
    </div>
  </ShadowBox>
</main>
