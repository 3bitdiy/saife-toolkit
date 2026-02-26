<script lang="ts">
  import Chevron from "$lib/chevron.svelte";
  import CommonHeader from "$lib/common-header.svelte";
  import ShadowBox from "$lib/shadow-box.svelte";
  import {base} from "$app/paths";
</script>

<CommonHeader title="Spotlight on Artificial Intelligence and Freedom of Expression (#SAIFE)">
  <p class="font-medium leading-5">Towards Healthy Online Information Spaces</p>
</CommonHeader>

<main class="container mx-auto py-12 px-4">
  <p class="mb-4 leading-6 text-justify">
    Since 2019, the Office of the OSCE Representative on Freedom of the Media is dedicating a
    workstream to artificial intelligence, freedom of expression, media freedom, and information
    integrity. This aligns with the OSCE RFoM’s mandate to assist participating States in fulfilling
    their commitments on freedom of expression and media freedom.
  </p>

  <p class="mb-4 leading-6 text-justify">
    The RFoM project putting a spotlight on AI and Freedom of Expression (SAIFE),<sup id="fnref1"
      ><a href="#fn1">[1]</a></sup
    >
    which lasted from 2019 to 2023, developed policy recommendations on the most effective ways to safeguard
    freedom of expression and media freedom when using AI and advanced machine-learning technologies
    for content moderation. Who decides (and how) to make certain information and content available,
    to prioritize, or remove matters enormously. Just like it matters when governments shape our information
    space, be it through the misuse of arbitrary legislation or any other forms of censorship, it also
    matters when online platforms interfere with our information space. It matters when illegal or other
    harmful content spreads online, endangering our security and creating deeper divides in our societies.
    It matters that individuals and communities are able to seek, receive, and impart the same kinds
    of information no matter where in the world they might be. The way online information is curated
    and moderated has a direct and significant impact on global peace, stability and comprehensive security.
    Therefore, the RFoM developed recommendations on ensuring that the gatekeepers to information – and
    their business practices – are in line with international human rights standards.<sup
      id="fnref2"><a href="#fn2">[2]</a></sup
    > The project particularly focused on content and platform governance.
  </p>

  <p class="mb-4 leading-6 text-justify">
    Building on the work carried out in the SAIFE project, in 2024, the RFoM launched the “Healthy
    Online Information Spaces – SAIFE Renewed”, recognizing the continued need to address existing
    and emerging challenges at the intersection of technology, information integrity and human
    rights. The SAIFE Renewed project “Healthy Online Information Spaces” explores the evolving
    relationship between media, Big Tech and AI, concerning trends in digital authoritarianism and
    surveillance, as well as information operations. In October 2025, the OSCE Representative on
    Freedom of the Media launched a comprehensive Policy Manual on Safeguarding Media Freedom in the
    Age of Big Tech Platforms and AI [<i
      >https://rfom.osce.org/representative-on-freedom-of-media/598525</i
    >], designed to support OSCE participating States in ensuring the availability and accessibility
    of public interest journalism and reliable information in the digital era.
  </p>

  <div class="mt-8 border-t pt-6">
    <div class="text-base font-semibold mb-2">References</div>
    <ol class="list-decimal list-inside text-sm">
      <li id="fn1" class="mb-2">
        For the project’s evaluation, see <a
          href="https://rfom.osce.org/representative-on-freedom-of-media/572632"
          target="_blank">https://rfom.osce.org/representative-on-freedom-of-media/572632</a
        >.
      </li>
      <li id="fn2">
        See, in particular, Article 19 of the International Covenant on Civil and Political Rights
        (ICCPR), <a
          href="https://www.ohchr.org/en/instruments-mechanisms/instruments/international-covenant-civil-and-political-rights"
          target="_blank"
          >https://www.ohchr.org/en/instruments-mechanisms/instruments/international-covenant-civil-and-political-rights</a
        >, and the OSCE commitments on freedom of expression and media freedom,
        <a href="https://rfom.osce.org/representative-on-freedom-of-media/354081" target="_blank"
          >https://rfom.osce.org/representative-on-freedom-of-media/354081</a
        >.
      </li>
    </ol>
  </div>

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

      <div class="group flex items-center">
        <span
          >See the <a href={`${base}/glossary`}>Glossary</a> to read more about these terms.</span
        >
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
