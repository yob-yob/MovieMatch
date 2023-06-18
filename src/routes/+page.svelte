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

  let area;
  let draggingInfo: PanInfo | null = null;
  let DragStatus = 'middle';
  $: if (draggingInfo) {
    DragStatus = draggingInfo.offset.x > 0 ? 'right' : 'left'
  } else {
    DragStatus = 'middle'
  }
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
          onDragStart={(event, info) => draggingInfo = info}
          onDrag={(event, info) => draggingInfo = info}
          onDragEnd={(event, info) => draggingInfo = null}
        >
          <div 
            use:motion 
            style:transform={`rotate(${generateRandomRotationValue()}deg)`}>
            <div 
              class="absolute bg-gradient-to-b via-transparent z-40 w-full h-full rounded-2xl"
              class:from-green-400="{DragStatus === 'right'}"
              class:from-red-400="{DragStatus === 'left'}"
            >
            </div>
            <MovieCard movie={data.movies[0]} />
          </div>
        </Motion>
      </div>
    </div>
</div>