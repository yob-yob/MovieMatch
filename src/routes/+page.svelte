<!-- Home page / Landing Page -->

<script lang="ts">
	import { onMount } from "svelte";
	import MovieCard from "../components/MovieCard.svelte";
	import type { movie } from "../types/tmdb";
  import type { PageData } from './$types';
  import type { PanInfo } from 'svelte-motion';
  import { Motion } from 'svelte-motion'
  export let data: PageData;

  function generateRandomRotationValue() {
    return Math.floor(Math.random() * 11) - 5;
  }

  async function updateMoviePrefence(movie: movie, like: boolean) {
    // We should setup something here to incapsulate how we do this stuff!... 
    // so that we can easily change from supabase to another service...
    if (data.session === null) {
      return false;
    }
    const response = await data.supabase.from('users_movies').insert({
      'user_id': data.session.user.id,
      'movie_tmdb_id': movie.id,
      'swipe_direction': like ? 'right' : 'left'
    }).select().single()

    if (response.error !== null) {
      return null;
    }

    return response.data;
  }

  // movies That User Has Already Swiped On
  let user_movies = data.user_movies
  $: user_movie_ids = user_movies.map((user_movie) => user_movie.movie_tmdb_id)
  // movies to display in the swipe area
  let movies = data.movies;
  // Filter movies... if movie is already in user_movies do not show it anymore...
  $: filteredMovies = movies.filter((movie) => !user_movie_ids.includes(movie.id))
  // the Current movie to be swipe by the user.
  $: currentMovie = filteredMovies.length > 0 ? filteredMovies[0] : null;

  let area;
  let draggingInfo: PanInfo | null = null;
  let DragStatus = 'middle';
  let dragOffset = 300;
  $: dragOffsetX = draggingInfo ? draggingInfo.offset.x : 0;
  $: DragStatus = (dragOffsetX >= dragOffset ? 'right' : (dragOffsetX <= -dragOffset ? 'left' : 'middle'))

  onMount(() => currentMovie && console.log(currentMovie.id, user_movie_ids, user_movie_ids.includes(currentMovie.id), filteredMovies))

  async function dragEnded(event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) {
    if (DragStatus === 'middle' || currentMovie === null) {
      draggingInfo = null
      return null;
    }

    const userLikesMovie = DragStatus === 'right';

    user_movies = [
      ...user_movies,
      await updateMoviePrefence(currentMovie, userLikesMovie)
    ]

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
                class="absolute bg-gradient-to-b via-transparent z-40 w-full h-full rounded-2xl transition-all duration-500 pointer-events-none"
                class:from-green-300="{DragStatus === 'right'}"
                class:from-red-300="{DragStatus === 'left'}"
              >
              </div>
              <MovieCard movie={currentMovie}/>
            </div>
          </Motion>
        </div>
      </div>
    {:else}
      No movie
    {/if}
</div>