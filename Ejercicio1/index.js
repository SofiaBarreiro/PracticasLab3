window.onload = function() {
    /*     boton.addEventListener("click", function() {


        if (inputUsuario.value != "" && inputPassword.value != "") {

            if (inputUsuario.value != usuario || inputPassword.value != contraseña) {

                alert("El usuario o la contraseña son incorrectos");
                inputPassword.value = "";
                inputUsuario.value = "";
            } else {

                tabla.innerHTML = tabla.innerHTML + "<tr><td>Sofia</td><td>Barreiro</td><td>barreirosofia@gmail.com</td></tr>";


            }

        } else {

            alert("Por favor complete los campos");
        }

    });

 */


    var inputNombre = document.getElementById("inputNombre");
    var inputApellido = document.getElementById("inputApellido");
    var inputEmail = document.getElementById("inputEmail");
    var formulario = document.getElementById("formulario");
    var tabla = document.getElementById("tabla");

    boton = document.getElementById("btnIniciar");
    inputNombre.value = "";
    inputApellido.value = "";
    inputEmail.value = "";


    boton.addEventListener("click", function() {
        if (inputNombre.value != "" && inputApellido.value != "" && inputEmail.value != "") {
            tabla.innerHTML =
                tabla.innerHTML +
                "<tr><td>" + inputNombre.value + "</td><td>" + inputApellido.value + "</td><td>" + inputEmail.value + "</td>" +
                "<td><a href='http://' target='_blank' rel='noopener noreferrer'>Borrar</a></td> </tr>";


            inputNombre.value = "";
            inputApellido.value = "";
            inputEmail.value = "";

        } else {
            alert("Por favor complete todos los campos");
            inputNombre.value = "";
            inputApellido.value = "";
            inputEmail.value = "";
        }
    });

    var borrar = document.getElementsByTagName('a');

    for (var i = 0; i < borrar.length; i++) {

        console.log(borrar[i]);

        borrar[i].onclick = function() {

            console.log(this);

            var columna = this.parentElement;
            var fila = columna.parentElement;

            fila.removeChild(columna);


        };

    }



};