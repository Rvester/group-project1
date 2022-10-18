import React from 'react'

export default function Show({food}) {
  const loaded = () => {

    return (
      <div>
      <h1>{food.title}</h1>
      <img src = {food.image} alt = {food.title}/>
    </div>
  )
  
}
  const loading = () => {
    return <div>We do not have that flavor...</div>
  }
  
  return food ? loaded () : loading()
  
}
