import * as React from "react"
import Question from "../templates/question"
// import Nav from "../templates/nav"
import Footer from "../templates/footer"
import { Stack, Text, Button, background, Image, Link } from '@chakra-ui/react';
import Logo from "../images/logo-circle.png"

import questionJSON from "../../exams/questions.json"

import { useState } from 'react';

function getShuffled(arr, max){
    return arr
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
            .slice(0,max)
}

export default function Home(props){

    
const [part, setPart] = useState(0)
const [numberCorrect, setNumberCorrect] = useState(-1)
const [currentQuestions, setCurrentQuestions] = useState(getShuffled(questionJSON,28))

React.useEffect(() => {
    if(numberCorrect == -1) return
    
    setTimeout(() => {
        setPart(2)
    }, 1500);
    
},[numberCorrect])

React.useEffect(() => {
    if(part != 1) return
    
    setCurrentQuestions(getShuffled(questionJSON,28))
},[part])
    
return(
    <>
    {/* <Nav onClick={()=>alert("hello")} /> */}
    {part == 0 &&
      <>
        <Stack spacing={4} direction='column' align='center' style={{minHeight:"400px", padding: "15px"}} >
            <br/><br/>
            <Image src={Logo} alt='' height={"180px"} />
            <Text fontSize="4xl">RadioLisens</Text>
            <Text fontSize="md" style={{textAlign: "center"}}>Prøv deg på tidligere NKOM amatørradiolisens prøver og se hvor mye du kan.</Text>
            <br/>
            <Button onClick={() => setPart(1)}>Start prøven</Button>
          

          <br/>
          <br/><br/><br/>
            <Text fontSize="sm" style={{textAlign: "center"}}>Send gjerne tilbakemeldinger med GitHub issues.</Text>

          </Stack>
          <Footer/>
        </>
        }
        
    {part == 1 &&
        <Question questions={currentQuestions} numCorrect={setNumberCorrect}/>
    }

    {part == 2 &&
        <>
        <Stack spacing={4} direction='column' align='center' style={{minHeight:"400px", padding: "15px"}} >
            <br/>
            <Image src={Logo} alt='' height={"180px"} />
            <Text fontSize="4xl">Dine resultater</Text>
            <Text fontSize="md" style={{textAlign: "center"}}>Du fikk <b>{numberCorrect}/28</b> riktig.</Text>

            <Text fontSize="md"  style={{textAlign: "center"}}>Trenger du mer trening? Det anbefales å lese gjennom boken <u><Link href="https://nrrl.no/nettbutikk/vare/veien-til-internasjonal-radioamatorlisens/#:~:text=Den%20nye%20l%C3%A6reboka%20har%20teke,omarbeidd%20stoffet%20til%20norske%20tilh%C3%B8ve.">Veien til internasjonal radioamatørlisens</Link></u></Text>
            {/* <Text fontSize="md" style={{textAlign: "center"}}>Det er krav om </Text> */}
            <br/>
            <Button onClick={() => setPart(1)}>Start prøven på nytt</Button>

            <br/><br/>
            <Text fontSize="sm" style={{textAlign: "center"}}>Send gjerne tilbakemeldinger med GitHub issues.</Text>
          

          {/* <br/> */}

          </Stack>
          <Footer/>
        </>
    }

    
        
    </>  
)
}