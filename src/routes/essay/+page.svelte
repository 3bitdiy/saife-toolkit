<script lang="ts">
  import CommonHeader from "$lib/common-header.svelte";
  import ShadowBox from "$lib/shadow-box.svelte";
  import {base} from "$app/paths";
  import madeToMeasure from "$lib/assets/made-to-measure.png";
</script>

<CommonHeader
  title="Freedom of expression in the age of artificial intelligence:
  the risks and challenges to online speech and media freedom"
/>

<main class="container mx-auto py-12 px-4">
  <p class="mb-4 leading-6">
    In 1842, Ada Lovelace had declared that “the Analytical Engine has no pretensions whatever to
    originate anything. It can do whatever we know how to order it to perform. It can follow
    analysis, but it has no power of anticipating any analytical relations or truths. Its province
    is to assist us in making available what we are already acquainted with.”
  </p>

  <p class="mb-4 leading-6">
    Almost two centuries later, we are grappling with these same fundamental issues, as the impacts
    of artificial intelligence on society unfold. Technological advances in the past decade have
    fueled a boom in AI applications—in communications, banking, health care, manufacturing,
    criminal justice, and national security—in ways that are radically reshaping our private and
    public lives. The advent of generative AI applications, in particular, accelerated many of these
    developments.
  </p>

  <p class="mb-4 leading-6">
    While proponents say these technologies hold the promise of tackling some of society’s most
    complex challenges, a growing number of policy experts and advocates warn that AI has as much
    potential to erode human rights, harm our democracies, and further entrench and amplify
    discrimination and global inequity at scale. And in the rush to innovate, it has become
    increasingly apparent that neither governments nor private companies have put adequate human
    rights protections and governance mechanisms in place to ensure that AI’s benefits to society
    outweigh the harms.
  </p>

  <ShadowBox class="my-12">
    <h3 class="font-extrabold text-2xl leading-8 mb-12">
      What do we mean by “artificial intelligence”?
    </h3>
    <p class="mb-4">
      Artificial intelligence refers to systems that resemble, carry out, or mimic functions that
      are typically thought of as requiring human-like intelligence. Examples of these systems
      include facial recognition software, natural language processing, and other applications. The
      development and deployment of these technologies can have a significant impact on human
      rights, including the rights to freedom of expression, access to information, to form and hold
      opinions, non-discrimination, and privacy. In this Resource Hub, we use “artificial
      intelligence” as a blanket term to encompass forms of automation, algorithmic decision making,
      and machine learning, although these technologies have different capacities and functions.
    </p>
    <p class="mb-4">
      Generative AI refers to AI models and tools trained on multi-format datasets with the
      potential to generate human-like outputs such as text, image, video, music or action based on
      the patterns identified in the data it was trained on (including both novel output and
      modified existing content).
    </p>
    <p>
      See the&nbsp;<a href={`${base}/glossary`}>Glossary</a> to read more about these terms.
    </p>
  </ShadowBox>

  <h2 class="font-extrabold text-3xl leading-9 my-12">
    How does AI shape our information environment?
  </h2>

  <p class="mb-4 leading-6">
    A handful of dominant digital platforms and AI companies increasingly shape how information is
    produced, distributed, accessed, and monetized. Internet intermediaries, and social media
    platforms in particular, have increasingly turned to AI systems to help personalize and
    disseminate news and information, as well as to flag and remove harmful or unlawful content.
    According to the annual Digital News Report by the Reuters Institute of Journalism at Oxford,
    the vast majority of news is accessed through platforms – search engines, social media, news
    aggregators, and, increasingly chatbots.
  </p>

  <p class="mb-4 leading-6">
    As AI systems play a central role in defining our news and information diets, we must ask: how
    are these systems influencing—or threatening—our rights to freedom of expression and access to
    information? What are the broader implications for the free exchange of ideas and opinions and
    for our ability to exercise the political rights and freedoms that foster healthy democratic
    societies?
  </p>

  <p class="mb-4 leading-6">
    AI technologies and systems to disseminate content are designed to deliver content based on how
    much engagement it is likely to generate—as measured by the number of views, likes, and
    shares—rather than for its accuracy, diversity, or public-interest value. Platforms target
    individuals and groups with tailored content (and ads) based on algorithmically-generated
    collections of our data, touching everything from our political affiliations and preferences, to
    our gender, race, age, income, and other characteristics.
  </p>

  <p class="mb-4 leading-6">
    Moreover, the use of AI to moderate content can lead to problematic results: these systems can
    misidentify and remove legitimate content in some instances—a form of prior restraint that
    results in over removal and thus censorship—while failing to accurately or consistently spot
    harmful, abusive, or illegal content, in which case these materials continue to proliferate
    online. Both false positives and false negatives can have severe impacts on the online
    information landscape and enjoyment of freedom of expression of individuals and communities. The
    removal of legitimate speech by automated tools can restrict access to information, limit media
    pluralism, and threaten freedom of expression. Investigations by media and civil society have
    revealed numerous cases in which social media platforms have blocked or removed opposition posts
    and hashtags during times of political unrest. At the other end of the spectrum, the flood of
    hateful, racist, toxic speech can have a deeply corrosive effect on public discourse but can
    also perpetuate discrimination and other types of human rights harms toward individuals and
    groups both on- and offline.
  </p>

  <p class="mb-4 leading-6">
    Ample case studies<a class="fgoto" id="b1" href="#f1">[1]</a> point to how AI-based content
    curation and moderation can distort or reshape online news diets in ways that restrict or limit
    the free flow of ideas and opinions—essential prerequisites of healthy democratic systems.
    Research has shown how AI-based content curation can create so-called “filter bubbles” or “echo
    chambers,” which dramatically limit exposure to views and information that do not align with an
    individual’s already-established beliefs. While the effects of such “filter bubbles” on an
    individuals’ beliefs or behaviors is unclear—and in some cases their existence has been found to
    have been overstated—what is certain is that filter bubbles can accentuate and drive political
    and societal polarization, which in turn can have a deleterious and harmful effect on the open
    exchange of opinions and ideas.<a class="fgoto" id="b2" href="#f2">[2]</a>
  </p>

  <p class="mb-4 leading-6">
    Generative AI applications perpetuate and accelerate many of the challenges to free expression
    and media freedom already present in the platform environment. They risk further concentrating
    power, disrupting news production and revenue models, and relying on large volumes of
    journalistic and creative content for training that is often used without meaningful consent,
    compensation, or attribution. At the same time, generative AI existing challenges through
    inaccuracies and so-called ‘hallucinations’, the amplification of bias, and the erosion of trust
    in information by blurring the line between authentic and synthetic content. These dynamics
    threaten the integrity of the information ecosystem and complicate efforts to ensure
    accountability, transparency, and respect for human rights in the digital sphere.
  </p>

  <p class="mb-4 leading-6">
    At the root of the problem is a profit model that is based on the mass collection of data about
    our digital activities and behaviors. This is what Harvard scholar Shoshanna Zuboff called
    “surveillance capitalism” as early as 2014, before many of these dynamics escalated.<a
      class="fgoto"
      id="b3"
      href="#f3">[3]</a
    >
    Many platforms derive their revenue from targeted advertising, which is powered by opaque algorithmic
    systems designed to capture as much of our data as possible, and then use it to drive reach and engagement,
    and maximize corporate profits. This system creates the distribution channels through which divisive,
    discriminatory, hateful, and illegal online content flows. Big Tech platforms have concentrated gatekeeping
    power over information, not only by deciding what content is available, but by determining what content
    gets attention – by dominating how information is produced, prioritized, disseminated and monetized.
    In short, they control both the infrastructure and technology required to take part in the public
    debate, and hence over the information ecosystem itself. This raises not only technical and regulatory
    complexities, but also profound challenges to the democratic role of the media and the right to seek,
    receive, and impart information.
  </p>

  <ShadowBox class="my-12">
    <h3 class="font-extrabold text-2xl leading-8 mb-12">
      How much do private platforms know about you?
    </h3>
    <p class="mb-4">
      A team of documentary filmmakers set out to answer this question – and to illustrate how the
      digital traces of everything we do online can be used to assemble powerful profiles about
      individuals, and even to manipulate our opinions and expressions. Made to Measure exposes the
      power of surveillance capitalism and how much private companies know – and can predict – about
      who we are.
    </p>
    <a href="https://www.madetomeasure.online/en/" target="_blank" rel="noopener noreferrer">
      <img
        class="mb-4 w-full object-cover rounded-lg transition-transform duration-200 hover:scale-105"
        src={madeToMeasure}
        alt="Made to Measure"
      />
    </a>
    <p class="mb-4">
      This interactive film was co-produced in 2022 by the Organization for Security and
      Co-operation in Europe, Office of the Representative on Freedom of the Media (OSCE RFoM), as
      part of the “Spotlight on Artificial Intelligence & Freedom of Expression (SAIFE)” project.
    </p>
    <a
      class="group flex items-center space-x-2 hover:border-none ml-auto"
      href="https://madetomeasure.online/en"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>Watch</span>
      <span class="rounded-full border-2 border-blue p-2 shrink-0">
        <svg
          class="w-6 h-6 stroke-blue-osce transition-transform duration-300 group-hover:translate-x-1"
          viewBox="0 0 9 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.29932 1.06445L7.29932 7.06445L1.29932 13.0645"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    </a>
  </ShadowBox>

  <h2 class="font-extrabold text-3xl leading-9 my-12">
    AI and human rights: a global public policy challenge
  </h2>
  <p class="mb-4">
    Many governments around the world are working to develop AI policies and regulations, as the
    pace of tech development and AI applications accelerates. In 2026, lawmakers in more than 70
    countries have launched efforts to develop domestic AI policies, amid ongoing initiatives aimed
    at coordinating multinational AI governance frameworks.<a class="fgoto" id="b4" href="#f4"
      >[4]</a
    >
  </p>
  <p class="mb-4">
    This has sparked wider debates among domestic and international policy makers, business leaders,
    and civil society over how to design AI policies that foster tech innovation while also
    safeguarding human rights. Policymakers must work urgently, and together with a wide spectrum of
    stakeholders, to establish adequate human rights protections and governance mechanisms to ensure
    that AI works to benefit society and to advance, rather than erode human rights and fundamental
    freedoms. This is particularly pressing in the area of media freedom and freedom of expression
    that are essential to the functioning of healthy democratic systems and societies. Technology
    should be leveraged to reinforce democratic processes and provide healthy information spaces for
    a well-informed public debate. Policymakers in many jurisdictions are turning to AI as a
    one-size-fits-all solution for tackling harmful or unlawful content online, despite the fact
    that these technologies are unreliable and pose serious risks to freedom of expression and the
    free flow of information and ideas online.
  </p>
  <p class="mb-4">
    In ongoing discussions about the use of AI to govern online content, some governments and
    policymakers have prioritized national security concerns over the protection of human
    rights—which rights groups and experts warn sets up a false dichotomy between protecting state
    security and safeguarding human rights. Lawmakers should therefore take care to avoid pitting
    security concerns against freedom of expression rights—as lasting, comprehensive security cannot
    be achieved without respect for human rights and functioning democratic institutions.
  </p>

  <ShadowBox class="my-12">
    <h3 class="font-extrabold text-2xl leading-8 mb-12">
      Safeguarding freedom of expression in the age of AI: guidelines for policy makers
    </h3>
    <div class="group flex flex-row items-center space-x-2 mb-4">
      <p class="w-10/12">
        Read the <a href="/dos-and-donts">Dos and Don’ts</a> summarizing key points that policy makers
        should take into consideration as they develop AI strategies and policies.
      </p>
      <a href="/dos-and-donts" class="group flex items-center hover:border-none"
        ><span class="rounded-full border-2 border-blue p-2 shrink-0"
          ><svg
            class="w-6 h-6 stroke-blue-osce transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 9 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ><path
              d="M1.29932 1.06445L7.29932 7.06445L1.29932 13.0645"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            /></svg
          ></span
        ></a
      >
    </div>
    <div class="group flex flex-row items-center space-x-2 mb-4">
      <p class="w-10/12">
        Go to <a href="/resources">Resources</a> to explore key readings, research, and materials on
        how AI systems are being developed and deployed and the impact this has on freedom of expression
        and media freedom.
      </p>
      <a href="/resources" class="group flex items-center hover:border-none"
        ><span class="rounded-full border-2 border-blue p-2 shrink-0"
          ><svg
            class="w-6 h-6 stroke-blue-osce transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 9 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ><path
              d="M1.29932 1.06445L7.29932 7.06445L1.29932 13.0645"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            /></svg
          ></span
        ></a
      >
    </div>
    <div class="group flex flex-row items-center space-x-2 mb-4">
      <p class="w-10/12">
        Read the <a href="/policy-2025"
          >Policy Manual to Safeguards Media Freedom in the Age of Big Tech Platforms and AI (2025)</a
        >
        and the <a href="/policy">SAIFE Policy Manual (2022)</a> for how to develop human-rights centered
        AI policies that protect freedom of expression and media pluralism.
      </p>
      <a href="/policy" class="group flex items-center hover:border-none"
        ><span class="rounded-full border-2 border-blue p-2 shrink-0"
          ><svg
            class="w-6 h-6 stroke-blue-osce transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 9 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ><path
              d="M1.29932 1.06445L7.29932 7.06445L1.29932 13.0645"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            /></svg
          ></span
        ></a
      >
    </div>
  </ShadowBox>

  <p class="mb-2 text-sm" id="f1">
    [1] For more details on the use of AI for content moderation and curation, see the 2022 Policy
    Manual “Spotlight on Artificial Intelligence and Freedom of Expression”,
    <a
      href="https://rfom.osce.org/representative-on-freedom-of-media/510332"
      target="_blank"
      rel="noopener noreferrer">https://rfom.osce.org/representative-on-freedom-of-media/510332</a
    > <a href="#b1" class="freturn">↩</a>
  </p>
  <p class="mb-2 text-sm" id="f2">
    [2] See “The truth behind filter bubbles: Bursting some myths.” Richard Fletcher. Reuters
    Institute for the Study of Journalism, University of Oxford, January 2020,
    <a
      href="https://reutersinstitute.politics.ox.ac.uk/news/truth-behind-filter-bubbles-bursting-some-myths"
      target="_blank"
      rel="noopener noreferrer"
      >https://reutersinstitute.politics.ox.ac.uk/news/truth-behind-filter-bubbles-bursting-some-myths</a
    >. And “Beyond the Filter Bubble: Challenges for the Traditional Media and the Public
    Discourse,” in Are Algorithms a Threat to Democracy? The Rise of Intermediaries: A Challenge for
    Public Discourse. Birgit Stark, Daniel Stegmann, Melanie Magin, and Pascal Jürgens. Algorithm
    Watch, May 2020.
    <a
      href="https://algorithmwatch.org/en/wp-content/uploads/2020/05/Governing-Platforms-communications-study-Stark-May-2020-AlgorithmWatch.pdf"
      target="_blank"
      rel="noopener noreferrer"
      >https://algorithmwatch.org/en/wp-content/uploads/2020/05/Governing-Platforms-communications-study-Stark-May-2020-AlgorithmWatch.pdf</a
    >

    <a href="#b2" class="freturn">↩</a>
  </p>
  <p class="mb-2 text-sm" id="f3">
    [3] Zuboff, Shoshana. 2019. The Age of Surveillance Capitalism: The Fight for a Human Future at
    the New Frontier of Power. First edition. New York: PublicAffairs. <a href="#b3" class="freturn"
      >↩</a
    >
  </p>
  <p class="mb-2 text-sm" id="f4">
    [4] OECD.AI Policy Navigator (2026), powered by EC/OECD (2026), database of national AI
    policies, accessed on 19/02/2026, https://oecd.ai. <a href="#b4" class="freturn">↩</a>
  </p>
</main>
