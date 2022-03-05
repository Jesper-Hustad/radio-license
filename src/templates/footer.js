import * as React from "react"

import {
    Box,
    chakra,
    Container,
    Link,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
    Tooltip
  } from '@chakra-ui/react';
//   import { FaTwitter,FaFacebook } from 'react-icons/fa';
  

const stick = {
    position: "fixed",
    left:0,
    bottom:0,
    right:0,
}

  const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function SmallCentered() {
    return (
      <Box
        style={stick}
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          spacing={4}
          justify={'center'}
          align={'center'}>
          {/* <Logo /> */}
          {/* <img src={Logo} alt="" style={{height:"50px"}}/> */}
          <Stack direction={'row'} spacing={6}>
            {/* <Link href={'/'}>Hjem</Link> */}
            <Link href={'https://github.com/Jesper-Hustad/radio-lisens/'}>GitHub</Link>
            {/* <Link href={'#'}>Blog</Link> */}
            <Tooltip label='radiolisens@jesperhustad.com'>
            <Link href={'mailto: radiolisens@jesperhustad.com'}>Kontakt</Link>
            </Tooltip>
            
          </Stack>
        </Container>
  
        <Box
          borderTopWidth={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}>
          <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}>
            <Text>Opphavsrett RadioLisens.no © 2022</Text>
            <Stack direction={'row'} spacing={6}>
              {/* <SocialButton label={'Twitter'} href={'https://twitter.com/nettprinter'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'Facebook'} href={'https://www.facebook.com/Nettprinter'}>
                <FaFacebook />
              </SocialButton> */}
              {/* <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton> */}
            </Stack>
          </Container>
        </Box>
      </Box>
    );
  }