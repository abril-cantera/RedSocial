import React, { useState } from "react";
import { Navigate } from 'react-router-dom'
import { useAuth } from "../Auth/auth";

export function LoginPage() {
  const auth = useAuth()
  const [username, setUsername] = useState('')

  const [info, setInfo] = useState([])

  const url = 'http://18.191.55.134:3000/red/user'
  async function getData(e) {
    e.preventDefault()
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      }
    });
    const data = await response.json()
    console.log(data);
    setInfo(info)
    const verifyUser = data.some((item) => item.user === username)

    switch (true) {
      case verifyUser === true:
        auth.login({ username });
        break;
      case verifyUser === false:
        console.log('Usuario no registrado');
        break;

      default:
        break;
    }
  }




  if (auth.user) {
    return <Navigate to='/profile' />
  }

  return (
    <>
      <h1>Login</h1>

      <form onSubmit={getData}>
        <input placeholder="Usuario" value={username} onChange={e => setUsername(e.target.value)} />

        <button type="submit">Entrar</button>
      </form>
    </>
  )
}