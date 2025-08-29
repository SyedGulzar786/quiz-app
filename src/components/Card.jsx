
function Card({theme, setTheme}) {
    function handleClick() {
    setTheme(theme === "dark" ? "light" : "dark")
    // setTheme("light")
    }
    return (
        <div>
            <p>{theme}</p>
            <button className="abcd" onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default Card



// class name {
//     constructor(parameters) {
        
//     }
// }