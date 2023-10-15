import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  Heading, Table, Th, Tbody, Tr,
  Td,
  VStack, 
} from '@chakra-ui/react';

type ClockDisplayData = {key:number, name:string, noisyDelete?:boolean}

import { ClockDisplay } from './SimpleClockDisplay'

function makeClockDisplayData(key:number) { 
    return {key:key, name:'clock ' + key, noisyDelete: true}
}

export default function App () {
    const [clockDisplays, setClockDisplays] = useState<ClockDisplayData[]>([])
    const [nextKey, setNextKey] = useState(1)          

    function handleAdd() {
        const newDisplay = makeClockDisplayData(nextKey)
        setClockDisplays(clockDisplays.concat(newDisplay))
        setNextKey(nextKey+1)
    }

    function handleDelete(targetKey:number) {
        const newList = clockDisplays.filter(item => item.key != targetKey)
        setClockDisplays(newList)
    }   

    // add a clock display for the first render
    useEffect(() => {handleAdd()}, [])

    function displayOneClock(clockDisplayData:ClockDisplayData) {
        const key = clockDisplayData.key
        const name = clockDisplayData.name
        const noisyDelete = clockDisplayData.noisyDelete
        return (
            <Tr key={key}>
                <Td>
                    <ClockDisplay name={name} key={key} 
                        handleDelete={() => handleDelete(key)} 
                        handleAdd={handleAdd}
                        noisyDelete={noisyDelete}
                    />
                </Td>
            </Tr>
        )
    }

    return (
        <VStack>
            <Heading>Array of Clock Displays</Heading>
            <Table>
                <Tbody>
                    {clockDisplays.map((clockDisplayData) => displayOneClock(clockDisplayData))}
                </Tbody>
            </Table>
        </VStack>
    )
}