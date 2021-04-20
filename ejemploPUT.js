async function actualizarTienda() {
  var urlParams = new URLSearchParams(window.location.search);
  
  var idAGuardar = urlParams.get('id');
  var nombreAGuardar = document.querySelector("#nombre").value;
  var ubicacionAGuardar = document.querySelector("#ubicacion").value;

  var objetoAGuardar = {
    "id": +idAGuardar,
    "nombre": nombreAGuardar,
    "ubicacion": ubicacionAGuardar
  }
  var valoresAGuardar = JSON.stringify(objetoAGuardar);

  var encabezado = {
    'Content-Type': 'application/json'
  }

  var opciones = {
    method: 'PUT',
    headers: encabezado,
    body: valoresAGuardar
  };
  
  await fetch("http://localhost:5000/tiendas", opciones)
    .then(response => response.text())
    .then(result => {
        alert(result);
        ejecutandoGet();
      })
    .catch(error => console.log('error', error));
  }