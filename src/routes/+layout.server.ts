// https://api.themoviedb.org/3/configuration?api_key=
import { MOVIEDB_API_KEY } from '$env/static/private';
import type { LayoutServerLoad } from './$types';
import { getConfiguration } from '../sdk/movies-db'
 
export const load = (async () => {
  let response = await getConfiguration(MOVIEDB_API_KEY)

  return {
    configuration: response
  };
}) satisfies LayoutServerLoad;