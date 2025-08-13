// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombresAmigos = [];

function agregarAmigo() {
let nombre = document.getElementById('nombre').value;
    if (nombre == "") {
        alert('Ingresa el nombre de un amigo');
    } else {
        if (nombresAmigos.includes(nombre)) {
            alert('Este amigo ya esta registrado!, ingresa uno diferente');
        } else {
            nombresAmigos.push(nombre);
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
    
    let numeroGenerado = Math.floor(Math.random()*nombresAmigos.length);
    let sorteado = document.getElementById('resultado');
    sorteado.innerHTML = nombresAmigos[numeroGenerado];

}
