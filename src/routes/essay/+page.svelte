<script lang="ts">
  import CommonHeader from "$lib/common-header.svelte";
  import ShadowBox from "$lib/shadow-box.svelte";
  import {base} from "$app/paths";
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
    public lives.
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
    <svelte:fragment>
      <h3 class="font-extrabold text-2xl leading-8 mb-12">
        What do we mean by “artificial intelligence”?
      </h3>

      Artificial intelligence refers to systems that resemble, carry out, or mimic functions that
      are typically thought of as requiring human-like intelligence. Examples of these systems
      include facial recognition software, natural language processing, and other applications. The
      development and deployment of these technologies can have a significant impact on human
      rights, including the rights to freedom of expression, access to information, to form and hold
      opinions, non-discrimination, and privacy. In this Resource Hub, we use “artificial
      intelligence” as a blanket term to encompass forms of automation, algorithmic decision making,
      and machine learning, although these technologies have different capacities and functions. See
      the<a href={`${base}/glossary`}> Glossary</a> to read more about these terms.
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
    These technologies and systems are designed to deliver content based on how much engagement it
    is likely to generate—as measured by the number of views, likes, and shares—rather than for its
    accuracy, diversity, or public-interest value. Platforms target individuals and groups with
    tailored content (and ads) based on algorithmically-generated collections of our data, touching
    everything from our political affiliations and preferences, to our gender, race, age, income,
    and other characteristics.
  </p>

  <p class="mb-4 leading-6">
    At the root of the problem is a profit model that is based on the mass collection of data about
    our digital activities and behaviors. This is what Harvard scholar Shoshanna Zuboff calls
    “surveillance capitalism.” <a class="fgoto" id="b1" href="#f1">[1]</a> Many platforms today derive
    their revenue from targeted advertising, which is powered by opaque algorithmic systems designed
    to capture as much of our data as possible, and then use it to drive reach and engagement, and maximize
    corporate profits. This system creates the distribution channels through which divisive, discriminatory,
    hateful, and illegal online content flows.
  </p>

  <ShadowBox class="my-12">
    <svelte:fragment>
      <h3 class="font-extrabold text-2xl leading-8 mb-12">
        How much do private platforms know about you?
      </h3>

      <p class="mb-4">
        A team of documentary filmmakers set out to answer this question—and to illustrate how the
        digital traces of everything we do online can be used to assemble powerful profiles about
        individuals, and even to manipulate our opinions and expressions. Made to Measure exposes
        the power of surveillance capitalism and how much private companies know—and can
        predict—about who we are.
      </p>

      <p class="mb-4">
        This interactive film was co-produced by the Organization for Security and Co-operation in
        Europe, Office of the Representative on Freedom of the Media (OSCE RFoM), as part of the
        “Spotlight on Artificial Intelligence & Freedom of Expression (SAIFE)” project.
      </p>

      <a href="https://madetomeasure.online">Watch</a>
    </svelte:fragment>
  </ShadowBox>

  <p class="mb-4">
    Policymakers and the public often call on social media companies to remove disinformation, hate
    speech, racist and discriminatory materials, terrorist propaganda, and other forms of
    problematic and unlawful speech. <a class="fgoto" id="b2" href="#f2">[2]</a> In response, platforms
    like Facebook, Instagram, YouTube, Twitter, and TikTok have developed and deployed different types
    of AI to help police an immense universe of digital content that violates the law or that runs afoul
    of companies’ own policies.
  </p>

  <p class="mb-4">
    But research has consistently shown that these tools are unreliable in identifying harmful
    online speech, including illegal hate speech and terrorist content. <a
      class="fgoto"
      id="b3"
      href="#f3">[3]</a
    > Studies reveal that these technologies are context blind and not sophisticated enough to accurately
    detect other types of harmful or illegal content, such as hate speech. AI systems have immense potential
    to shape public opinion and political behavior—and equally immense potential for exploitation by
    malicious actors and political elites. In recent years, we have seen how these technologies and systems
    can be and too often are manipulated to target voters with disinformation in an attempt to influence
    elections.
  </p>

  <p class="mb-4">
    The use of AI to moderate content therefore has mixed results: these systems can misidentify and
    remove legitimate content in some instances—a form of prior restraint that results in over
    removal and thus censorship—while failing to accurately or consistently spot harmful, abusive,
    or illegal content, in which case these materials continue to proliferate online. Both false
    positives and false negatives can have severe impacts on the online information landscape and
    enjoyment of freedom of expression of individuals and communities. The removal of legitimate
    speech by automated tools can restrict access to information, limit media pluralism, and
    threaten freedom of expression. Investigations by media and civil society have revealed numerous
    cases in which social media platforms have blocked or removed opposition posts and hashtags
    during times of political unrest. At the other end of the spectrum, the flood of hateful,
    racist, toxic speech can have a deeply corrosive effect on public discourse but can also
    perpetuate discrimination and other types of human rights harms toward individuals and groups
    both on- and offline.
  </p>

  <p class="mb-4">
    Ample case studies point to how AI-based content curation and moderation can distort or reshape
    online news diets in ways that restrict or limit the free flow of ideas and opinions—essential
    prerequisites of healthy democratic systems. Research has shown how AI-based content curation
    can create so-called “filter bubbles” or “echo chambers,” which dramatically limit exposure to
    views and information that do not align with an individual’s already-established beliefs. While
    the effects of such “filter bubbles” on an individuals’ beliefs or behaviors is unclear—-and in
    some cases their existence has been found to have been overstated—what is certain is that filter
    bubbles can accentuate and drive political and societal polarization, which in turn can have a
    deleterious and harmful effect on the open exchange of opinions and ideas. <a
      class="fgoto"
      id="b4"
      href="#f4">[4]</a
    >
  </p>

  <p class="mb-4">
    While platforms often claim that their AI systems are advanced enough to detect and remove
    harmful materials, the continuing swell of hate speech, disinformation, and other types of
    problematic materials online tells a different story. In 2021, the UN Special Rapporteur on
    minority issues presented a report highlighting a significant increase in online hate speech and
    xenophobia during the 2020 pandemic, finding the majority of that content targeted minorities
    and women <a class="fgoto" id="b5" href="#f5">[5]</a>. Recent investigations have also revealed
    that Facebook’s AI-powered content moderation systems remove only a small fraction of hate
    speech—less than 5 percent—which means that a vast majority of harmful, even illegal content on
    that platform remains online. <a class="fgoto" id="b6" href="#f6">[6]</a>
  </p>

  <ShadowBox class="my-12">
    <p>
      Go to <a href={`${base}/resources`}>Resources</a> to explore key readings, research, and materials
      on how AI systems are being developed and deployed to curate and moderate online content and the
      impact this has on freedom of expression and media freedom.
    </p>
  </ShadowBox>

  <h2 class="font-extrabold text-3xl leading-9 my-12">
    AI and human rights: a global public policy challenge
  </h2>

  <p class="mb-4">
    Governments around the world are working to develop AI policies and regulations, as the pace of
    tech development and AI applications accelerates. Lawmakers in more than 60 countries have
    launched efforts to develop domestic AI policies, amid ongoing initiatives aimed at coordinating
    multinational AI governance frameworks. <a class="fgoto" id="b7" href="#f7">[7]</a>
  </p>

  <p class="mb-4">
    This process has sparked wider debates among domestic and international policy makers, business
    leaders, and civil society over how to design AI policies that foster tech innovation while also
    safeguarding human rights. Policymakers must work urgently, and together with a wide spectrum of
    stakeholders, to establish adequate human rights protections and governance mechanisms to ensure
    that AI works to benefit society and to advance, rather than erode human rights and fundamental
    freedoms.
  </p>

  <p class="mb-4">
    This challenge is particularly pressing in the area of media freedom and freedom of expression
    that are essential to the functioning of healthy democratic systems and societies. Policymakers
    in many jurisdictions are turning to AI as a one-size-fits-all solution for tackling harmful or
    unlawful content online, despite the fact that these technologies are unreliable and pose
    serious risks to freedom of expression and the free flow of information and ideas online.
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
    <svelte:fragment>
      <h3 class="font-extrabold text-2xl leading-8 mb-12">
        Safeguarding freedom of expression in the age of AI: guidelines for policy makers
      </h3>

      <p class="mb-4">
        Read the <a href={`${base}/dos-and-donts`}>Dos and Don’ts</a> summarizing key points that policy
        makers should take into consideration as they develop AI strategies and policies.
      </p>

      <p class="mb-4">
        Read the <a href={`${base}/policy`}>SAIFE Policy Manual</a> for how to develop human-rights centered
        AI policies that protect freedom of expression and media pluralism.
      </p>

      <a href="https://madetomeasure.online">Watch</a>
    </svelte:fragment>
  </ShadowBox>

  <p class="mb-2">
    <span id="f1"> 1.</span> Zuboff, Shoshana. 2019. The Age of Surveillance Capitalism: The Fight
    for a Human Future at the New Frontier of Power. First edition. New York: PublicAffairs.
    <a href="#b1" class="freturn">↩</a>
  </p>

  <p class="mb-2">
    <span id="f2"> 2.</span> “It’s the Business Model: How Big Tech’s Profit Machine is Distorting
    the Public Sphere and Threatening Democracy.” Nathalie Maréchal and Ellery Roberts Biddle.
    Ranking Digital Rights, March 2020, https://rankingdigitalrights.org/its-the-business-model/.
    <a href="#b2" class="freturn">↩</a>
  </p>

  <p class="mb-2">
    <span id="f3"> 3.</span> “Artificial Intelligence, Content Moderation, and Freedom of
    Expression.” Emma Llansó, Joris van Hoboken, Paddy Leerssen, and Jaron Harambam. A working paper
    of the Transatlantic Working Group on Content Moderation Online and Freedom of Expression,
    February 26, 2020. https://www.ivir.nl/publicaties/download/AI-Llanso-Van-Hoboken-Feb-2020.pdf
    <a href="#b3" class="freturn">↩</a>
  </p>

  <p class="mb-2">
    <span id="f4"> 4.</span> See “The truth behind filter bubbles: Bursting some myths.” Richard
    Fletcher. Reuters Institute for the Study of Journalism, University of Oxford, January 2020,
    https://reutersinstitute.politics.ox.ac.uk/news/truth-behind-filter-bubbles-bursting-some-myths.
    And “Beyond the Filter Bubble: Challenges for the Traditional Media and the Public Discourse,”
    in Are Algorithms a Threat to Democracy? The Rise of Intermediaries: A Challenge for Public
    Discourse. Birgit Stark, Daniel Stegmann, Melanie Magin, and Pascal Jürgens. Algorithm Watch,
    May 2020.
    https://algorithmwatch.org/en/wp-content/uploads/2020/05/Governing-Platforms-communications-study-Stark-May-2020-AlgorithmWatch.pdf
    <a href="#b4" class="freturn">↩</a>
  </p>

  <p class="mb-2">
    <span id="f5"> 5.</span> “Report: Online hate increasing against minorities, says expert,”
    United Nations Human Rights Office of the High Commissioner, March 2021.
    https://www.ohchr.org/EN/NewsEvents/Pages/sr-minorities-report.aspx
    <a href="#b5" class="freturn">↩</a>
  </p>

  <p>
    <span id="f6"> 6.</span> “The Facebook Files: A Wall Street Journal investigation,” Wall Street
    Journal. https://www.wsj.com/articles/the-facebook-files-11631713039
    <a href="#b6" class="freturn">↩</a>
  </p>

  <p>
    <span id="f7"> 7.</span> OECD.AI (2021), powered by EC/OECD (2021), database of national AI
    policies, accessed on 21/10/2021, https://oecd.ai.
    <a href="#b7" class="freturn">↩</a>
  </p>
</main>
