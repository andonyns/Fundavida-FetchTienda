obtenerTienda(10);

async function obtenerTienda(id) {

    var opciones = {
        method: 'GET'
    };

    fetch("http://localhost:5000/tiendas/" + id, opciones)
    .then(response => response.json()) //Convierto el resultado
    .then(resultado => {
        prepararRespuesta(resultado);
    }) //Que quiero hacer?
    .catch(error => console.log('error', error)); //Que pasa si falla?
}

function prepararRespuesta(resultado) {
    /* 
        <div>
            Nueva Tienda - San Jose
        </div>
    */
    var contenido = resultado.nombre + " - " + resultado.ubicacion;
    document.querySelector('div').innerHTML = contenido;
}