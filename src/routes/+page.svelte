<!-- Home page / Landing Page -->

<script lang="ts">
	import MovieCard from "../components/MovieCard.svelte";
  import type { PageData } from './$types';
  import type { PanInfo } from 'svelte-motion';
  import { Motion } from 'svelte-motion'
  export let data: PageData;

  function generateRandomRotationValue() {
    return Math.floor(Math.random() * 11) - 5;
  }

  let movies = data.movies;
  let area;
  let draggingInfo: PanInfo | null = null;
  let DragStatus = 'middle';
  let dragOffset = 300;
  let rightItems = [];
  let leftItems = [];
  $: dragOffsetX = draggingInfo ? draggingInfo.offset.x : 0;
  $: DragStatus = (dragOffsetX >= dragOffset ? 'right' : (dragOffsetX <= -dragOffset ? 'left' : 'middle'))
  $: currentMovie = movies.length > 0 ? movies[0] : null;

  function dragEnded(event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) {
    if (DragStatus === 'right') {
      rightItems.push(currentMovie)
    } else if (DragStatus === 'left') {
      leftItems.push(currentMovie)
    } else {
      draggingInfo = null
      return null;
    }
    movies.shift();
    movies = movies;
    draggingInfo = null
  }
</script>

<!-- Page to swipe Cards -->
<div class="grid place-content-center h-full w-full">
    {#if currentMovie}
      <div class="relative">
        <div bind:this={area} class="absolute -translate-y-1/2 -translate-x-1/2">
          <Motion 
            let:motion 
            drag 
            dragConstraints={{current:area}}
            dragElastic={1}
            onDragStart={(event, info) => draggingInfo = info}
            onDrag={(event, info) => draggingInfo = info}
            onDragEnd={(event, info) => dragEnded(event, info)}
          >
            <div 
              use:motion 
              style:transform={`rotate(${generateRandomRotationValue()}deg)`}>
              <div 
                class="absolute bg-gradient-to-b via-transparent z-40 w-full h-full rounded-2xl transition-all duration-500"
                class:from-green-300="{DragStatus === 'right'}"
                class:from-red-300="{DragStatus === 'left'}"
              >
              </div>
              <MovieCard movie={currentMovie} />
            </div>
          </Motion>
        </div>
      </div>
    {:else}
      No movie
    {/if}
</div>