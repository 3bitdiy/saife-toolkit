<script lang="ts">
  import policyManualImage from "$lib/assets/policy-manual-home-glossary.png";
  import resourcesImage from "$lib/assets/resources.png";
  import dosAndDontsImage from "$lib/assets/dos-and-donts.png";
  import masterclassImage from "$lib/assets/masterclass.png";
  import madeToMeasureImage from "$lib/assets/made-to-measure.png";
  import expeditionImage from "$lib/assets/expedition.png";
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
      <a
        class="group capitalize leading-6 uppercase flex items-center space-x-4 hover:border-none"
        href={`${base}/essay`}
        ><span>Learn more about this Resource Hub</span>
        <span class="rounded-full border-2 border-white p-2 shrink-0">
          <Chevron
            class="w-6 h-6 stroke-white transition-transform duration-300 group-hover:translate-x-1"
          />
        </span></a
      >
    </div>
  </div>
</Header>

<main class="container mx-auto py-12 px-4">
  <section class="flex flex-col md:flex-row md:space-x-20 items-center">
    <div class="w-100 md:w-5/12">
      <p class="text-blue mb-4 font-bold">
        “Managing the immeasurable plurality of information online has become impossible without the
        support of AI. It is used to decide on what content is taken down, what content is
        prioritized or to whom it is disseminated. These decisions have a direct and significant
        impact on global peace, stability and comprehensive security. With such power must come
        responsibility.
      </p>
      <p class="text-blue mb-4 font-bold">
        We find ourselves at a crossroads. We must unite to find multilateral solutions for
        challenges to our common information space. Human rights must be at the center of the
        development and deployment of AI for online content curation and content moderation.”
      </p>
      <p class="text-blue mb-4 font-bold">
        Teresa Ribeiro <span class="font-normal block"
          >OSCE Representative on Freedom of the Media</span
        >
      </p>
    </div>

    <ShadowBox class="w-100 md:w-7/12">
      <svelte:fragment>
        <p class="mb-4">
          Artificial intelligence (AI) has a powerful role in shaping and arbitrating our
          information space – influencing what information and content we read, view, and share.
          This poses challenges and risks to freedom of expression and media pluralism, which can
          harm society, undermine democracy, and erode human rights.
        </p>
        <p class="mb-4">
          This is a resource hub for policymakers and other stakeholders, to help ensure that
          digital technologies work to benefit society by safeguarding freedom of expression and
          media freedom. It focuses on platform governance and the use of AI tools for content
          governance. The Resource Hub contains information and recommendations, including a Policy
          Manual, Dos and Don’ts, and additional resources.
        </p>

        <div class="flex">
          <span class="font-bold"
            >The resource hub is part of the <a href="https://www.osce.org/fom/ai-free-speech"
              >#SAIFE project</a
            > of the OSCE Representative on Freedom of the Media.</span
          >

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
        <HomeGlossaryBox title="Policy Manual" href={`${base}/policy`}>
          <img slot="image" class="h-72 object-cover" src={policyManualImage} alt="Policy Manual" />
          <p slot="description">
            Human rights-centric recommendations for States to ensure free speech safeguards for the
            design, development and deployment of AI.
          </p>
        </HomeGlossaryBox>

        <HomeGlossaryBox title="Do’s and Don’ts" href={`${base}/dos-and-donts`}>
          <img
            slot="image"
            class="h-72 object-cover"
            src={dosAndDontsImage}
            alt="Do's and Dont's"
          />
          <p slot="description">
            Key guidelines to help policymakers design rights-respecting AI strategies and policies.
          </p>
        </HomeGlossaryBox>

        <HomeGlossaryBox title="Resources" href={`${base}/resources`}>
          <img slot="image" class="h-72 object-cover" src={resourcesImage} alt="Resources" />
          <p slot="description">
            Research, podcasts, explainers, and other materials examining the effects of AI on
            online expression, media pluralism, and access to information.
          </p>
        </HomeGlossaryBox>

        <HomeGlossaryBox title="Masterclass" href={`${base}/masterclass`}>
          <img slot="image" class="h-72 object-cover" src={masterclassImage} alt="MAsterclass" />
          <p slot="description">
            Building capacity to address the risks of AI-based content curation and moderation to
            freedom of expression and media pluralism, and a range of other human rights harms.
          </p>
        </HomeGlossaryBox>

        <HomeGlossaryBox title="Made to Measure" href="https://www.madetomeasure.online/en/">
          <img
            slot="image"
            class="h-72 object-cover"
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

        <HomeGlossaryBox title="SAIFE Expedition" href={`${base}/expedition`}>
          <img
            slot="image"
            class="h-72 object-cover"
            src={expeditionImage}
            alt="SAIFE Expedition"
          />
          <p slot="description">
            An interactive center stage for AI and free speech dialogue in December 2022, bringing
            together OSCE participating States and more than 50 experts from civil society,
            academia, OSCE executive structures, industry and partner organizations.
          </p>
        </HomeGlossaryBox>
      </div>
    </ShadowBox>
  </section>
</main>

<aside class="bg-white">
  <section class="container mx-auto py-12 px-4">
    <h2 class="font-bold text-3xl leading-9">About the OSCE #SAIFE project</h2>

    <p class="mt-8 mb-6 font-bold">
      In 2019, the Office of the OSCE Representative on Freedom of the Media launched the “Spotlight
      on Artificial Intelligence and Freedom of Expression (#SAIFE)” project, the aim of which is to
      develop policy recommendations on the most effective ways to safeguard freedom of expression
      and media freedom when using AI and advanced machine-learning technologies.
    </p>

    <a
      class="px-5 py-4 font-bold hover:underline-nonde border border-blue-osce rounded-[0.5rem] shadow-box shadow-blue-osce uppercase"
      href={`${base}/about`}>Read more</a
    >
  </section>

  <section
    class="container mx-auto py-12 px-4 flex flex-col md:flex-row items-start justify-between space-y-4 md:space-y-0 md:space-x-8"
  >
    <img class="md:w-64" src={osceLogo} alt="OSCE RfoM Logo" />
    <p class="font-bold md:w-3/4">
      The <a href="https://www.osce.org/representative-on-freedom-of-media"
        >OSCE Representative on Freedom of the Media</a
      > (RFoM) is the world’s only intergovernmental media freedom watchdog. The RFoM observes relevant
      political developments and promotes full compliance with OSCE principles and commitments regarding
      freedom of expression and free media.
    </p>
  </section>

  <section
    class="container mx-auto py-12 px-4 flex flex-col md:flex-row items-start justify-between space-y-4 md:space-y-0 md:space-x-8"
  >
    <img class="md:w-48" src={saifeLogo} alt="SAIFE Toolbox Logo" />
    <p class="font-bold md:w-3/4">
      The “Spotlight on Artificial Intelligence and Freedom of Expression (#SAIFE)” is a project of
      the RfoM, bringing together experts from across civil society, academia, and policy
      communities to develop recommendations on the most effective ways to safeguard freedom of
      expression and media freedom when using AI and advanced machine-learning technologies for
      content governance. By providing guidance on mitigating the harms of AI while promoting a
      healthier online information ecosystem, this project supports theRFoM’s mandate toward
      assisting OSCE participating States in upholding their commitments on freedom of expression
      and media freedom.
    </p>
  </section>
</aside>
