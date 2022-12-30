let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)

    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)

    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function estaSeleccionadaMascota(nombreMascota) {
    return document.getElementById(nombreMascota).checked
}

function seleccionarMascotaJugador() {

    let sectionSeleccionarMascotaJugador = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascotaJugador.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'block'

    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if (estaSeleccionadaMascota('hipodoge')) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
        //alert("Seleccionaste a Hipodoge")
    } else if (estaSeleccionadaMascota('capipepo')) {
        spanMascotaJugador.innerHTML = 'Capipepo'
        //alert("Seleccionaste a Capipepo")
    } else if (estaSeleccionadaMascota('ratigueya')) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
        //alert("Seleccionaste a Ratigueya")
    } else {
        alert("No has seleccionado una mascota")
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1, 3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
    combate()
}

function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
    combate()
}

function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
    combate()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }
}

function combate() {
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    let resultadoAtaque

    if (ataqueJugador == ataqueEnemigo) {
        resultadoAtaque = 'EMPATE'
    } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        resultadoAtaque = 'GANASTE'
        vidasEnemigo = vidasEnemigo - 1
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        resultadoAtaque = 'GANASTE'
        vidasEnemigo = vidasEnemigo - 1
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        resultadoAtaque = 'GANASTE'
        vidasEnemigo = vidasEnemigo - 1
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        resultadoAtaque = 'PERDISTE'
        vidasJugador = vidasJugador - 1
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
    crearMensaje(resultadoAtaque)
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("FELICITACIONES! Ganaste 🥳")
    } else if (vidasJugador == 0) {
        crearMensajeFinal("Lo siento, perdiste 😢")
    }
}

function crearMensaje(resultado) {

    let mensajeBatalla = document.createElement('p')
    mensajeBatalla.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', la mascota del enemigo atacó con ' + ataqueEnemigo + ' - ' + resultado + '! 🎉'

    let mensajeActual = document.getElementById('mensajes')

    document.body.insertBefore(mensajeBatalla, mensajeActual)
}

function crearMensajeFinal(resultadoFinal) {

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'

    let sectionMensaje = document.getElementById('mensajes')
    let parrafo = document.createElement('p')

    parrafo.innerHTML = resultadoFinal

    sectionMensaje.appendChild(parrafo)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true

    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true

    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)