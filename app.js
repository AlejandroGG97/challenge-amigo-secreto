// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombresAmigos = [];

function agregarAmigo() {
document.getElementById('sorteo').removeAttribute('disabled');
let nombre = document.getElementById('nombre').value;
        
        if (nombre == "number") {
            alert('Ingresa el nombre de un amigo');
        } else {
            if (nombresAmigos.includes(nombre)) {
                alert('Este amigo ya esta registrado!, ingresa uno diferente');
            } else {
                nombresAmigos.push(nombre);
                limpiarCasilla();
                llenarLista(`${nombre}`);
            }
        }   
    return;
}

function llenarLista(texto) {

    let nuevoAmigo = document.createElement('li');

    nuevoAmigo.innerHTML = texto;

    (document.getElementById('listaAmigos')).appendChild(nuevoAmigo);

    return;
}

function sortearAmigo() {

    limpiarLista();
    limpiarCasilla();
    let numeroGenerado = Math.floor(Math.random()*nombresAmigos.length);
    let sorteado = document.getElementById('resultado');
    sorteado.innerHTML = nombresAmigos[numeroGenerado];
    document.querySelector('#sorteo').setAttribute('disabled','true');
    vaciarNombres();

}

function limpiarCasilla() {

    document.querySelector('#nombre').value = '';
    
}

function limpiarLista() {

    document.getElementById('listaAmigos').innerHTML = '';

}

function vaciarNombres() {
    nombresAmigos = [];
}