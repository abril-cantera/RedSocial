import React from 'react';
import { useState } from "react";
import './SingUp.css'

export function SingUp() {
  const [info, setInfo] = useState([])

  const [name, setName] = useState('')
  const [correo, setCorreo] = useState('')

  const url = 'http://18.218.206.49:3000/red/user'

  async function getData(evento) {
    evento.preventDefault();
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      }
    });
    const data = await response.json()
    data.map(item => {
      switch (true) {
        case name === item.user:
          console.log('User Repetido')
        case correo === item.email:
          console.log('Email Repetido');
          break;

        default:
          console.log('Error');
          break;
      }
    })
    // data.map((item) => {

    // if (item.user === name) {
    //   console.log('Repetido')
    // } else if (item.email === correo) {
    //   console.log('Repetido');
    // }

    // })
    setInfo(info)
  }

  // const manejarEnvio = async () => {

  //   const response = await fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       'user': name,
  //       'email': correo
  //     })
  //   })
  //   const data = await response.json()
  //   console.log(data);
  // };

  return (
    <div>
      <h1>SingUp</h1>
      <section>
        <form onSubmit={getData} className='registro'>
          <label>
            User:
            <input
              type='text'
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </label>
          <label>
            Email:
            <input
              type='email'
              value={correo}
              onChange={(event) => {
                setCorreo(event.target.value);
              }}
            />
          </label>
          <button type="submit" >Registrarse</button>
        </form>
      </section>
    </div>

  );
}







// const handleSubmit = async () => {

//   const url = 'http://18.218.206.49:3000/red/user'
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