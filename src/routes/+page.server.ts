import { MOVIEDB_API_KEY } from '$env/static/private';
import type { movie } from '../types/tmdb';
import { getTrendingMovies } from '../sdk/tmdb';
import { redirect } from '@sveltejs/kit'
 
export async function load({ locals: { supabase, getSession } }) {
  const session = await getSession()

  if (!session) {
    throw redirect(303, '/login')
  }

  return {
    movies: (await getTrendingMovies(MOVIEDB_API_KEY)).results as movie[]
  };
}

export const actions = {
  signout: async ({ locals: { supabase, getSession } }) => {
    const session = await getSession()
    if (session) {
      await supabase.auth.signOut()
      throw redirect(303, '/login')
    }
  },
}