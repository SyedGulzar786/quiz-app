import React from 'react'

function Card(props) {
  return (
 <div>
    name: {props.name}
    <br />
    age: {props.age}
 </div>
  )
}

export default Card