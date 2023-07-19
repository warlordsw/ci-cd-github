import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const CountHandlerIncrease = () => {
    setCount(count + 1)
  }

  const CountHandlerDecrease = () => {
    setCount(count - 1)
  }

  return (
    <>
      <div>
        <p>{count}</p>
        <button onClick={CountHandlerDecrease}>Decrease</button>
        <button onClick={CountHandlerIncrease}>Increase</button>
      </div>
    </>
  )
}

export default App
