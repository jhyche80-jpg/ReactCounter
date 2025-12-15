//gets count
 import React from 'react'
import { CountDispayProps } from '../types'
 
 export default function CounterDisplay({count}:CountDispayProps) {
   return (
     <div>
       <p>{count}</p>

     </div>
   )
 }
 