import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  const [counter,setCounter] = useState(0)  

  const addVal = () => {
    console.log("value added",counter)
    setCounter(prevCounter + 1);
    setCounter(prevCounter + 1);
    setCounter(prevCounter + 1);
    setCounter(prevCounter + 1);
  }
  const removeVal = () => {
    console.log("Value Dismissed",counter);
    if (counter > 0) {
      setCounter(prevCounter - 1);
      setCounter(prevCounter - 1);
    }
  }
  return (
    <>
      <h1>Counter App</h1>
      <h3>Chai aur React By Hitesh Chaudhary</h3>
      <p>Counter {counter}</p>
      <button onClick={addVal} >Add a Value</button>
      <br/>
      <br/>
      <button onClick={removeVal}>Remove Value</button>
    </>
  )
}

export default App
