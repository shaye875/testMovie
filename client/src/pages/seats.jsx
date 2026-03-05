import React from 'react'
import SeatsMain from '../componentas/seatsMain'

function Seats() {
    const {state} = useLocation()
  return (
    <div>
      <SeatsMain props={state}/>
    </div>
  )
}

export default Seats
