import React from 'react';
import { useState } from "react";
import './SingUp.css'

export function SingUp() {
  const [users, setUsers] = useState([])

  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')

  let newArrayUsers = []
  let newArrayEmails = []

  const exito = 'Registrado con exito'

  const getDataa = async (data) => {
    const url = 'http://18.218.88.225:3000/red/user'
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    data = await response.json()
    console.log(data);
    //
  }

  const getData = async (event) => {
    event.preventDefault();
    setUser(event.target.usuario.value)
    setEmail(event.target.correo.value)

    const url = 'http://18.218.88.225:3000/red/user'
    const response = await fetch(url)
    const data = await response.json()
    getDataa()

    data.forEach((element) => {
      const arrayElement = Object.values(element)
      newArrayUsers.push(arrayElement[1])
      newArrayEmails.push(arrayElement[2])
    });

    switch (true) {
      case newArrayUsers.includes(user):
        console.log('El usuario ya existe');
      case newArrayEmails.includes(email):
        console.log('El email ya existe');
        break;
      default:
        console.log(exito);
        break;
    }
    setUsers(users)
  }


  // const handleSubmit = async () => {

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

  return (
    <div>
      <h1>SingUp</h1>
      <section>
        <form onSubmit={getData} className='registro'>
          <label>
            User:
            <input
              name='usuario'
              placeholder='Usuario'
              type='text'
            // onChange={(e) => setUser(e.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              name='correo'
              placeholder='Email'
              type='email'
            // onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <button type="submit" >Registrarse</button>
        </form>
      </section>
    </div>

  );
}

