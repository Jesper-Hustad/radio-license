import * as React from "react"
import { useState } from 'react';

import { Stack, Text, Button, background } from '@chakra-ui/react';
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons'

const box = {
    maxWidth : "500px",
    borderRadius : "10px",
    // backgroundColor: '#eeeeee',
  }

const option = {
    borderRadius : "5px",
    padding : "3px",
    paddingLeft : "6px",
    width : "100%",
    minHeight : "40px"
}

const defaultOpt = {
    border : "1px solid #dddddd",
    backgroundColor : "white"
}

const selectedOpt = {
    border : "1px solid #5f9dde",
    backgroundColor : "#eceef3"
}

export default function Question(props){


    const question = props.questions[0]
    const [selected, setSelected] = useState(1)

    return (
        <div style={box}>

            <Stack p="4" boxShadow="lg" m="4" borderRadius="xl">

            <Text fontWeight="bold" fontSize='md'>Spørsmål 5/28</Text>

            <Stack direction="row" alignItems="end" style={{minHeight:"180px"}}>
                <Text fontSize='sm'>{question.question}</Text>
            </Stack>
            <br/>

            <Stack
                direction={{ base: 'column', md: 'row' }}
                justifyContent="space-between" 
               
                >
                <Stack direction={{ base: 'column', md: 'row' }}>

                <Stack spacing={4} direction='column' align='center'  >

                <Stack spacing={4} direction='column' align='center' style={{minHeight:"350px"}} >
                {question.answers.map((a,i) => (
                    <Text fontSize="sm" style={{...option, ...((selected != i) ? defaultOpt : selectedOpt)}} onClick={() => setSelected(i)}>{a}</Text>
                ))}
                </Stack>




                <Stack spacing={3} direction='row' align='center' style={{width : "100%"}}>
                    <Button  leftIcon={<ArrowBackIcon />} colorScheme='teal' style={{width : "40%"}} >
                        <Text fontWeight="bold" >Forrige</Text>
                    </Button>
                    <Button colorScheme='teal' style={{width : "50%"}}>
                        <Text fontWeight="bold">Sjekk svar</Text>
                    </Button>
                    <Button  rightIcon={<ArrowForwardIcon />} colorScheme='teal' style={{width : "40%"}}>
                        <Text fontWeight="bold">Neste</Text>
                    </Button>
                </Stack>
                </Stack>

                </Stack>
            </Stack>
            </Stack>

        </div>
    )
}