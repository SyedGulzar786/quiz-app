import React from 'react'

function Card({ age = 999, name = "username" }) {
    let count = 0;
    function handleClick() {
        console.log("clickMe")
        console.log("button clicked", count++);
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default Card