import React, { useEffect } from 'react'

const test = () => {
    let a=1
    const add=()=>{
        a+=1
    }
    useEffect(()=>{
        console.log("a changed")
    },[a])

  return (
    <div>
      {a}
      <button onClick={add}>add</button>
    </div>
  )
}

let a=1
export default test
