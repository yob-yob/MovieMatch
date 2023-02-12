<script lang="ts">
  import type { movie } from '../types/movie'
  export let movie: movie;
  import { page } from '$app/stores';

  function generateRandomRotationValue() {
    return Math.floor(Math.random() * 11) - 5;
  }
  function getMoviePoster(poster_path: string) {
    let base_url = $page.data.configuration.images.base_url;
    let poster_size = 'w342';
    let url = `${base_url}${poster_size}${poster_path}`;
    return url;
  }
  let src = getMoviePoster(movie.poster_path)
  let title = movie.title
</script>

<div style:transform={`rotate(${generateRandomRotationValue()}deg)`}>
  <div class="card card-compact w-96 bg-base-100 shadow-xl">
    <figure><img {src} alt="{title}" /></figure>
    <div class="card-body">
      <h2 class="card-title">{title}!</h2>
      <p>{movie.overview}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Watch Now</button>
      </div>
    </div>
  </div>
</div>