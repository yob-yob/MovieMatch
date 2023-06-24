import { MOVIEDB_API_KEY } from '$env/static/private';
import type { movie } from '../types/tmdb';
import { getTrendingMovies } from '../sdk/tmdb';
import App from '../sdk/app';
import type { UserMovie } from '../types/app';
import { redirect } from '@sveltejs/kit'
 
export async function load({ locals: { supabase, getSession } }) {
  const session = await getSession()

  if (!session) {
    throw redirect(303, '/login')
  }

  const AppInstance = new App();

  return {
    movies: (await getTrendingMovies(MOVIEDB_API_KEY)).results as movie[],
    user_movies: (await AppInstance.getUserMovies(supabase, session.user.id)).data as UserMovie[]
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