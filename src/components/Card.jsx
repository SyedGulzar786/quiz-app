
function Card({theme, setTheme}) {
    function handleClick() {
    setTheme(theme === "dark" ? "light" : "dark")
    // setTheme("light")
    }
    return (
        <div>
            <p>{theme}</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default Card