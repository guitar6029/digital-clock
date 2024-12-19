import { useState } from 'react'
import DigitalClock from './components/DigitalClock'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <DigitalClock />
    </>
  )
}

export default App
