import './App.css'
import { useEffect, useState } from 'react'
import Tmdb from './Tmdb'
import { MovieRow } from './components/MovieRow/MovieRow'
import { FeaturedMovie } from './components/FeaturedMovie/FeaturedMovie'
import { ListMovie } from './Tmdb'

export const App = () => {

  const [movieList, setMovieList] = useState<ListMovie[]>([])
  const [featuredData, setFeaturedData] = useState<any>(null)

  useEffect(() => {
    const loadAll = async () => {
      const list = await Tmdb.getHomeList()
      setMovieList(list)

      const originals = list.filter(item => item.slug === 'originals')
      const randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))

      const chosen = originals[0].items.results[randomChosen]
      const chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')

      setFeaturedData(chosenInfo)
    }

    loadAll()
  }, [])

  return (
    <div>

      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }

      {movieList.map((movie, key) => {
        //  <Diacho item={movieList} />
        return <MovieRow key={key} title={movie.title} items={movie.items} />
      })}
    </div>
  )
}
