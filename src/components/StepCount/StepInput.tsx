//gets step + setter
import React from 'react'
import { StepInputProps } from '../types'

export default function StepInput({step,onChangeStep}:StepInputProps) {
  return (
    <div>
      <input 
      type="number"
      min={1}
       value={step} 
       onChange={onChangeStep}/>
    </div>
  )
}
