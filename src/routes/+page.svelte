<script lang="ts">
  import policyManualImage2025 from "$lib/assets/policy-manual-2025.png";
  import conferenceImage2025 from "$lib/assets/conference-2025.png";
  import policyManualImage from "$lib/assets/policy-manual-2022.png";
  import resourcesImage from "$lib/assets/resources.png";
  import dosAndDontsImage from "$lib/assets/dos-and-donts.png";
  import madeToMeasureImage from "$lib/assets/made-to-measure.png";
  import expeditionImage from "$lib/assets/saife-expedition.png";
  import saifeLogo from "$lib/assets/saife-logo.svg";
  import Chevron from "$lib/chevron.svelte";
  import GlossaryIcon from "$lib/glossary-icon.svelte";
  import Header from "$lib/header.svelte";
  import HomeGlossaryBox from "$lib/home-glossary-box.svelte";
  import ShadowBox from "$lib/shadow-box.svelte";
  import {base} from "$app/paths";
  const conferenceTitle = `Conference on \u201cHealthy Online Information Spaces: From Policy Guidance to Pathways Forward\u201d`;
</script>

<Header theme="dark">
  <div class="h-full flex flex-col items-center justify-center pt-[52px] lg:pt-0">
    <div class="text-white flex flex-col items-center text-center">
      <h1 class="font-bold text-2xl sm:text-3xl lg:text-[2rem] leading-none tracking-wide">
        RESOURCE HUB
      </h1>
      <p class="text-2xl sm:text-3xl lg:text-[2rem] leading-snug lg:leading-none tracking-wide mt-3">
        TOWARDS <span class="font-bold">HEALTHY</span> ONLINE <span class="font-bold">INFORMATION</span> SPACES
      </p>
    </div>

    <img
      alt="SAIFE Toolkit Logo"
      src={saifeLogo}
      class="mt-6 h-20 sm:h-24 lg:hidden"
    />
  </div>

  <svelte:fragment slot="overlay">
    <img
      alt="SAIFE Toolkit Logo"
      src={saifeLogo}
      class="hidden lg:block absolute bottom-4 right-4 h-24"
    />
  </svelte:fragment>
</Header>

<main class="container mx-auto py-12 px-4">
  <section class="flex flex-col gap-8">
    <ShadowBox>
      <svelte:fragment>
        <p class="mb-4 text-justify">
          We are witnessing a seismic shift in the global information ecosystem, with a few tech
          companies shaping how information is produced, distributed, accessed, and monetized. The
          concentration of power around artificial intelligence, combined with limited transparency,
          insufficient human rights due diligence, and weak accountability threaten the integrity,
          plurality and independence of the information landscape – with direct implications for
          peace, stability, and security. States must protect, promote, and fulfil media freedom by
          ensuring conditions for democratic debate, supported by human rights-based regulation and
          a multi-stakeholder approach in designing online information spaces that safeguard media
          pluralism, independence, and public interest over distortion, deception, and division.
        </p>
        <p class="mb-4 text-justify">
          This Resource Hub by the OSCE Representative on Freedom of the Media (RFoM) supports
          policymakers and stakeholders in ensuring that digital technologies benefit society by
          safeguarding freedom of expression and media freedom. It focuses on the impact of
          (generative) AI on free media and expression, and provides resources and recommendations
          to enhance the availability and accessibility of public interest information online as
          well as broader guidance on platform, content and internet governance. Explore these
          topics, including policy manuals (<a
            href={`${base}/policy`}
            class="font-bold hover:underline">2022</a
          >
          and
          <a href={`${base}/policy-2025`} class="font-bold hover:underline">2025</a>),
          <a href={`${base}/dos-and-donts`} class="font-bold hover:underline">Dos and Don’ts</a>,
          and additional
          <a href={`${base}/resources`} class="font-bold hover:underline">Resources</a>.
        </p>

        <div class="flex justify-end">
          <a href={`${base}/about`} class="group flex items-center gap-6 hover:border-none">
            About the OSCE RFoM’s work on AI
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
      <div class="flex flex-wrap justify-between items-center gap-x-4 gap-y-2">
        <h3 class="font-bold leading-8 text-2xl md:text-3xl">Contents</h3>

        <h4 class="py-2 leading-8 font-bold text-2xl">
          <a
            href={`${base}/glossary`}
            class="flex items-center space-x-2"
            style="text-decoration: none;"
          >
            <GlossaryIcon class="h-12" /> <span>Glossary</span>
          </a>
        </h4>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 mt-12 gap-x-6 gap-y-10">
        <HomeGlossaryBox title="Resources" href={`${base}/resources`}>
          <img
            slot="image"
            class="w-full aspect-[395/238] rounded-xl object-cover"
            src={resourcesImage}
            alt="Resources"
          />
          <p slot="description">
            Research, podcasts, explainers, and other materials examining the effects of AI on
            online expression, media pluralism, and access to information.
          </p>
        </HomeGlossaryBox>

        <HomeGlossaryBox title="Dos and Don’ts" href={`${base}/dos-and-donts`}>
          <img
            slot="image"
            class="w-full aspect-[395/238] rounded-xl object-cover"
            src={dosAndDontsImage}
            alt="Dos and Don’ts"
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
            class="w-full aspect-[420/252] rounded-xl object-cover"
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
          title="Healthy Online Information Spaces Conference (2025)"
          href={`${base}/conference-2025`}
        >
          <img
            slot="image"
            class="w-full aspect-[420/252] rounded-xl object-cover"
            src={conferenceImage2025}
            alt={conferenceTitle}
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
            class="w-full aspect-[409/280] rounded-xl object-cover"
            src={policyManualImage}
            alt="Policy Manual"
          />
          <p slot="description">
            Human rights-centric recommendations for States to ensure free speech safeguards for the
            design, development and deployment of AI.
          </p>
        </HomeGlossaryBox>

        <HomeGlossaryBox title="SAIFE Expedition (2022)" href={`${base}/expedition`}>
          <img
            slot="image"
            class="w-full aspect-[409/280] rounded-xl object-cover"
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
