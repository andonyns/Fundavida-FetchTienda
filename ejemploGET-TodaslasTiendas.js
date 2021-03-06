ejecutandoGet();

async function ejecutandoGet() {
    var opciones = {
      method: 'GET'
    };

    await fetch("http://localhost:5000/tiendas", opciones)
      .then(response => response.json())
      .then(resultado => {
        armarResultado(resultado);
      })
      .catch(error => {
          alert('Ocurrió un error: '+ error);
        });
  }

  function armarResultado(resultado) {
    /*
      Resultado
      <ul>
        <li>1: Prueba. Direccion: San Jose</li>
      </ul>
    */
    
    var resultadoHTML = "";
    resultadoHTML += "<ul>";

    for (var i = 0; i < resultado.length; i++) {
        var resultados = resultado[i];
        
        resultadoHTML = resultadoHTML + "<li>";
        resultadoHTML = resultadoHTML + resultados.id + ": " + resultados.nombre + ". Dirección: " + resultados.ubicacion;
        //"<button onclick='borrarTienda(5)'>Borrar Tienda</button>"
        resultadoHTML = resultadoHTML + "<button onclick='borrarTienda(" + resultados.id + ")'>Borrar Tienda</button>";
        resultadoHTML = resultadoHTML + "<button onclick='editarTienda(" + resultados.id + ")'>Editar Tienda</button>";
        resultadoHTML = resultadoHTML + "</li>";
    }

    resultadoHTML = resultadoHTML + "</ul>";

    document.querySelector('div').innerHTML = resultadoHTML;
  }

  function editarTienda(idTienda) {
    window.location.href = "./EjemploPut.html?id=" + idTienda;

  }

