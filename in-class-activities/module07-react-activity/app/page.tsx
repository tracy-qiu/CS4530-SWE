"use client"; // tell next.js to render this in the browser; Chakra only works in the browser

import { useState } from "react";
import { ChakraProvider, Text, Box, VStack } from "@chakra-ui/react";

// import App from './Apps/HelloWorld'
// import App from './Apps/HelloWorldDave'
// import App from './Apps/HelloWorldAveryAndDave'
// import App from './Apps/SimplestState';   // simple state
// import App from './Apps/SimplestStateWithConsole';   // simple state, but with console.log
// import App from './Apps/TwoCountingButtons';   // passing props down, passing events up,
import App from "./Apps/ToDoApp";
// import App from './Apps/SimpleClockDisplayApp'
//import App from './Apps/useEffect-demo'
// import App from './Apps/SimpleClockDisplayApp'
// import App from './Apps/ArrayOfClocksApp'
// import App from './App2';      // simple props
// import App from './App3';    // propagate props down, events up
// import App from './App4';       // introduces useEffect
// import App from './App5';       // pattern for input forms
// import App from './TodoAppFromJon'    // Jon's todo app
// import App from './App7-toDoApp2/ToDoApp'   // todo app (this is the right one)
// import App from './App8-useEffect'   // useEffect
// import App from './App10-useEffect-cleanup2'   // useEffect with cleanup

export default function HomePage() {
  return (
    <ChakraProvider>
      <App />
    </ChakraProvider>
  );
}
