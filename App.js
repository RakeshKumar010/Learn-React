import React, { useState } from 'react'

export default function App() {
  const [inp,setinp]=useState();
  const [val,setval]=useState([]);
  function funName(e){
    setinp(e.target.value.toUpperCase())
  }
  function btnFun(e){
    e.preventDefault();
    setval((pre)=>{
      return [...pre,inp]
    })
  }


  return (
    <>
    <form onSubmit={btnFun}>
    <input type="text" onChange={funName} />
    <button type="submit">+</button>
    </form>
    <ul>

      {val.map((v)=>{
        return <li>{v}</li>
      })}
    </ul>
    </>
  )
}
