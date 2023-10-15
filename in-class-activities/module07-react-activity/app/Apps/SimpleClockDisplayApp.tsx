import * as React from 'react';
import { useState } from 'react';
import {
  Box,
  Button,
  VStack,
} from '@chakra-ui/react'

import { ClockDisplay } from './SimpleClockDisplay'

function doNothing() { }

export default function App() {
  return (<VStack>
    <ClockDisplay name={'Clock A'} handleAdd={doNothing} handleDelete={doNothing}/>
    <ClockDisplay name={'Clock B'} handleAdd={doNothing} handleDelete={doNothing} />
    <ClockDisplay name={'Clock C'} handleAdd={doNothing} handleDelete={doNothing}/>
  </VStack>)
}