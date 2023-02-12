import { error } from '@sveltejs/kit';
import { MOVIEDB_API_KEY } from '$env/static/private';
import type { movie } from '../types/movie';
 
/** @type {import('./$types').PageServerLoad} */
export async function load() {

  let response = await (await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${MOVIEDB_API_KEY}`)).json()
  
  let trending = response.results as movie[];

  return {
    movies: trending
  };
}