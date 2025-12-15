# React Counter with useEffect

## Table of Contents
1. [Overview](#overview)  
   1. [Features](#features)  
   2. [Usage](#usage)  
2. [Problem](#problem)  
   1. [Goal Breakdown](#goal-breakdown)  
   2. [Questions and Answers](#questions-and-answers)  
   3. [Input](#input)  
   4. [Output](#output)  
   5. [Step by Step Plan](#step-by-step-plan)  
3. [Build Steps](#build-steps)  
4. [Troubleshooting](#troubleshooting)  
   1. [Problems](#problems)  
   2. [Solutions](#solutions)  
5. [Reflection](#reflection)  
6. [References](#references)  
   1. [Programs Used](#programs-used)  
   2. [Websites Used](#websites-used)  

---

## Overview
You have been tasked to build an advanced counter application. This project will challenge you to go beyond simple state updates by requiring you to manage multiple state dependencies, implement side effects using the useEffect hook (including proper cleanup), and handle more complex state update logic. The goal is to solidify your understanding of useState and useEffect in a practical context, focusing on how they work together to create interactive and responsive components.


### Features
1. Implement and manage multiple pieces of state within a single component using useState.
2. Utilize the useEffect hook to perform side effects in response to state changes.
3. Implement proper cleanup functions within useEffect to prevent memory leaks or unexpected behavior.
4. Write state update logic that correctly handles dependencies and previous state.
5. Apply your knowledge to build a feature-rich counter with history tracking, auto-save, keyboard interactions, and a reset mechanism.
### Usage
- Core Counter Functionality:
     -  Display Current Count: Show the current count, initialized to 0.
     -  Increment Button: A button to increase the count by 1.
     -  Decrement Button: A button to decrease the count by 1.

---

## Problem
 Build a React application that features an advanced counter. 

### Goal Breakdown
- React Counter ()
      →History tracker 
      →Auto-save Functionality 
      →Keyboard Event Listeners 
      → Reset
      → Step Input 

 



### Questions and Answers
1. (css question) How can I keep a box static while also adding things to it? 


### Input
-  Button (increment)
- Button (decrement)
-  Reset 
- Up and down Arrows 


### Output
- current count , count history 
---

## Step by Step Plan
 - Make simple React counter 
 - create a types 
 - Add the increment 
 - Add decrement 
 - Add step value input 
 - Code event for step value 
 - Make the count history 
 - Make local storage saving the history and the count

---

## Build Steps
1. I started by making the index.ts 
   - this gave me the types and interfaces I needed to have in my code
2. 
---

## Troubleshooting

Use a simple troubleshooting mindset.

Ask yourself:  
- What should happen right now  
- What is actually happening  
- Test one assumption at a time  

### Problems
List specific problems you faced.

1.  
2.  
3.  

### Solutions
Explain how you solved each problem.

1.  
2.  
3.  

---

## Reflection
Reflect on what you learned, what worked well, and what you would do differently.  
Include lessons about problem solving and debugging.

---

## References

### Programs Used
- TypeScript 
- Css 
- React   

### Websites Used
- https://ps-lms.vercel.app/curriculum/se/416/lab-1