<script lang="ts">
  import type { movie } from '../types/tmdb'
  export let movie: movie;
  
  import { configuration } from '../sdk/tmdb';
  
  function getMoviePoster(poster_path: string, poster_size: string) {
    let base_url = configuration.images.base_url;
    return `${base_url}${poster_size}${poster_path}`;
  }

  let showDetails: boolean = false;

  $: title = movie.media_type === 'movie' 
    ? movie.original_title 
    : movie.original_name
</script>

<div {...$$restProps}>
  <div class="card w-96 bg-base-100 shadow-xl image-full">
    <figure>
      <img 
        src={getMoviePoster(movie.poster_path, 'original')} 
        alt="{title}" 
        class=""
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{title}</h2>
      <p>{movie.overview.substring(0,200)}...</p>
      <div class="card-actions justify-end">
        <button class="btn btn-sm btn-primary" on:click="{() => showDetails = !showDetails}">{showDetails ? 'Hide Details' : 'Open Details'}</button>
      </div>
    </div>
  </div>
</div>

<style>
  img {
    user-select: none;
    -webkit-user-drag: none;
  }
</style>