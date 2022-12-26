function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
}

function estaSeleccionadaMascota(nombreMascota) {
    return document.getElementById(nombreMascota).checked
}

function seleccionarMascotaJugador(){
    if (estaSeleccionadaMascota('hipodoge')) {
        return alert("Seleccionaste a Hipodoge")
    } else if (estaSeleccionadaMascota('capipepo')){
        return alert("Seleccionaste a Capipepo")
    } else if (estaSeleccionadaMascota('ratigueya')){
        return alert("Seleccionaste a Ratigueya")
    } else {
        return alert("No has seleccionado a ninguna mascota")
    }
}



window.addEventListener('load', iniciarJuego)