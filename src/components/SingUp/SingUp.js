import React from 'react';
import { useState } from "react";
import './SingUp.css'

export function SingUp() {
  const [user, setUser] = useState([{
    user: '',
    nameUser: '',
    lastName: '',
    email: '',
    password: ''
  }])

  // const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = 'http://18.118.149.101:3000/red/user'
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    })
    const data = await response.json()
    console.log(data);
    setUser(data)
    // if (data.length > 0) {
    //   setError('El email ya ha sido registrado');
    //   console.log(error);
    //   console.log(data[0].user);
    // } else {
    //   console.log(user);
    //   console.log(data);
    //   setUser(data)
    // }
  }
  // const handleChange = (e) => {
  //   setUser({ ...user, [e.target.name]: e.target.value })
  // }

  return (
    <div>
      <h1>SingUp</h1>

      <section>
        <form onSubmit={handleSubmit} className='registro'>
          <input
            name='usuario'
            placeholder='Usuario'
            value={user.user}
          // onChange={handleChange}
          />
          <input placeholder='Nombre' type='text' />
          <input placeholder='Apellido' type='text' />
          <input placeholder='Email' type='email' />
          <input placeholder='password' type='password' />

          <button type="submit" >Registrarse</button>
        </form>
      </section>
    </div>
  );
}

