window.onload = function() {

    var usuario = "Sofiadb";
    var contraseña = "123456";

    var boton = document.getElementById("btnIniciar");

    var inputUsuario = document.getElementById("inputUsuario");
    var inputPassword = document.getElementById("inputPassword");
    var formulario = document.getElementById("formulario");
    var divMensaje = document.getElementById("MensajeBienvenida");


    boton.addEventListener("click", function() {


        if (inputUsuario.value != "" && inputPassword.value != "") {

            if (inputUsuario.value != usuario || inputPassword.value != contraseña) {

                alert("El usuario o la contraseña son incorrectos");
                inputPassword.value = "";
                inputUsuario.value = "";
            } else {

                formulario.style.display = "none";
                var mensajeBienvenida = document.createElement('h2');
                mensajeBienvenida.innerText = "Bienvenido a la aplicación!!!";
                divMensaje.append(mensajeBienvenida);

            }

        } else {

            alert("Por favor complete los campos");
        }

    });



};