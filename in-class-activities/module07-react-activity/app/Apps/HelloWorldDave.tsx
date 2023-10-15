import * as React from 'react';
import {
  Heading, VStack
} from '@chakra-ui/react';

function HelloWorldWithName(props: {name: string}) {
    return (
        <VStack>
            <Heading>Hello, {props.name}!</Heading>
        </VStack>
  )
}

export default function App() {
    return (<HelloWorldWithName name='Dave'/>)
}