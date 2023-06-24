import type { SupabaseClient } from "@supabase/supabase-js";

export default class App {
  async getUserMovies(supabase: SupabaseClient, user_id: string) {
    return await supabase.from('users_movies').select().eq('user_id', user_id);
  }
}
