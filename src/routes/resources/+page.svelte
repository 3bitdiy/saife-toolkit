<script lang="ts">
  import c from "clsx";

  import CategoryTag from "$lib/category-tag.svelte";
  import CommonHeader from "$lib/common-header.svelte";
  import ResourceBox from "$lib/resource-box.svelte";

  import type {PageData} from "./$types";

  const images = import.meta.glob("../../data/resources/*.jpg", {
    query: {
      enhanced: true,
    },
    eager: true,
  });

  export let data: PageData;

  let filter: string | undefined;

  $: resourceData = filter
    ? data.resources.filter(({category}) => category === filter)
    : data.resources;

  const filterCategory = (category: string) => {
    filter = filter === category ? undefined : category;
  };
</script>

<CommonHeader title="Key resources: AI and freedom of expression">
  <p class="font-medium leading-5">
    The use of AI systems by digital platforms is radically reshaping our information ecosystems and
    playing a critical role in determining what we read, see, and share online. The following is a
    repository of essential resources, research, podcasts, videos, and other materials from experts
    around the world who are exploring the effects of these technologies on freedom of expression,
    media pluralism, access to information, and the free exchange of ideas—and how restrictions to
    these fundamental rights can harm society, undermine democracy, and erode human rights.
  </p>
</CommonHeader>

<main class="container mx-auto py-12 px-4 flex flex-col space-y-16">
  <div class="flex flex-row space-x-4">
    <button on:click={() => filterCategory("Read")}>
      <CategoryTag
        class={c({
          "bg-white": filter !== "Read",
          "bg-blue-saife": filter === "Read",
        })}
        category="Read"
      />
    </button>
    <button on:click={() => filterCategory("Listen")}>
      <CategoryTag
        class={c({
          "bg-white": filter !== "Listen",
          "bg-blue-saife": filter === "Listen",
        })}
        category="Listen"
      />
    </button>
    <button on:click={() => filterCategory("Watch")}>
      <CategoryTag
        class={c({
          "bg-white": filter !== "Watch",
          "bg-blue-saife": filter === "Watch",
        })}
        category="Watch"
      />
    </button>
  </div>

  {#each resourceData as { title, subtitle, description, href, category, tags, image }}
    <ResourceBox
      {title}
      {subtitle}
      {description}
      {href}
      {category}
      {tags}
      Image={images[`../../${image}`]?.default}
    />
  {/each}
</main>
