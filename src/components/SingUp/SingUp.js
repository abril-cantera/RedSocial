import React from 'react';
import './SingUp.css'

export function SingUp() {

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

          <button type="submit" >Registrarse</button>
        </section>
      </section>
    </div>
  );
}

