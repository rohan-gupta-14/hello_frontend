import { useState, useEffect } from 'react'

function App() {
  const [message, setMessage] = useState()

  useEffect(() => {
    fetch('http://localhost:3001/api/hello')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(() => setMessage('Failed to connect to backend'))
  }, [])

  return (
    <div>
      <h1>Hii, Rohan this side :)</h1>
      <p>{message}</p>
    </div>
  )
}

export default App