import React from 'react'
import { Link } from 'react-router'

function Movieheader({props}) {
  return (
    <div id='bac' style={{backgroundImage:`url('${props.
        Images[0]}')`}}>
      <Link className='with' to="/">Back</Link>
      <h1 className='with'>{props.Title}</h1>
      <p className='with'>Pick your seats and enjoy</p>
    </div>
  )
}

export default Movieheader
