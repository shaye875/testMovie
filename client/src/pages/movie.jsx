import React from 'react'
import { useMovStore } from '../store/zustandStoere'
import { useLocation } from 'react-router'
import Movieheader from '../componentas/movie.header'
import MovieMain from '../componentas/novieMain'

function Movie() {
    const {state} = useLocation()
  return (
    <div>
      <Movieheader props={state} />
      <MovieMain props={state}/>
    </div>
  )
}

export default Movie
