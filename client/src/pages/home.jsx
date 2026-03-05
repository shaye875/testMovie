import Homeheader from '../componentas/home.header'
import Homemovies from '../componentas/home.movies'
// import Homesearch from '../componentas/home.search'
import { useMovStore } from '../store/zustandStoere'

function Home() {
    const {movies} = useMovStore()
  return (
    <div id='hom'>
      <Homeheader />
      <Homemovies />
    </div>
  )
}

export default Home
