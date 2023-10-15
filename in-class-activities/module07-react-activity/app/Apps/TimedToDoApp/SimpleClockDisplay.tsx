import * as React from 'react';
import { useState,useEffect} from 'react';
import {
  Box,
  Button,
  Heading, HStack,
  VStack, IconButton,
} from '@chakra-ui/react';
import { AiFillDelete, AiFillHeart, AiOutlineDelete, AiOutlineHeart,  AiCloseIcon, AiAddIcon, AiFillPlusCircle } from 'react-icons/ai';
import SingletonClockFactory from '../Classes/ClockWithListeners';

export function ClockDisplay (props: {name: string, key: number,
    handleDelete: () => void, handleAdd: () => void, noisyDelete:boolean,
    
}) {
    const [localTime, setLocalTime] = useState(0)
    const incrementLocalTime = () => setLocalTime(localTime => localTime + 1)
    const clock = SingletonClockFactory.instance(1000)  // all the displays will share the same clock
    
    useEffect(() => {
        const listener1 = () => { incrementLocalTime() }
        clock.addListener(listener1)
        return () => {
            if (props.noisyDelete) { console.log('ClockDisplay', props.name, 'unmounting') };
            clock.removeListener(listener1)
        }
    }, [])
  
  return (
      <HStack>
          <Box>Clock: {props.name}</Box>
          <Box>Time = {localTime}</Box>
          <Box>nlisteners = {clock.nListeners}</Box>
          <IconButton aria-label={'delete'} onClick={props.handleDelete} icon={<AiOutlineDelete />} />
          <IconButton aria-label={'add'} onClick={props.handleAdd} icon={<AiFillPlusCircle />} />
     </HStack>
  )

}
