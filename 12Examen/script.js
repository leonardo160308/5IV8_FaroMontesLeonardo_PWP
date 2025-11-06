document.getElementById("buscar").addEventListener("click", () => {
  const raza = document.getElementById("raza").value.toLowerCase().trim();
  const resultado = document.getElementById("resultado");

  if (raza === "") {
    resultado.innerHTML = "<p>Por favor escribe una raza.</p>";
    return;
  }

  const url = `https://dog.ceo/api/breed/${raza}/images/random`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.status === "success") {
        resultado.innerHTML = `<img src="${data.message}" alt="Perro de raza ${raza}">`;
      } else {
        resultado.innerHTML = `<p>No se encontró la raza "${raza}".</p>`;
      }
    })
    .catch(() => {
      resultado.innerHTML = "<p>Error al conectar con la API.</p>";
    });
});
