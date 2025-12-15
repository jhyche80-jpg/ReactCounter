//gets step + count setter

import React from 'react'
import { CounterControlProps } from '../types'

export default function CounterControls({ onIncrement,onDecrement,onReset,}:CounterControlProps) {
  return (
    <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
        <button onClick={onReset}>Reset</button>
      
    </div>
  )
}
