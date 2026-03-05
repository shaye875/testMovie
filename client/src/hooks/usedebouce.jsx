import React, { useState } from 'react'

function usedebouce() {
  const [value,setValue] = useState()
  function delay(e){
      setTimeout(()=>{
        setValue(e.target.value)
      },1000)
  }

  return {value,delay}
}

export default usedebouce

