import * as React from "react"
import Home from "../templates/home"


// styles
const pageStyles = {
  color: "#232129",
  // padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}


// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>RadioLisens</title>

      <Home></Home>
    </main>

  )
}

export default IndexPage
