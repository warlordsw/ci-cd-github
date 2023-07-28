import { useState } from 'react'
import './App.css'

function App({ initial = 0 }) {
  const [count, setCount] = useState(initial)

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
      <div id='testCountDivContainer'>
        <p name='reset'>{count}</p>
        <button id='decrement' onClick={CountHandlerDecrease}>
          Decrease
        </button>
        <button onClick={CountHandlerReset}>Reset</button>
        <button id='increment' onClick={CountHandlerIncrease}>
          Increase
        </button>
      </div>
    </>
  )
}

export default App
