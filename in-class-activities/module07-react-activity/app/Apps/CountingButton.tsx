import * as React from 'react';
import { useState,useEffect} from 'react';
import {
  Box,
  Button,
  VStack,
} from '@chakra-ui/react';

export function CountingButton(props: { 
  name:string, onClick:() => void }) {

  const name = props.name
  // useState persists when you change the code,
  // resets when you hit the reload button
  const [localCount, setLocalCount] = useState(0)

  function handleClick() {
    console.error(props.name, 'pressed!');
    setLocalCount(localCount + 1)    
    props.onClick() // propagate to parent

  }

  return (
    <VStack>
      <Box border='2px'
        borderColor="green"
        padding='1'>
        count for {props.name} = {localCount}
      </Box>

      <Button
        type='submit'
        textColor={"red"}
        onClick={handleClick}
        border='2px'
        borderColor="black">
        Increment {name}!
      </Button>
    </VStack>
  )

}
