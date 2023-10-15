// simplest app, demonstrates useState, Button

import * as React from 'react';
import { useState } from 'react';
import {
  Box,
  Button,
  VStack,
} from '@chakra-ui/react';


// turn on console to demonstrate asynchrony

// In console, set levels to 'default'

// for style parameters, see https://chakra-ui.com/docs/styled-system/style-props 

export default function App1() {
  // useState persists when you change the code,
  // resets when you hit the reload button
  const [count, setCount] = useState(0)

  function handleClick() {
    console.error('Button pressed!');
    console.log('before setCount: count = ', count)
    setCount(count + 1)
    console.log('after setCount: count = ', count)
  }

  return (
    <VStack>
      <Box border='2px'
        borderColor="pink"
        padding='1'>
        count = {count}
      </Box>
      <Button
        textColor={"red"}
        onClick={handleClick}
        border='2px'
        borderColor="black">
        Increment Count!
      </Button>
    </VStack>
  )

}
