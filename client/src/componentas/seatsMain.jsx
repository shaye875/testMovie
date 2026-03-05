import React from 'react'

function SeatsMain({props}) {
  return (
    <div>
      {localStorage.getItem("seats") != 'undefined' && localStorage.getItem("seats") != null && JSON.parse(localStorage.getItem("seats")[props.imdbID].localeCompare((s)=>{
        return(
            <div>
                <p>r{s.numberX}</p>
                <h2>{s.numberY}</h2>
            </div>
        )
      }))}
    </div>
  )
}

export default SeatsMain
