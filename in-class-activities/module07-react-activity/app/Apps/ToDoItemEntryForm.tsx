import * as React from "react";
import { useState, useEffect } from "react";
import {
  Button,
  Box,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Text,
  VStack,
  Tr,
  Td,
  Table,
  Tbody,
  TableContainer,
  HStack,
} from "@chakra-ui/react";
import {
  AiFillDelete,
  AiFillHeart,
  AiOutlineDelete,
  AiOutlineHeart,
} from "react-icons/ai";
import { nanoid } from "nanoid";

import { ToDoItem } from "./types";

export function ToDoItemEntryForm(props: { onAdd: (item: ToDoItem) => void }) {
  // state variables for this form
  const [title, setTitle] = useState<string>("");
  const [priority, setPriority] = useState("");
  const [key, setKey] = useState(1); // key is assigned when the item is created.

  function handleClick(event) {
    event.preventDefault(); // magic, sorry.

    const newItem: ToDoItem = { title: title, priority: priority, key: key };
    console.log("adding:", newItem);
    props.onAdd(newItem); // tell the parent about the new item
    setTitle(""); // resetting the values redisplays the placeholder
    setPriority("");
    setKey((key) => key + 1); // generate a new key for the next item
  }

  return (
    <VStack spacing={0} align="left">
      <form>
        <FormControl>
          <VStack align="left" spacing={0}>
            <FormLabel as="b">Add TODO item here:</FormLabel>
            <HStack w="200" align="left">
              <Input
                name="title"
                value={title}
                placeholder="type item name here"
                onChange={(event) => {
                  setTitle(event.target.value);
                  console.log("setting Title to:", event.target.value);
                }}
              />
              <NumberInput
                name="priority"
                value={priority}
                placeholder="type priority here"
                onChange={(event) => console.log(event)}
              >
                <NumberInputField
                  onChange={(event) => setPriority(event.target.value)}
                />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Box>
                <Button
                  bg="lightblue"
                  type="submit"
                  onClick={handleClick}
                  width={200}
                >
                  {" "}
                  Add TODO item
                </Button>
              </Box>
            </HStack>
          </VStack>
        </FormControl>
      </form>
    </VStack>
  );
}

//<Box h='4'></Box>
