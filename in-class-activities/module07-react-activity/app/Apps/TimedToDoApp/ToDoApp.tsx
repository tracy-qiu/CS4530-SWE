// illustrates forms, lists, etc.
// THE WHOLE POINT OF THIS IS THE ATTRIBUTE 'key' ON LINE

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
  const [todoList,setTodolist] = useState<ToDoItem[]>([])

  function handleAdd (newItem:ToDoItem) {
    if (newItem.title === '') {return}   // ignore blank button presses
    setTodolist(todoList.concat(newItem))
  }

  function handleDelete(targetId:string) {
    const newList = todoList.filter(item => item.id != targetId)
    setTodolist(newList)
  }

  return (
  <VStack>
    <Heading>TODO List</Heading>
    <ToDoItemEntryForm onAdd={handleAdd}/>
    <ToDoListDisplay items={todoList} onDelete={handleDelete}/>
  </VStack>
  )
}





