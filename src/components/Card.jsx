import React, { useState } from 'react'

function Card({ age = 999, name = "username" }) {
    let [count, setCount] = useState(0)
    function handleClick() {
        console.log("clickMe")
setCount(count + 1)
setCount(count + 1)
setCount(count + 1)
setCount(count + 1)
setCount(count + 1)
setCount(count + 1)
setCount(count + 1)
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default Card