import React, { useState } from "react"

function Index(){
  const [ num ,setNumber ] = useState(0)
  const handerClick=()=>{
      for(let i=0; i<5;i++ ){
         setTimeout(() => {
              setNumber(num=>num+1)
             
              console.log(num)
         }, 1000)
      }
  }
  return <button onClick={ handerClick } >{ num }</button>
}
export default Index