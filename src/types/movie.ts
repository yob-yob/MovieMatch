export type movie = {
  adult: string,
  backdrop_path: string,
  id: number,
  title: string,
  original_language: 'en', // should be enum of languages
  original_title: string,
  overview: string,
  poster_path: string,
  media_type: 'movie', // should be enum of valid media types
  genre_ids: number[],
  popularity: number,
  release_date: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}