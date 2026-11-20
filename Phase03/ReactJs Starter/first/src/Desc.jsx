import React from 'react'

const Desc = ({clicker, Children}) => {
    if(true){
        clicker();
    }
  return (
    <>
    {Children}
    <div>Desc</div>
    </>
  )
}

export default Desc