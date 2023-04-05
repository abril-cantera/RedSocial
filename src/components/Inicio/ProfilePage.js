import React, { useState } from "react";
import { AuthRoute } from "../Auth/auth";
import { cargarImage } from "./cargarImage";

export function ProfilePage() {
  const [imagen, setImagen] = useState(null);

  const manejarSeleccionImagen = (evento) => {
    setImagen(evento.target.files[0]);
  };

  const manejarEnvioImagen = async () => {
    const resultado = await cargarImage(imagen);
    console.log(resultado);
  };
  return (
    <AuthRoute>
      <div>
        <section>
          <div>
            <input type="file" onChange={manejarSeleccionImagen} />
            <button onClick={manejarEnvioImagen}>Cargar imagen</button>
          </div>
        </section>
        <h2>
          nombre
        </h2>
      </div>
    </AuthRoute>
  )
}