<script lang="ts">
  import policyManualImage2025 from "$lib/assets/policy-manual-2025.png";
  import conferenceImage2025 from "$lib/assets/conference-2025.png";
  import policyManualImage from "$lib/assets/policy-manual-2022.png";
  import resourcesImage from "$lib/assets/resources.png";
  import dosAndDontsImage from "$lib/assets/dos-and-donts.png";
  import madeToMeasureImage from "$lib/assets/made-to-measure.png";
  import expeditionImage from "$lib/assets/saife-expedition.png";
  import saifeLogo from "$lib/assets/saife-logo.png";
  import osceLogo from "$lib/assets/osce-logo.png";
  import Chevron from "$lib/chevron.svelte";
  import GlossaryIcon from "$lib/glossary-icon.svelte";
  import Header from "$lib/header.svelte";
  import HomeGlossaryBox from "$lib/home-glossary-box.svelte";
  import ShadowBox from "$lib/shadow-box.svelte";
  import {base} from "$app/paths";
</script>

<Header theme="dark">
  <div class="flex items-center justify-center space-x-4 h-full">
    <img alt="SAIFE Toolkit Logo" src={saifeLogo} />

    <div class="text-white flex flex-col space-y-3">
      <h1 class="font-bold text-[4rem] leading-none">#SAIFE Resource Hub</h1>
      <span class="text-lg font-semibold"
        >Spotlight on Artificial Intelligence and Freedom of Expression</span
      >
    </div>
  </div>
</Header>

<main class="container mx-auto py-12 px-4">
  <section class="flex flex-col md:flex-row md:space-x-20 items-center">
    <div class="w-100 md:w-5/12">
      <p class="text-blue mb-4 font-bold">
        We are witnessing a seismic shift in the global information ecosystem – a few tech companies
        are shaping how information is produced, distributed, accessed, and monetized. The high
        concentration of power associated with artificial intelligence, the lack of transparency,
        human rights due diligence and accountability threaten the integrity, plurality and
        independence of the information landscape. This has a direct and significant impact on
        global peace, stability, and comprehensive security.
      </p>
      <p class="text-blue mb-4 font-bold">
        States have to protect, promote, and fulfil media freedom by ensuring an environment that
        enables democratic debate. In order to strengthen resilience and security, we need human
        rights-based regulation and a multi-stakeholder approach in designing online information
        spaces that safeguard media pluralism, independence, and public interest over distortion,
        deception, and division.
      </p>
      <p class="text-blue mb-4 font-bold">
        Jan Braathu <span class="font-normal block"
          >OSCE Representative on Freedom of the Media</span
        >
      </p>
    </div>

    <ShadowBox class="w-100 md:w-7/12">
      <svelte:fragment>
        <p class="mb-4">
          This resource hub is meant for policymakers and other stakeholders to help ensure that
          digital technologies work for the benefit of society by safeguarding freedom of expression
          and media freedom, and by promoting a healthy, pluralistic, and independent online
          information ecosystem. It focuses on the impact of (generative) AI on media freedom and
          freedom of expression, and provides resources and recommendations on enhancing the
          availability and accessibility of public interest information online as well as on
          platform, content and internet governance more broadly. Explore these topics, including
          policy manuals, Dos and Don’ts, and additional resources.
        </p>

        <div class="flex">
          <a href={`${base}/resources`} class="group flex items-center space-x-2 hover:border-none">
            <span class="rounded-full border-2 border-blue p-2 shrink-0">
              <Chevron
                class="w-6 h-6 stroke-blue-osce transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          </a>
        </div>
      </svelte:fragment>
    </ShadowBox>
  </section>

  <section class="mt-12">
    <ShadowBox>
      <div class="flex justify-between items-center">
        <h3 class="font-bold leading-8 text-3xl">Content</h3>

        <h4 class="flex items-center leading-8 font-bold text-2xl space-x-2">
          <GlossaryIcon class="h-12" /> <span>Glossary</span>
        </h4>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 mt-12 gap-8">
        <HomeGlossaryBox title="Resources" href={`${base}/resources`}>
          <img
            slot="image"
            class="w-full aspect-[387/191] rounded-xl object-cover"
            src={resourcesImage}
            alt="Resources"
          />
          <p slot="description">
            Research, podcasts, explainers, and other materials examining the effects of AI on
            online expression, media pluralism, and access to information.
          </p>
        </HomeGlossaryBox>

        <HomeGlossaryBox title="Do’s and Don’ts" href={`${base}/dos-and-donts`}>
          <img
            slot="image"
            class="w-full aspect-[387/191] rounded-xl object-cover"
            src={dosAndDontsImage}
            alt="Do's and Dont's"
          />
          <p slot="description">
            Recommended actions, restrictions, and guidelines for designing human rights-respecting
            policies on (generative) AI and digital technologies.
          </p>
        </HomeGlossaryBox>

        <HomeGlossaryBox
          title="Policy Manual on Safeguarding Media Freedom in the Age of Big Tech Platforms and AI (2025)"
          href={`${base}/policy-2025`}
        >
          <img
            slot="image"
            class="w-full aspect-[387/191] rounded-xl object-cover"
            src={policyManualImage2025}
            alt="Policy Manual on Safeguarding Media Freedom in the Age of Big Tech Platforms and AI (2025)"
          />
          <p slot="description">
            Key recommendations, in-depth analysis, and policy guidance to support states in
            ensuring the availability and accessibility of public interest journalism and reliable
            information in the digital era.
          </p>
        </HomeGlossaryBox>

        <HomeGlossaryBox
          title="Conference on “Healthy Online Information Spaces: From Policy Guidance to Pathways Forward”"
          href={`${base}/conference-2025`}
        >
          <img
            slot="image"
            class="w-full aspect-[387/191] rounded-xl object-cover"
            src={conferenceImage2025}
            alt="Conference on “Healthy Online Information Spaces: From Policy Guidance to Pathways Forward”"
          />
          <p slot="description">
            A multi-stakeholder event in October 2025 providing for interactive discussions on
            pressing challenges and emerging opportunities that digital technologies present for
            media freedom and freedom of expression.
          </p>
        </HomeGlossaryBox>

        <HomeGlossaryBox
          title="Spotlight on Artificial Intelligence and Freedom of Expression – A Policy Manual (2022)"
          href={`${base}/policy`}
        >
          <img
            slot="image"
            class="w-full aspect-[387/191] rounded-xl object-cover"
            src={policyManualImage}
            alt="Policy Manual"
          />
          <p slot="description">
            Human rights-centric recommendations for States to ensure free speech safeguards for the
            design, development and deployment of AI.
          </p>
        </HomeGlossaryBox>

        <HomeGlossaryBox title="SAIFE Expedition" href={`${base}/expedition`}>
          <img
            slot="image"
            class="w-full aspect-[387/191] rounded-xl object-cover"
            src={expeditionImage}
            alt="SAIFE Expedition"
          />
          <p slot="description">
            An interactive center stage for AI and free speech dialogue in December 2022, bringing
            together OSCE participating States and more than 50 experts from civil society,
            academia, OSCE executive structures, industry and partner organizations.
          </p>
        </HomeGlossaryBox>

        <HomeGlossaryBox
          title="Made to Measure"
          href="https://www.madetomeasure.online/en/"
          clazz="md:col-span-2"
        >
          <img
            slot="image"
            class="w-full aspect-[708/280] rounded-xl object-cover"
            src={madeToMeasureImage}
            alt="Made to Measure"
          />
          <p slot="description">
            The interactive documentary illustrates how pervasive the collection of personal data
            can be, and how such information that is collected about us can be used to manipulate
            our opinions and expressions. The film was developed by the Laokoon Group (Hans Block,
            Cosima Terrasse, and Moritz Riesewieck) and co-produced with the OSCE RFoM, the German
            Federal Cultural Foundation, and other partners.
          </p>
        </HomeGlossaryBox>
      </div>
    </ShadowBox>
  </section>
</main>
