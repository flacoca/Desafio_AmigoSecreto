// Array para almacenar la lista de amigos
let listaDeAmigos = [];

/**
 * Función para agregar un amigo a la lista
 */
function agregarAmigo() {
    // Obtener el valor del input
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    // Validar que el campo no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido');
        return;
    }
    
    // Agregar el nombre a nuestro array
    listaDeAmigos.push(nombreAmigo);
    
    // Actualizar la lista visual
    actualizarListaAmigos();
    
    // Limpiar el campo después de agregar
    inputAmigo.value = '';
    inputAmigo.focus();
}

/**
 * Función para actualizar la lista visual de amigos
 */
function actualizarListaAmigos() {
    const listaAmigosElement = document.getElementById('listaAmigos');
    
    // Limpiar la lista actual
    listaAmigosElement.innerHTML = '';
    
    // Crear elementos de lista para cada amigo
    listaDeAmigos.forEach(amigo => {
        const elementoLista = document.createElement('li');
        elementoLista.textContent = amigo;
        listaAmigosElement.appendChild(elementoLista);
    });
}

/**
 * Función para sortear un amigo al azar
 */
function sortearAmigo() {
    // Verificar que haya al menos un amigo en la lista
    if (listaDeAmigos.length === 0) {
        alert('Necesitas agregar al menos un amigo para realizar el sorteo');
        return;
    }
    
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    
    // Obtener el amigo seleccionado
    const amigoSecreto = listaDeAmigos[indiceAleatorio];
    
    // Mostrar el resultado
    mostrarResultado(amigoSecreto);
}

/**
 * Función para mostrar el resultado del sorteo
 */
function mostrarResultado(amigo) {
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<li>¡Tu amigo secreto es: <strong>${amigo}</strong>!</li>`;
}

// Agregar evento para permitir presionar Enter en el input
document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});