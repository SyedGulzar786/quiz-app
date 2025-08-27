import React from 'react'

function Card({age = 999, name = "username"}) {
  return (
 <div>
    name: {name}
    <br />
    age: {age}
 </div>
  )
}

export default Card