import { useState } from 'react'
import './App.css'
import Dashboard from './modules/Dashboard/Layout/DashboardRoot'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Dashboard />
    </>
  )
}

export default App
