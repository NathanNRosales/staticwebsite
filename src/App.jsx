import { useState } from 'react'
import compscience from './assets/compscience.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
        
      </div>
      <h1>Nathan R Internet Programming</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      <div className="img">
      <img src={compscience} alt="how it feels sometimes being a computer science student" />
      </div>
      <p className="read-the-docs">
        Hope you are having a great day!
      </p>
    </>
  )
}

export default App
