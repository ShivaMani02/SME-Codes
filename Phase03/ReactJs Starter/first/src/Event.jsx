import React, { useState } from 'react'

export const Event = () => {
    const [text, setText] = useState(" ")
    function Visualise(event){
        console.log(event);
        console.log(event.target);
        confirm("Hi");
    }

    function enteredValue (event){
        console.log(event.target.value);
        setText(event.target.value)
        
        console.log(event)
    }
  return (
    <>
    <button onClick={Visualise}>
        Clicked
    </button>

    <br></br>
    {text}
     <br></br>
    <input type='text' name='text' placeholder='text' onChange={enteredValue}/>
    </>
  )
}
