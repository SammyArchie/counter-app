import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterClass from './components/CounterClass'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <CounterClass/>
        
    </div>
  )
}

export default App
