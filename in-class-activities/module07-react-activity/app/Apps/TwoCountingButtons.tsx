// demonstrates passing props down, passing events up

import * as React from 'react';
import { useState } from 'react';
import {
  Box,
  VStack,
} from '@chakra-ui/react';
import { CountingButton } from './CountingButton';

// create two CountingButtons, and keep track of the total count.

export default function App() {
  const [globalCount, setGlobalCount] = useState(0)

  function handleClick() {
    setGlobalCount(globalCount + 1)
  }

  return (
    <VStack>
      <Box border="1px" padding='1'>
        Total count = {globalCount}
      </Box>
      <Box h="20px" />
      <CountingButton name="Button A" onClick={handleClick} />
      <Box h="20px" />
      <CountingButton name="Button B" onClick={handleClick} />
    </VStack>
  )
}


