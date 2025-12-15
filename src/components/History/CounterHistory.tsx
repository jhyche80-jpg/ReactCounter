// gets history
import React from 'react'
import { HistoryListProps } from '../types'
import CounterDisplay from '../CounterDisplay/CounterDisplay'
import "./CounterHistory.css"

export default function CounterHistory({ history }: HistoryListProps) {

  return (
    <div >

      <h1>Count history:</h1>
      <div
        id='List'>

        {
          [...history].reverse().map((value, index) => (


            <CounterDisplay key={index} count={value} />


          ))

        }

      </div>
    </div>
  )
}
