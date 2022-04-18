if(localStorage.getItem("codigo")==null) {
        window.location.href="../index.html";
      }


      var data1 = localStorage.getItem('codigo');
      document.getElementById('name1').innerHTML += data1;

      var data2 = localStorage.getItem('nombre');
      document.getElementById('name2').innerHTML += data2;

      var data3 = localStorage.getItem('email');
      document.getElementById('name3').innerHTML += data3;

      // document.getElementById("cerrar").onclick = function() {
      //   localStorage.removeItem('name');
      //   localStorage.removeItem('user');

      //   window.location.href="../index.html";
      // }

    var contenido = document.querySelector('#contenido')
    
    function traer(){
        fetch('https://api-parcial.crangarita.repl.co/students/1151987/notas')
        .then(data => data.text())
      .then(data =>{
        console.log(data);
        contenido.innerHTML = `${data}`
      })
    }
    function tabla(datos) {
            // console.log(datos)
            contenido.innerHTML = ''
            for(let valor of datos){
                // console.log(valor.nombre)
                contenido.innerHTML += `
                
                <tr>
                    <th scope="row">${ valor.id }</th>
                    <td>${ valor.nombre }</td>
                    <td>${ valor.p1 }</td>
                    <td>${ valor.p2}</td>
                    <td>${ valor.p3 }</td>
                    <td>${ valor.ef }</td>
                </tr>
                
                `
            }
        }
