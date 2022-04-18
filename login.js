function loginFunc(e)
{
    //event.preventDefault();

    var codigo = document.getElementById('codigo').value;
    var clave = document.getElementById('pass').value;


    var urllogin = 'https://api-parcial.crangarita.repl.co/login';
    var data = {codigo: codigo, clave: clave};

    
    fetch(urllogin, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }

  }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
    //var mostrar = document.getElementById('mostrar');
  }

  document.getElementById("ingresar").onclick = function () {


    var codigo = document.getElementById('codigo').value;
    var clave = document.getElementById('pass').value;


    var urllogin = 'https://api-parcial.crangarita.repl.co/login';
    var data = {codigo: codigo, clave: clave};
    console.log(data)
    
    fetch(urllogin, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }

      
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      console.log(response)
      console.log(response.login)
                        if(response.login){
                          console.log('Success:', response);
                          localStorage.setItem("codigo", response.codigo);
                          localStorage.setItem("nombre", response.nombre);
                          localStorage.setItem("email", response.email);
                          window.location.href="tabla.html";
                        }else{
                          alert("Las credenciales no son validas");
                          document.getElementById("codigo").value = "";
                          document.getElementById("pass").value = "";
                        }
                      }
         );

    
 
}