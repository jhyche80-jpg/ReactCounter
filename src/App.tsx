import './App.css'
import CounterControls from './components/CounterControls/CounterControls'
import CounterDisplay from './components/CounterDisplay/CounterDisplay'
import React, {  useEffect, useState } from 'react'
import { Count, Status, Step } from './components/types'
import StepInput from './components/StepCount/StepInput'
import CounterHistory from './components/History/CounterHistory'
function App() {
  const [count,setCount]= useState<Count>(0)
  const [stepp, setStepp] = useState<Step>(1)
  const [history,setHistory]= useState<Count[]>([])
  const [message,setMessage]= useState<Status>("idle")
  const [load,setLoad]= useState<"Loading"|"Page Loaded!"|"">("")


  useEffect(()=>{
    const saveCount =  ()=>{
     setMessage("Saving...")

     setTimeout(() => {
      setMessage("Changes saved!")
      setTimeout(() => setMessage("idle"), 2000);
     }, 1000);
     
    }
    saveCount()

  },[count])



  const handleIncrement = () =>{
  setCount(prevCount =>prevCount + stepp)
  setHistory(prevHistory=>[...prevHistory,count])
  
  
 }
 const handleDecrement = ()=>{
  setCount(prevCount => prevCount-stepp)
  setHistory(prev=>[...prev,count])
  if(count===0){
    setCount(0)
  }
 }
 const handleReset = ()=> {
  setCount(0)
  setHistory([])
  localStorage.clear()
  
 }
 const handleCHangeStep= (e)=> {
  setStepp(parseInt(e.target.value))
 }
  return (
    <>
    <h2>Current Count:</h2>
    <CounterDisplay count={count}/>
    <StepInput step={stepp} onChangeStep={handleCHangeStep}/>
    <CounterControls 
    onIncrement={handleIncrement}
    onDecrement={handleDecrement}
    onReset={handleReset}/>
    <p>{message}</p>
    <CounterHistory history={history} />
    </>

  )
}

export default App
