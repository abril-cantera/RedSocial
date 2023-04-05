
export const cargarImage = async (imagen) => {
  const url = 'http://18.191.55.134:3000/red/user'
  try {
    // Convertir imagen en formato Blob
    const imagenBlob = new Blob([imagen], { type: 'image/jpeg' });

    // Convertir imagen Blob en una cadena base64
    const imagenCodificada = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(imagenBlob);
    });
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        imagen: imagenCodificada
      }
    });
    const data = await response.json()
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}