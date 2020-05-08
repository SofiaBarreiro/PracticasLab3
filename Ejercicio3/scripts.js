var http = new XMLHttpRequest();

window.onload = function() {
    /* 
                  console.log('funcionando'); */
    /*   usr = document.getElementById('input').input;

            pass = document.getElementById('inputPass').value;
            document.getElementById('buton').onclick = function () { */

    http.onreadystatechange = callback; //NO PONER PARENTESIS!!!!!!!!!!!!!
    http.open("GET", "http://localhost:3000/personas", true);
    http.send();
};

function callback() {
    if (http.readyState == 4 && http.status == 200) {
        // Typical action to be performed when the document is ready:
        //document.getElementById("demo").innerHTML = xhttp.responseText;

        var json = JSON.parse(http.responseText);

        json.forEach(element => {

            var fila = crearFila(element);
            document.getElementById('table').appendChild(fila);

        });

    }
}

var array = [{
        nombre: "sofia",
        edad: "31",
    },
    {
        nombre: "sofia",
        edad: "31",
    },
    {
        nombre: "sofia",
        edad: "31",
    },
];


function crearFila(element) {


    var tr = document.createElement('tr');
    var nombre = document.createElement('td');
    var text = document.createTextNode(element.nombre);

    nombre.appendChild(text);
    var apellido = document.createElement('td');
    var text = document.createTextNode(element.apellido);
    apellido.appendChild(text);


    var fecha = document.createElement('td');
    var text = document.createTextNode(element.fecha);
    fecha.appendChild(text);

    //fecha.textContent(element.fecha);
    var telefono = document.createElement('td');
    var text = document.createTextNode(element.telefono);
    telefono.appendChild(text);
    //telefono.textContent(element.telefono);
    tr.appendChild(nombre);
    tr.appendChild(apellido);
    tr.appendChild(fecha);
    tr.appendChild(telefono);


    return tr;
}