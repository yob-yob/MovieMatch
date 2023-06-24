import type { UUID } from "crypto"

export type UserMovie = {
  id: number
  user_id: UUID
  movie_tmdb_id: number
  swipe_direction: 'left' | 'right'
  updated_at: Date
  created_at: Date
}