import React from 'react'
import { Link } from 'react-router'
import { useNavigate } from 'react-router'

function MovieMain({props}) {
    const navigate = useNavigate()
  return (
    <div>
      <div>
        <img className='img' src={props.Images[0]} alt="" />
        <button id='sel' onClick={()=>{
            navigate(`movie/${props.imdbID}/seats/${props.imdbID}`,{state:props})
        }}>Choose Seats</button>
      </div>
      <p>ImDb:{props.imdbRating}</p>
      <p>Votes:{props.imdbVotes}</p>
      <p>Metascore:{props.Metascore}</p>
      <h2>Story</h2>
      <p>{props.Plot}</p>
      <div>
        <div>
            <p>Movie ID</p>
            <p>{props.imdbID}</p>
        </div>
        <div>
            <p>Year</p>
            <p>{props.Year}</p>
        </div>
        <div>
            <button>Go to Seats</button>
            <Link to={"/"}>Back to list</Link>
        </div>
      </div>
    </div>
  )
}

export default MovieMain
