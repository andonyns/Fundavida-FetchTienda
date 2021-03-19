async function ejecutarPost() {

  var nombreAGuardar = document.querySelector("#nombre").value;
  var ubicacionAGuardar = document.querySelector("#ubicacion").value;

  var objetoAGuardar = {
    "nombre": nombreAGuardar,
    "ubicacion": ubicacionAGuardar
  }
  var valoresAGuardar = JSON.stringify(objetoAGuardar);

  var encabezado = {
    'Content-Type': 'application/json'
  }

  var opciones = {
    method: 'POST',
    headers: encabezado,
    body: valoresAGuardar
  };

  await fetch("http://localhost:5000/tiendas", opciones)
    .then(response => response.text())
    .then(result => {
      alert(result)
    })
    .catch(error => {
      alert('Ocurrió un error: '+ error);
    });
      
  }