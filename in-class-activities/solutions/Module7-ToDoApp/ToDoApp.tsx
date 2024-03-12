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

export default function ToDoApp() {
  const [todoList, setTodolist] = useState<ToDoItem[]>([])

  function handleAdd(newItem: ToDoItem) {
    if (newItem.title === '') { return }   // ignore blank button presses
    setTodolist(todoList.concat(newItem))
  }

  function handleDelete(targetKey: number) {
    const newList = todoList.filter(item => item.key != targetKey)
    setTodolist(newList)
  }

  function handleSort() {
    let toDoListCopy = [...todoList];
    setTodolist(toDoListCopy.sort((item1, item2) => parseInt(item1.priority) - parseInt(item2.priority)));
  }

  function handleDeletePriority(targetPriority: string) {
    if (targetPriority === '') { return }
    const prority = parseInt(targetPriority);
    let toDoListCopy = [...todoList];
    setTodolist(toDoListCopy.filter(item => parseInt(item.priority) <= prority));
  }

  return (
    <VStack>
      <Heading>TODO List</Heading>
      <ToDoItemEntryForm onAdd={handleAdd} onSort={handleSort} removePriorities={handleDeletePriority} />
      <ToDoListDisplay items={todoList} onDelete={handleDelete} />
    </VStack>
  )
}
