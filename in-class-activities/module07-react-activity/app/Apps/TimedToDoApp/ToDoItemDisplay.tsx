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

export function ToDoItemDisplay (props: {item: ToDoItem, key:string, onDelete:(id:string)=>void} ) {
    const [item, setItem] = useState(props.item)  // why not const item = props.item?
    const [age, setAge] = useState(0)

    const incrementAge = () => setAge(age => age + 1)
    const clock = SingletonClockFactory.instance(1000)  // all the displays will share the same clock
    
    useEffect(() => {
        const listener1 = () => { incrementAge() }
        clock.addListener(listener1)
        return () => {
            console.log('ClockDisplay', item.title, 'unmounting');
            clock.removeListener(listener1)
        }
    }, [])
  
    function handleDelete() {
      console.log('deleting:', item.title)
      props.onDelete(item.id)
    }
  
  return (
    <Tr>
      <Td>{item.title}</Td>
      <Td>{item.priority}</Td>
      <Td><ItemDeleteButton onClick={handleDelete} /></Td>
    </Tr>
  )
}
 
function ItemDeleteButton(props: { onClick: () => void }) {
  return (
    <IconButton aria-label='delete' icon={<AiOutlineDelete />} onClick={props.onClick} />
  )
}