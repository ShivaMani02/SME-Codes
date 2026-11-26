import React from 'react';
import { useState } from 'react';

export const Conditionals = () => {
    const [isVisible, setIsVisible] = useState(true);
    const students = [
        {id:1, name:"Shivansh"},
        {id:2, name:"Atul"},
        {id:3, name:"Raj"}
    ];
  return (
    <>
    <button onClick={() => setIsVisible(!isVisible)}> Toggle </button>
    {
        isVisible ? <h1> Dark </h1> : <h1> Light</h1>
    }
    { isVisible && <h1>Dark</h1>}
    {students.map((t)=>{console.log(t.name)})}
    
    </>
  )
}
