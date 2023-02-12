<script lang="ts">
  import type { movie } from '../types/tmdb'
  export let movie: movie;
  import { configuration } from '../sdk/tmdb';

  function generateRandomRotationValue() {
    return Math.floor(Math.random() * 11) - 5;
  }
  function getMoviePoster(poster_path: string, poster_size: string) {
    let base_url = configuration.images.base_url;
    return `${base_url}${poster_size}${poster_path}`;
  }

  let title = movie.media_type === 'movie' 
    ? movie.original_title 
    : movie.original_name
</script>

<div 
  style:transform={`rotate(${generateRandomRotationValue()}deg)`}
  {...$$restProps}
  >
  <div class="card image-full w-52 md:w-72 bg-base-100 shadow-xl">
    <figure>
      <img 
        src={getMoviePoster(movie.poster_path, 'original')} 
        alt="{title}" 
        class="h-20 object-contain"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{title}</h2>
      <p>{movie.overview.substring(0,200)}...</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Open Details</button>
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