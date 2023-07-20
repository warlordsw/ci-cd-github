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

  const CountHandlerReset = () => {
    setCount(0)
  }

  return (
    <>
      <div>
        <p name='reset'>{count}</p>
        <button name='' onClick={CountHandlerDecrease}>
          Decrease
        </button>
        <button onClick={CountHandlerReset}>Reset</button>
        <button onClick={CountHandlerIncrease}>Increase</button>
      </div>
    </>
  )
}

export default App
