// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigoSecreto= null;
let intentos= 3

// Actualiza la lista de amigos en el DOM
function agregarAmigo(){
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    if(!nombre) {
        alert('Por favor ingresa un nombre válido');
        return;
    }    
    if (!amigos.includes(nombre)){
        amigos.push(nombre);
        actualizarLista();
        input.value = '';
    }
}

// Sortea un amigo secreto y muestra el input para adivinar
function actualizarLista(){
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    }); 
}

// Sortea un amigo secreto y muestra el input para adivinar
function sortearAmigo(){
    if (amigos.length < 3) {
        alert('Agrega al menos tres amigos.')
        return;
    }
    const indice = Math.floor(Math.random() * amigos.length);
    amigoSecreto = amigos[indice];
    intentos = 3
    mostrarInputAdivinar();
}

// Muestra el input para adivinar el amigo secreto
function mostrarInputAdivinar (){
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
    <li>
        <input type="text" id="adivina" placeholder="Quién es el amigo secreto?">
        <button onclick="adivinarAmigo()">Adivinar</button>
    </li>
    <li>Intentos restantes: <span id="intentos">${intentos}</span></li>
    `;
}

// Verifica si el nombre ingresado es el amigo secreto
function adivinarAmigo(){
    const input = document.getElementById('adivina');
    const nombre = input.value.trim();
    const resultado = document.getElementById('resultado');
    if (nombre === amigoSecreto){
        resultado.innerHTML = `<li>!Correcto¡, El amigo secreto era ${amigoSecreto}.</li>`;
        setTimeout(reiniciarJuego, 2000);
    } else {
        intentos--;
        document.getElementById('intentos').textContent= intentos;
        if(intentos <= 0){
            resultado.innerHTML += `<li>No tienes mas intentosEl amigo Secreto era ${amigoSecreto}</li>`;
            setTimeout(reiniciarJuego,2000);
        } else {
            resultado.innerHTML += `<li>Incorrecto, intenta de nuevo. </li>`;
        }
    }
}


//Reinicia el juego
function reiniciarJuego(){
    amigos = [];
    amigoSecreto=null;
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
}