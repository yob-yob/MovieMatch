const base_url = 'https://api.themoviedb.org'

export async function getTrendingMovies(api_key: string) {
  return await (
      await fetch(`${base_url}/3/trending/all/day?api_key=${api_key}`)
    ).json();
}

export async function getConfiguration(api_key: string) {
  return await (
      await fetch(`${base_url}/3/configuration?api_key=${api_key}`)
    ).json();
}