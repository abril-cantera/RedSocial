import React from 'react';
import './SingUp.css'

export function SingUp() {
  return (
    <>
      <h1>SingUp</h1>

      <section className='registro'>
        <input placeholder='Usuario' />
        <input placeholder='Nombre' />
        <input placeholder='Apellido' />
        <input placeholder='Email' />
        <input placeholder='password' />

        <button type="submit">Registrarse</button>
      </section>
    </>
  );
}

