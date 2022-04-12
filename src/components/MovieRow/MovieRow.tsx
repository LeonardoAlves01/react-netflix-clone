import './MovieRow.css'

export const MovieRow = (props: MovieRowType) => {
  return (
    <div className="movieRow">
      <h2>{props.title}</h2>

      <div className='movieRow--listarea'>

        <div className='movieRow--list'>
          {props.items.results?.length > 0 && props.items.results?.map((item, key) => {

            return (
              <div key={key} className="movieRow--item">
                <img src={`https://www.themoviedb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
              </div>
            )

          })}
        </div>

      </div>

    </div>
  )
}

type MovieRowType = {
  title: string
  items: {
    page: number
    total_pages: number
    total_results: number
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
  }
}