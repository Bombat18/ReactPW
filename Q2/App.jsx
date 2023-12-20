import { useState } from 'react'
import Button from './Button'

const App = () => {
 const handleClick=()=>{
   alert("Button Clicked")
 }
  return (
    <div>
      <Button text="Click me" onClick={handleClick} />
    </div>
  );
}; 

export default App
