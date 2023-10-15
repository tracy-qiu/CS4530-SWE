import * as React from 'react';
import { useState, useEffect } from 'react';
import {
    Heading,
    Button,
    VStack,
    Text
} from '@chakra-ui/react';

// import { useFirstRender } from '../Hooks/useFirstRender'

export default function App() {
    const [n, setN] = useState(0)
    const [m, setM] = useState(0)

    // runs only on first render.
    useEffect(() => {
        console.log('useEffect #1 is run only on first render')
    }, [])

    // illustration of useFirstRender
    // useFirstRender(() => {
    //     console.log('useFirstRender #1 is run only on first render')
    // })

    useEffect(() => {
        console.log('useEffect #2N is run only when n changes')
    }, [n])

    useEffect(() => {
        console.log('useEffect #2M is run when m changes')
    }, [m])

    // runs on every render
    useEffect(() => {
        console.log('useEffect #3A is called on every render')
    })

    // runs on every render
    useEffect(() => {
        console.log('useEffect #3B is called on every render')
    })
  
    // runs on every render
    useEffect(() => {
        console.log('useEffect #3C is called on every render')
    })

    // observe that effects run in order of definition

    
    return (
        <VStack>
            <Heading>useEffect demo #1</Heading>
            <Text> n is {n} </Text>
            <Button onClick={() => setN((n) => n + 1)}>Increment n</Button>
            <Text> m is {m} </Text>
            <Button onClick={() => setM(m + 1)}>Increment m</Button>
        </VStack>
    )

    // note: writing setN(n+1) is a bug, 
    // because n is not guaranteed to be the current value.
    

     
}
