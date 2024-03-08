// illustrates forms, lists, etc.
// THE WHOLE POINT OF THIS IS THE ATTRIBUTE 'key' ON LINE

import * as React from "react";
import { useState, useEffect } from "react";
import {
  Heading,
  Table,
  Th,
  Tbody,
  Tr,
  Td,
  VStack,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

import { ToDoItem } from "./types";
import { ToDoItemEntryForm } from "./ToDoItemEntryForm";
import { ToDoListDisplay } from "./ToDoListDisplay";
// import { ToDoListDisplay } from "./ToDoListDisplayBad";

export default function ToDoApp() {
  const [todoList, setTodolist] = useState<ToDoItem[]>([]);
  const [minPriority, setMinPriority] = useState("");

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  function handleAdd(newItem: ToDoItem) {
    if (newItem.title === "") {
      return;
    } // ignore blank button presses
    setTodolist(todoList.concat(newItem));
  }

  function handleDelete(targetKey: number) {
    const newList = todoList.filter((item) => item.key != targetKey);
    setTodolist(newList);
  }

  function handleSortTodos() {
    let newList = [...todoList];
    newList = newList.sort(
      (a, b) => parseInt(a.priority) - parseInt(b.priority)
    );
    setTodolist(newList);
  }

  function handleDeleteLowPriorityTodos() {
    // const minPriority = event.target.value;
    // console.log(todoList);
    // console.log(typeof todoList[0]);
    // console.log(minPriority);
    // console.log(typeof minPriority);
    let newList = [...todoList];
    newList = newList.filter(
      (item) => parseInt(item.priority) <= parseInt(minPriority)
    );
    setTodolist(newList);
  }

  return (
    <VStack>
      <Heading>TODO List</Heading>
      <ToDoItemEntryForm onAdd={handleAdd} />
      <ToDoListDisplay items={todoList} onDelete={handleDelete} />
      <Button onClick={handleSortTodos}>Sort Todo Items</Button>
      <NumberInput
        name="minimumPriority"
        value={minPriority}
        placeholder="type priority here"
        onChange={(event) => console.log(event)}
      >
        <NumberInputField
          onChange={(event) => {
            setMinPriority(event.target.value);
            console.log(event.target.value);
          }}
        />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Button onClick={handleDeleteLowPriorityTodos}>
        Delete Low Priority Todos
      </Button>
    </VStack>
  );
}
