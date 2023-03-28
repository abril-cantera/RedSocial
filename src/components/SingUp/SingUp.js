import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './SingUp.css'

export function SingUp() {
  const [user, setUser] = useState([])
  const url = "http://18.118.149.101:3000/red/user"

  const fetchApiGroup = async () => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        user,
        nameUser,
        lastName,
        email,
        password
      }),
    })
    const data = await response.json()
    setUser(data)
  }

  useEffect(() => {
    fetchApiGroup()
  }, [])

  function veryData() {

  }
  return (
    <div>
      <h1>SingUp</h1>

      <section>
        <section className='registro'>
          <input placeholder='Usuario' />
          <input placeholder='Nombre' />
          <input placeholder='Apellido' />
          <input placeholder='Email' />
          <input placeholder='password' />

          <button type="submit" onClick={veryData}>Registrarse</button>
        </section>
      </section>
    </div>
  );
}

