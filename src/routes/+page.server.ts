import { error } from '@sveltejs/kit';
import { MOVIEDB_API_KEY } from '$env/static/private';
import type { movie } from '../types/tmdb';
import { getTrendingMovies } from '../sdk/tmdb';
 
/** @type {import('./$types').PageServerLoad} */
export async function load() {
  return {
    movies: (await getTrendingMovies(MOVIEDB_API_KEY)).results as movie[]
  };
}