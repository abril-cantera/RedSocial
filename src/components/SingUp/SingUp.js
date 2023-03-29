import React from 'react';
import { useState } from "react";
import './SingUp.css'

export function SingUp() {
  const [users, setUsers] = useState([])

  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')

  const getData = async () => {

    const url = 'http://18.218.88.225:3000/red/user'
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    console.log(data);
    setUsers(users)


  }
  getData()

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   // setUsuario(event.target.usuario.value)
  //   // setCorreo(event.target.correo.value)

  //   const url = 'http://18.218.88.225:3000/red/user'
  //   const response = await fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       'user': user,
  //       'email': email
  //     })
  //   })
  //   const data = await response.json()
  //   console.log(data);
  //   setUsers(users)

  // }
  const postData = async () => {
    const url = 'http://18.218.88.225:3000/red/user'
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()

    data.map((item) => {
      // const itemsArray = Object.values(item)
      // console.log(itemsArray);
      console.log(item);
      console.log(user);
      console.log(email);

    })
  }

  return (
    <div>
      <h1>SingUp</h1>
      <section>
        <form onSubmit={postData} className='registro'>
          <label>
            User:
            <input
              name='usuario'
              placeholder='Usuario'
              type='text'
              onChange={(e) => setUser(e.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              name='correo'
              placeholder='Email'
              type='email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <button type="submit" >Registrarse</button>
        </form>
      </section>
    </div>

  );
}

// e => {
// e.preventDefault()
// setUsuario(e.target.usuario.value)
// setCorreo(e.target.correo.value)
// console.log(usuario);
// console.log(correo);
//         }