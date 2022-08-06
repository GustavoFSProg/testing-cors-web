import { useState, useEffect } from 'react'
import './App.css'
import api from './api'

function App() {
  const [users, setUsers] = useState([])
  
  async function getall() {
    const { data } = await api.get('/get')
    
    setUsers(data)
  }

  useEffect(() => {
    getall()
  }, [])

  return (
    <div className="App">
      {users.map(item => {
        return (
          <>
          <ul>
            <li>
            Nome: {item.name}
            </li>
            <br />
            <br />
            <li>
              Email: {item.email}
            </li>
          </ul>
            <br />
            <br />
            <br />
          </>
        )
      })}
    </div>
  )
}

export default App
