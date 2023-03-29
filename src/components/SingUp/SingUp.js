import React from 'react';
import { useState } from "react";
import './SingUp.css'

export function SingUp() {
  const [users, setUsers] = useState([{
    user: '',
    email: '',
  }])

  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = 'http://18.218.88.225:3000/red/user'
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    })
    const data = await response.json()
    console.log(data[0].email);
    setUsers(data)

    // data.map((item, i) => {
    //   if (item[i].user == e.target.value) {
    //     console.log('No');
    //   } else {
    //     console.log(item, 'map');
    //   }
    // })

    if (data.length > 0) {
      setError(error, 'El email ya ha sido registrado');
      console.log(data[0].user);
    } else {
      console.log('else');
      console.log(data);
      setUsers(data)
    }
  }
  const handleChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value })
    console.log(e.target.value);
  }

  return (
    <div>
      <h1>SingUp</h1>

      <section>
        <form onSubmit={handleSubmit} className='registro'>
          <input
            name='usuario'
            placeholder='Usuario'
            value={users.user}
            onChange={handleChange}
          />
          <input
            placeholder='Nombre'
            type='text'
          />
          <input
            placeholder='Apellido'
            type='text'
          />
          <input
            name='correo'
            placeholder='Email'
            type='email'
            value={users.email}
            onChange={handleChange}
          />
          <input
            placeholder='password'
            type='password'
          />

          <button type="submit" >Registrarse</button>
        </form>
      </section>
    </div>
  );
}

