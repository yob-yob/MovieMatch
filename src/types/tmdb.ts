export type movie = {
  adult: string,
  backdrop_path: string,
  id: number,
  title: string,
  original_language: 'en', // should be enum of languages
  original_title: string,
  original_name: string, // only when media_type === movie
  overview: string,
  poster_path: string,
  media_type: 'movie' | 'tv', // should be enum of valid media types
  genre_ids: number[],
  popularity: number,
  release_date: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}