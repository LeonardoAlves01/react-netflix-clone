import './FeaturedMovie.css'

export const FeaturedMovie = (props: any) => {
  return (
    <section className='featured' style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(https://www.themoviedb.org/t/p/original${props.item.backdrop_path})`
    }}>

      <div className='featured--vertical'>
        <div className='featured--horizontal'>

          <div className='featured--name'>
            {props.item.original_name}
          </div>

          <div className='featured--info'>
            <div className='featured--points'>{props.item.vote_average} pontos</div>
            <div className='featured--year'>2099</div>
            <div className='featured--seasons'>{props.item.number_of_seasons} {props.item.number_of_seasons != 1 ? 'temporadas' : 'temporada'}</div>
          </div>

          <div className='featured--description'>
            {props.item.temporada}
          </div>

        </div>
      </div>
    </section>
  )
}

type FeaturedMovieType = {
  title: string
  item: {
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
  }
}