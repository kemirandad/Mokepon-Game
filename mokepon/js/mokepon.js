let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)

    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
}

function estaSeleccionadaMascota(nombreMascota) {
    return document.getElementById(nombreMascota).checked
}

function seleccionarMascotaJugador(){

    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if (estaSeleccionadaMascota('hipodoge')) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
        //alert("Seleccionaste a Hipodoge")
    } else if (estaSeleccionadaMascota('capipepo')){
        spanMascotaJugador.innerHTML = 'Capipepo'
        //alert("Seleccionaste a Capipepo")
    } else if (estaSeleccionadaMascota('ratigueya')){
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
    } else if (mascotaAleatoria == 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
    ataqueMascotaJugador()
    combate()
}

function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
    ataqueMascotaJugador()
    combate()
}

function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
    ataqueMascotaJugador()
    combate()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }

    crearMensaje()
}

function ataqueMascotaJugador() {
    let spanAtaqueJugador = document.getElementById('ataque-jugador')

    if (ataqueJugador != null) {
        spanAtaqueJugador.innerHTML = ataqueJugador
    }
}

function combate() {
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    let resultadoAtaque 

    if (ataqueEnemigo != null && ataqueJugador != null) {
        if (ataqueJugador == ataqueEnemigo) {
            resultadoAtaque = 'EMPATE'
        } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
            resultadoAtaque = 'GANASTE'
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
            resultadoAtaque = 'GANASTE'
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        } else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
            resultadoAtaque = 'GANASTE'
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        } else {
            resultadoAtaque = 'PERDISTE'
            vidasJugador--
            spanVidasJugador.innerHTML = vidasJugador
        }
    }
    
    return resultadoAtaque
}

function crearMensaje() {

    let resultadoCombate = combate()

    let mensajeBatalla = document.createElement('p')
    mensajeBatalla.innerHTML = 'Tu mascota atacó con '+ ataqueJugador +', la mascota del enemigo atacó con '+ ataqueEnemigo +' - '+ resultadoCombate +'! 🎉'

    let mensajeActual = document.getElementById('mensajes')
    
    document.body.insertBefore(mensajeBatalla, mensajeActual)
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)