import * as React from "react"
import { useState } from 'react';

import Selectable from "../templates/selectable"

import { Stack, Text, Button, background } from '@chakra-ui/react';
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons'

const box = {
    maxWidth : "500px",
    borderRadius : "10px",
    margin : "auto"
  }

  const option = {
    // borderRadius : "5px",
    padding : "4px",
    paddingLeft : "8px",
    width : "100%",
    minHeight : "40px"
}

const defaultOpt = {
    border : "1px solid #dddddd",
    backgroundColor : "white"
}

const selectedOpt = {
    border : "1px solid #5f9dde",
    backgroundColor : "white"
}

const correctOpt = {
    border : "1px solid green",
    backgroundColor : "#d9fffa"
}

const wrongOpt = {
    border : "1px solid red",
    backgroundColor : "#ffc3bd"
}

const editArray = (i, n, arr) => {
    const a = [...arr]
    a[i] = n
    return a
}

export default function Question(props){
    
    const max = 28

    const questions = props.questions
    const [position, setPosition] = useState(0)
    const [selected, setSelected] = useState(-1)
    const [answered, setAnswered] = useState(Array(max).fill(-1))

    React.useEffect(() => {
        setSelected(-1)
    }, [position])

    React.useEffect(() => {
        if(answered.indexOf(-1) == -1){
            const numCorrect = answered.map((a, i) => a == questions[i].solution).filter(Boolean).length
            props.numCorrect(numCorrect)
        }
    }, [answered])


    return (
        <div style={box}>
        <Stack p="4" boxShadow="lg" m="4" borderRadius="xl" style={{    backgroundColor: '#f2fcff',}}>

            <Text fontWeight="bold" fontSize='md'>Spørsmål {position + 1}/{max}</Text>
            
            {/* QUESTION */}
            <Stack direction="row" alignItems="center" style={{minHeight:"190px"}}>
                <Text fontSize='sm'>{questions[position].question}</Text>
            </Stack>


            {/* ANSWERS */}
            <Stack spacing={4} direction='column' align='center' style={{minHeight:"400px"}} >
                { answered[position] == -1 &&
                questions[position].answers.map((a,i) => (
                    <Text fontSize="sm" style={{...option, ...((selected != i) ? defaultOpt : selectedOpt)}} onClick={() => setSelected(i)}>{a}</Text>
                ))}


                {answered[position] != -1 &&
                questions[position].answers.map((a,i) => (
                    <Text fontSize="sm" style={{...option, ...((questions[position].solution==i) ? correctOpt : (answered[position]==i) ? wrongOpt : defaultOpt)}}>{a}</Text>
                ))

                }
            </Stack>


            {/* BUTTONS */}
            <Stack direction={{ base: 'column', md: 'row' }} justifyContent="space-between" style={{width : "100%"}}>
                <Stack spacing={3} direction='row' align='center' style={{width : "100%"}}>
                    
                    <Button onClick={() => position > 0 ? setPosition(position-1) : null} leftIcon={<ArrowBackIcon />} colorScheme='teal' style={{width : "40%"}} >
                        <Text fontWeight="bold" >Forrige</Text>
                    </Button>

                    <Button onClick={() => setAnswered(editArray(position, selected, answered))} colorScheme='teal' style={{width : "50%"}}>
                        <Text fontWeight="bold">Sjekk svar</Text>
                    </Button>

                    <Button onClick={() => position + 1 < max ? setPosition(position+1) : null} rightIcon={<ArrowForwardIcon />} colorScheme='teal' style={{width : "40%"}}>
                        <Text fontWeight="bold">Neste</Text>
                    </Button>

                </Stack>
            </Stack>


        </Stack>
        </div>
    )
}


