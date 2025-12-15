// Primitive Alliases 

//Status is the  UI feedback fr the async or delayed actions 
export type Status =  "idle"|"Changes saved!"| "Saving..."
// Step contols the count increases or decreaces by
export type Step = number 
// History stores an array of past counts 
export type History = number []
// ciunt is the currrent value that will be shown 
export type Count = number 
// What needs to be on the counter?

// core counter State
// This is what lives in the parent code
export interface  Counter {
    count:Count  // current count value 
    history:History // list of previous count values 
    status: Status // ui Status message 
}
// What needs to be on the counter display ? 
// props for a component that only displays the count!
export interface CountDispayProps{
count:number
}
export interface CounterProps{
    count:Count
}
//  props for the step input field
// onchange = calls back to update the step in the parent 
export interface StepInputProps{
   step: Step
    onChangeStep: (e: React.ChangeEvent<HTMLInputElement>) => void
}
// //props for the buttons that modify the counter 
// the parent owns state - this component just triggers actions 
export interface CounterControlProps {
    onIncrement: ()=>void
    onDecrement: ()=>void
    onReset: ()=> void
   
}
// this component should map over history and display it 
// prop for rendering the list
export interface HistoryListProps{
    history:History
    
}
