// instead of a list of todo items, we will do a list of clock displays
// all the displays will share the same clock

import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  Heading, Table, Th, Tbody, Tr,
  Td,
  VStack, 
} from '@chakra-ui/react';

import { ToDoItem } from './types'
import { ToDoItemEntryForm } from './ToDoItemEntryForm'
import { ToDoListDisplay } from './ToDoListDisplay'


export default function ToDoApp () {
  const [clockList,setClockLists] = useState<ToDoItem[]>([])

  function handleAdd (newItem:ToDoItem) {
    if (newItem.title === '') {return}   // ignore blank button presses
    setClockLists(clockList.concat(newItem))
  }

  function handleDelete(targetId:string) {
    const newList = clockList.filter(item => item.id != targetId)
    setClockLists(newList)
  }

  return (
  <VStack>
    <Heading>TODO List</Heading>
    <ToDoItemEntryForm onAdd={handleAdd}/>
    <ToDoListDisplay items={clockList} onDelete={handleDelete}/>
  </VStack>
  )
}





