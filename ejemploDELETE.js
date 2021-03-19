async function borrarTienda(nuevoId) {

var opciones = {
  method: 'DELETE',
};

await fetch("https://localhost:5001/tiendas?id=" + nuevoId, opciones)
  .then(response => response.text())
  .then(result => {
      alert(result);
      ejecutandoGet();
    })
  .catch(error => console.log('error', error));
}