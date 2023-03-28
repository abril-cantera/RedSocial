import React, { useState } from "react";
import { Navigate } from 'react-router-dom'
import { useAuth } from "../Auth/auth";

export function LoginPage() {
  const auth = useAuth()
  const [username, setUsername] = useState('')

  const login = (e) => {
    e.preventDefault()
    auth.login({ username });
  }

  if (auth.user) {
    return <Navigate to='/profile' />
  }

  return (
    <>
      <h1>Login</h1>

      <form onSubmit={login}>
        <input value={username} onChange={e => setUsername(e.target.value)} />
        <input placeholder='Password' />

        <button type="submit">Entrar</button>
      </form>
    </>
  )
}