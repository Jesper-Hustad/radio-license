import * as React from "react"
import Question from "../templates/question"

import questions from "../../exams/questions.json"

import { useState } from 'react';

// styles
const pageStyles = {
  color: "#232129",
  // padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// data
const links = [
  questions[0], questions[1], questions[2]
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>RadioLisens</title>
      
      <Question questions={links}/>
      
    </main>

  )
}

export default IndexPage
