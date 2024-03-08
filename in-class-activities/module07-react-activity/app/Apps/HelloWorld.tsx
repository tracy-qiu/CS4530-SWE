import * as React from 'react';
import {
  Box, Heading,
  VStack
} from '@chakra-ui/react';

function HelloWorldComponent() {
    return (
        <VStack>
            <Heading>Hello World</Heading>
        </VStack>
  )
}

export default function App() {
    return (<HelloWorldComponent />)
}