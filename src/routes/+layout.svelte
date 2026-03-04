<script lang="ts">
  import "../app.css";

  import Footer from "$lib/footer.svelte";
  import OsceHeader from "$lib/osce-header.svelte";
  import BackToTop from "$lib/back-to-top.svelte";
</script>

<OsceHeader />

<slot />

<Footer />

<BackToTop threshold={400} />
