// illustrates 'key' attribute
import * as React from 'react';
import {
    Table, Th, Tbody, Tr,
} from '@chakra-ui/react';

import { ToDoItem } from './types'
import { ToDoItemDisplay } from './ToDoItemDisplay'

export function ToDoListDisplay(props: { items: ToDoItem[] , onDelete:(id:string) => void }) {
  return (
    <Table>      
      <Tbody>
      <Tr>
        <Th>Title</Th>
        <Th>Age</Th>
        <Th>Delete</Th>
      </Tr>
        {
          props.items.map((eachItem) => 
              <ToDoItemDisplay item={eachItem} key={eachItem.id} onDelete={props.onDelete} />)
        }
      </Tbody>
    </Table>
  )
}




