import { useState } from "react"
import Card from "./components/Card"
import Abc from "./components/abc"

function App() {

let [theme, setTheme] = useState("dark")

  return (
 <>
 <Abc theme={theme} />
 <Card theme={theme} setTheme={setTheme} />
 </>
  )
}

export default App
