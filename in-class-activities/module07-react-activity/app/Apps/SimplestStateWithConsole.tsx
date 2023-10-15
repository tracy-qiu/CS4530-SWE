// simplest app, demonstrates useState, Button

import * as React from 'react';
import { useState } from 'react';
import { Box, Button, VStack } from '@chakra-ui/react';


// turn on console to demonstrate asynchrony
// In console, set levels to 'default'

// for style parameters, see https://chakra-ui.com/docs/styled-system/style-props 

export default function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    console.error('Button pressed!');
    console.log('before setCount: count = ', count)
    setCount(count + 1)
    console.log('after setCount: count = ', count)
  }

  return (
    <VStack>
      <Box border='2px' borderColor="pink" padding='1'>
        count = {count}
      </Box>
      <Button border='2px' borderColor="black" textColor='red'
        onClick={handleClick}
      >
        Increment Count!
      </Button>
    </VStack>
  )

}
