async function ejecutarPost() {

    var nuevosValores = JSON.stringify({
      "nombre": document.querySelector('.nombre').value,
      "ubicacion": document.querySelector('.ubicacion').value
    });

    var requestOptions = {
      method: 'POST',
      headers: {
              'Content-Type': 'application/json;charset=UTF-8'
      },
      body: nuevosValores,
      credentials: 'same-origin',
      redirect: 'follow'
    };

    var result = await fetch("http://localhost:5000/tiendas", requestOptions)
      .then(response => response.text())
      .then(result => {
        alert(result)
      })
       .catch(error => {
          alert('Ocurrió un error: '+ error);
        });
      
  }