<!-- Home page / Landing Page -->

<script lang="ts">
	import MovieCard from "../components/MovieCard.svelte";
  import type { PageData } from './$types';
  import { Motion } from 'svelte-motion'
  export let data: PageData;
  let area;
</script>


<!-- Page to swipe Cards -->
<div class="grid place-content-center h-full w-full">
    <div class="relative">
      <div bind:this={area} class="absolute -translate-y-1/2 -translate-x-1/2">
        <Motion 
          let:motion 
          drag 
          dragConstraints={{current:area}}
          dragElastic={1}
          onDragStart={
            (event, info) => console.log(info.point.x, info.point.y)
          }
          onDrag={
            (event, info) => console.log(info.point.x, info.point.y)
          }
        >
          <div use:motion>
            <MovieCard movie={data.movies[0]} />
          </div>
        </Motion>
      </div>
    </div>
</div>