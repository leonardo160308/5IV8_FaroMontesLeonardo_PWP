/*
Este es un ejemplo del uso de una API REST utilizando una llamada fetch,
la cual permite obtener una imagen aleatoria de un perro según la raza que
el usuario escriba o seleccione. La estructura usa una función de callback
que trabaja con promesas para manejar la respuesta de la API de manera asíncrona.
*/

document.getElementById("buscar").addEventListener("click", () => {
  // Se obtiene el valor del input con id "raza", se convierte a minúsculas y se eliminan los espacios en blanco del inicio y final para evitar errores.
  const raza = document.getElementById("raza").value.toLowerCase().trim();
  // Se obtiene el contenedor donde se mostrará la imagen o los mensajes de respuesta
  const resultado = document.getElementById("resultado");
  // Se valida si el usuario no escribio nada para indicarle con un mensaje
  if (raza === "") {
    resultado.innerHTML = "<p>Por favor escribe una raza.</p>";
    return;
  }

  const url = `https://dog.ceo/api/breed/${raza}/images/random`;
// se llama a la api
  fetch(url)
  // se devuelvee una imagen aleatoria del perro seleccionado
    .then(res => res.json())
    // se revisa si la API respondido de manera correcta
    .then(data => {
      if (data.status === "success") {
        //si es correcto se muestra la imagen del perro
        resultado.innerHTML = `<img src="${data.message}" alt="Perro de raza ${raza}">`;
      } else {
        resultado.innerHTML = `<p>No se encontró la raza "${raza}".</p>`;
      }
    })
    //muestra si hay algun error al conectar con la API
    .catch(() => {
      resultado.innerHTML = "<p>Error al conectar con la API.</p>";
    });
});
