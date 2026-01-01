import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div className="min-h-[150px] w-[220px] rounded flex flex-col justify-center items-center gap-2 bg-blue-500 mx-auto p-3 mt-10">
      <h2 className="text-white font-semibold">This is the counter:</h2>
      <p className="text-white text-xl">{count}</p>
      <button
        className="text-white border border-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={increment}>
        Click to increment
      </button>
    </div>
  )
}

export default App
