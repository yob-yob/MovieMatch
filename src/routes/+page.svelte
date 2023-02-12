<!-- Home page / Landing Page -->

<script lang="ts">
	import SwippableCard from "../components/swippable-card.svelte";
  import type { PageData } from './$types';
  export let data: PageData;
</script>


<!-- Page to swipe Cards -->
<div class="relative flex items-center justify-center h-full w-full">
  <div class="stack">
    {#each data.movies as movie}
      <SwippableCard {movie}/>
    {/each}
  </div>
</div>