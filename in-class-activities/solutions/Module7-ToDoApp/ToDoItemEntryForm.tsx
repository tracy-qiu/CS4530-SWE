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
  VStack, Tr, Td, Table, Tbody, TableContainer, HStack,
  NumberInput,
  NumberInputField,
} from '@chakra-ui/react';
import { AiFillDelete, AiFillHeart, AiOutlineDelete, AiOutlineHeart } from 'react-icons/ai';
import { nanoid } from 'nanoid';

import { ToDoItem } from './types'

export function ToDoItemEntryForm(props: { onAdd: (item: ToDoItem) => void, onSort: () => void, removePriorities: (priority: string) => void }) {
  // state variables for this form
  const [title, setTitle] = useState<string>("")
  const [priority, setPriority] = useState("")
  const [key, setKey] = useState(1)     // key is assigned when the item is created.
  const [deletePriority, setDeletePriority] = useState("");

  function handleClick(event) {
    event.preventDefault()  // magic, sorry.

    const newItem: ToDoItem = { title: title, priority: priority, key: key }
    console.log('adding:', newItem)
    props.onAdd(newItem)    // tell the parent about the new item
    setTitle('')   // resetting the values redisplays the placeholder
    setPriority('')
    setKey(key => key + 1)  // generate a new key for the next item
  }

  function handleSort(event) {
    console.log("Handling sort")
    event.preventDefault();
    props.onSort();
  }

  function handleDeletePrority(event) {
    console.log(`Delete p: ${deletePriority}`)
    event.preventDefault();
    props.removePriorities(deletePriority);
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
                onChange={(event => {
                  setTitle(event.target.value);
                  console.log('setting Title to:', event.target.value)
                })}
              />
              <NumberInput
                name="priority"
                value={priority}
                onChange={(valueAsString, _) => setPriority(valueAsString)}
              >
                <NumberInputField
                  placeholder='type priority here'
                />
              </NumberInput>
              <Box><Button bg='lightblue' type="submit" onClick={handleClick} width={200}> Add TODO item</Button>
              </Box>
              <Box><Button bg='lightblue' type="submit" onClick={handleSort} width={200}> Sort Items</Button>
              </Box>
            </HStack>
            <HStack w='200' align='left'>
              <NumberInput
                name="priorityDelete"
                onChange={(valueAsString, _) => setDeletePriority(valueAsString)}
              >
                <NumberInputField
                  placeholder='type priority to delete'
                />
              </NumberInput>
              <Box>
                <Button bg='lightblue' type="submit" onClick={handleDeletePrority} width={200}>Delete Prority</Button>
              </Box>
            </HStack>
          </VStack>
        </FormControl>


      </form>
    </VStack>
  )

}
