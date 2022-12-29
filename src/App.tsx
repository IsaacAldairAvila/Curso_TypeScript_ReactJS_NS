import React, { useEffect } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import User, { UserFormState } from './form/User';
import { useState } from 'react';

type Users = UserFormState & { id: number}
function App() {
  const [users, setUsers] = useState<Users[]>([])

  async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data: Users[] = await response.json()
    setUsers(data)
  }

  useEffect(()=> {
    fetchUsers()
  }, [])
  return (
    <div className="App">
      <ul>
        {
          users.map(user => <li key={user.id}> {user.name} </li>)
        }
      </ul>
      <User handleSubmit={(user) => { setUsers([...users, {...user, id: Date.now()}])}} />
    </div>
  );
}

export default App;
