import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  Button, Box,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  Text,
  VStack, Tr, Td, Table, Tbody, TableContainer, HStack
} from '@chakra-ui/react';
import { AiFillDelete, AiFillHeart, AiOutlineDelete, AiOutlineHeart } from 'react-icons/ai';
import { nanoid } from 'nanoid';

import { ToDoItem } from './types'

export function ToDoItemEntryForm (props: {onAdd:(TodoItem)=>void}) {
    // state variables for this form
    const [title,setTitle] = useState<string>("")
    // const [priority,setPriority] = useState("")
  
    function handleClick(event) {
      event.preventDefault()  // magic, sorry.
      const newItem:ToDoItem = {title: title, priority: priority, id: nanoid(4), liked: false}
      props.onAdd(newItem)    
      setTitle('')   // reset the values to display the placeholder
      setPriority('')   
    }
  
    return (    
      <VStack spacing={0} align='left'>
        <form>
          <FormControl>
            <VStack align='left' spacing={0}>
            <FormLabel as="b">Add TODO item here:</FormLabel>
            <HStack w='200' align='left'>
            
            <Input
              name="title"
              value={title}
              placeholder='type item name here'
              onChange={(event => setTitle(event.target.value))}
            />
            <Box><Button bg='lightblue' type="submit" onClick={handleClick} width={200}> Add TODO item</Button>
            </Box>
            </HStack>
            </VStack>
          </FormControl>
          
                  
        </form>
      </VStack>
    )
  
  }

  //<Box h='4'></Box>
  