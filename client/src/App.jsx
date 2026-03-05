import { useEffect } from 'react'
import './App.css'
import { useMovStore } from './store/zustandStoere'
import Home from './pages/home'
import { BrowserRouter, Route, Routes } from 'react-router'
import Movie from './pages/movie'
import Seats from './pages/seats'


function App() {
  const { movies, isLoading, setSelect, searchQuery } = useMovStore()
  useEffect(() => {
    isLoading()
    setSelect()
    localStorage.setItem("seats",JSON.stringify(searchQuery))
  }, [isLoading])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='movie/:itemId' element={<Movie />} />
        <Route path='/movie/:itemId/seats/:itemId' element={<Seats />}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
