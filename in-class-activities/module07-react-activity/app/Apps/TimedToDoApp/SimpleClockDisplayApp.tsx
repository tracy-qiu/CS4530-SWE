import * as React from 'react';
import { useState } from 'react';
import {
  Box,
  Button,
  VStack,
} from '@chakra-ui/react'

import {ClockDisplay} from './SimpleClockDisplay'


export default function App () {


    function makeDisplay(name:string) {
        return <ClockDisplay name={name} onDelete={handleDelete} />
    }
    const displayA = <ClockDisplay name={'Clock A'} onDelete={handleDelete} />
    const [displays, setDisplays] = useState([])
    return (<VStack>
      <ClockDisplay name={'Clock A'} onDelete={() => {}} />
      <ClockDisplay name={'Clock B'} onDelete={() => {}} />
      <ClockDisplay name={'Clock C'} onDelete={() => {}} />
      </VStack>)       
}