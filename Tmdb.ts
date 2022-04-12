const API_KEY = '080cbfc32ec4f5326d87744093de749b'
const API_BASE = 'https://api.themoviedb.org/3'

const basicFetch = async (endpoint: string) => {
  const req = await fetch(`${API_BASE}${endpoint}`)

  return await req.json()
}

export type ListMovie = {
  slug: string
  title: string
  items: {
    page: number
    results: {
      adult: boolean,
      backdrop_path: string
      belongs_to_collection: string
      budget: number
      genres:
      {
        id: number
        name: string
      }[]
      homepage: string
      id: number
      imdb_id: string
      original_language: string
      original_title: string
      overview: string
      popularity: number
      poster_path: string
      production_companies:
      {
        id: 508,
        logo_path: string
        name: string
        origin_country: string
      }[]

      production_countries:
      {
        iso_3166_1: string
        name: string
      }[]

      release_date: string
      revenue: number
      runtime: number
      spoken_languages:
      {
        english_name: string
        iso_639_1: string
        name: string
      }[]
      status: string
      tagline: string
      title: string
      video: boolean,
      vote_average: number
      vote_count: number
    }[]
    total_pages: number
    total_results: number
  }
}

export default {
  getHomeList: async (): Promise<ListMovie[]> => {
    return [
      {
        slug: 'originals',
        title: 'Originais da Netflix',
        items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'trending',
        title: 'Recomendados para Você',
        items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'topRated',
        title: 'Em Alta',
        items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
      },
    ]
  },
  getMovieInfo: async (id: number, type: string) => {

    if (id) {
      return type === 'movie'
        ? await basicFetch(`/movie/${id}?language=pt-BR&api_key=${API_KEY}`)
        : await basicFetch(`/tv/${id}?language=pt-BR&api_key=${API_KEY}`)
    }

  }
}