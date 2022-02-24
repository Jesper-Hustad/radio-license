import * as React from "react"
import Logo from "../images/logo.svg"

import {
  Box,
  Flex,
  Link,
  Stack,
  Image,
} from '@chakra-ui/react';

const sticky = {
  position: "fixed",
  top: 0,
  width: "100%",  
  zIndex: 9999
}

const padding = {
  marginBottom: "70px"
}

export default function Nav(props) {
  return (
    <div style={padding}>
    <div style={sticky}>
      <Box bg={"#eee"} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>

          <Link onClick={() => window.location.reload(false)}>
            <Box>
              <Image src={Logo} alt='' height={{ base: '57px', sm: '57px', md: '57px' }} />
            </Box>
          </Link>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
            
            </Stack>
          </Flex>
        </Flex>
      </Box>
      </div>
    </div>
  );
}