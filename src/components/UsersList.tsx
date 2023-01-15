import * as React from 'react'
import '../App.css'

export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
}

const Main = () => {
  const [users, setUsers] = React.useState<User[]>([]);

  React.useEffect(function getUsers() {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(setUsers)
    }, 3000);
  }, []);

  return (
    <div>
      {users.map(_user => (
        <div key={_user.id}>
          <p>{_user.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Main
