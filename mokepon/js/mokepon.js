function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
}

function estaSeleccionadaMascota(nombreMascota) {
    return document.getElementById(nombreMascota).checked
}

function seleccionarMascotaJugador(){
    if (estaSeleccionadaMascota('hipodoge')) {
        alert("Seleccionaste a Hipodoge")
    } else if (estaSeleccionadaMascota('capipepo')){
        alert("Seleccionaste a Capipepo")
    } else if (estaSeleccionadaMascota('ratigueya')){
        alert("Seleccionaste a Ratigueya")
    } else {
        alert("No has seleccionado una mascota")
    }
}



window.addEventListener('load', iniciarJuego)