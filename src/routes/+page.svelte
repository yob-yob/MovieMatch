<script>
	import SwippableCard from "../components/swippable-card.svelte";

  let movies = ['sky','landscape','ocean','sea','birds','people','women','men']
</script>


<!-- Page to swipe Cards -->
<div class="relative flex items-center justify-center h-full w-full">
  <div class="stack">
    {#each movies as image}
      <SwippableCard {image}/>
    {/each}
  </div>
</div>