ejecutandoGet();

async function ejecutandoGet() {
    var opciones = {
      method: 'GET'
    };

    await fetch("https://localhost:5001/tiendas", opciones)
      .then(response => response.json())
      .then(resultado => {
        armarResultado(resultado);
      })
      .catch(error => {
          alert('Ocurrió un error: '+ error);
        });
  }

  function armarResultado(resultado) {
    var resultadoHTML = "";
    resultadoHTML += "<ul>";

    for (var i = 0; i < resultado.length; i++) {
        var resultados = resultado[i];
        
        resultadoHTML = resultadoHTML + "<li>";
        resultadoHTML = resultadoHTML + resultados.nombre + ". Dirección: " + resultados.ubicacion;
        resultadoHTML = resultadoHTML + "</li>";
    }

    resultadoHTML = resultadoHTML + "</ul>";

    document.querySelector('div').innerHTML = resultadoHTML;
  }

