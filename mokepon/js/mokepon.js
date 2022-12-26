function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
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
    let ataqueAleatorio = aleatorio(1, 3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (ataqueAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (ataqueAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)