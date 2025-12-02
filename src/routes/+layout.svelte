<script lang="ts">
  import "../app.css";

  import Footer from "$lib/footer.svelte";
  import OsceHeader from "$lib/osce-header.svelte";
</script>

<OsceHeader />

<slot />

<Footer />
