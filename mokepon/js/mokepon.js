const sectionReiniciar = document.getElementById('reiniciar')
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById('reiniciar')
const sectionSeleccionarMascotaJugador = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')
const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const sectionMensaje = document.getElementById('resultado')
const contenedorDeTarjetas = document.getElementById('contenedor-tarjetas')

let mokepones = []
let opcionDeMokepones
let opcionDeAtaques
let ataqueJugador
let ataqueEnemigo
let mascotaJugador
let mascotaEnemigo

let botones = []
let botonAgua
let botonTierra
let botonFuego

let botonesDeAtaques
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }

    get name(){
        return this.nombre
    }

    get attackList(){
        return this.ataques
    }

    set lifes(value){
        this.vida = this.vida - value
        return this.vida;
    }
}

let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5)

let capipepo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 5)

let ratigueya = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 5)

hipodoge.ataques.push(
    {nombre: '💧', id: 'boton-agua', tipo: 'AGUA'},
    {nombre: '💧', id: 'boton-agua', tipo: 'AGUA'},
    {nombre: '💧', id: 'boton-agua', tipo: 'AGUA'},
    {nombre: '🔥', id: 'boton-fuego', tipo: 'FUEGO'},
    {nombre: '🪴', id: 'boton-tierra', tipo: 'TIERRA'},
)

capipepo.ataques.push(
    {nombre: '🪴', id: 'boton-tierra', tipo: 'TIERRA'},
    {nombre: '🪴', id: 'boton-tierra', tipo: 'TIERRA'},
    {nombre: '🪴', id: 'boton-tierra', tipo: 'TIERRA'},
    {nombre: '💧', id: 'boton-agua', tipo: 'AGUA'},
    {nombre: '🔥', id: 'boton-fuego', tipo: 'FUEGO'},
)

ratigueya.ataques.push(
    {nombre: '🔥', id: 'boton-fuego', tipo:'FUEGO'},
    {nombre: '🔥', id: 'boton-fuego', tipo:'FUEGO'},
    {nombre: '🔥', id: 'boton-fuego', tipo:'FUEGO'},
    {nombre: '💧', id: 'boton-agua', tipo:'AGUA'},
    {nombre: '🪴', id: 'boton-tierra', tipo:'TIERRA'},
)

mokepones.push(hipodoge, capipepo, ratigueya)

function iniciarJuego() {
    sectionReiniciar.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'none'

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input class="input-mascota" type="radio" name="mascota" id=${mokepon.nombre} />
            <label class="tarjeta-de-mokepon" for="${mokepon.nombre}">
                <p>${mokepon.nombre}</p>
                <img src=${mokepon.foto}>
            </label>
        `
        contenedorDeTarjetas.innerHTML += opcionDeMokepones
    })

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonReiniciar.addEventListener('click', reiniciarJuego)
    
}

function estaSeleccionadaMascota(nombreMascota) {
    return document.getElementById(nombreMascota).checked
}

function mostrarBotonesDeAtaques(mascota) {
    for (let ataque of mascota.ataques) {
        opcionDeAtaques = `
        <button id='${ataque.id}' class="boton-de-ataque BAtaque">
            ${ataque.nombre}
        </button>
        `
        botonesDeAtaques.innerHTML += opcionDeAtaques
    }
    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua')
    botonTierra = document.getElementById('boton-tierra')

    botones = document.querySelectorAll('.BAtaque')

    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            console.log(e);
        })
    })
}

function seleccionarMascotaJugador() {    

    botonesDeAtaques = document.getElementById('botones-ataques')

    if (estaSeleccionadaMascota('Hipodoge')) {
        spanMascotaJugador.innerHTML = hipodoge.name
        mascotaJugador = hipodoge.name
        sectionSeleccionarMascotaJugador.style.display = 'none'
        sectionSeleccionarAtaque.style.display = 'flex'
        mostrarBotonesDeAtaques(hipodoge)

    } else if (estaSeleccionadaMascota('Capipepo')) {
        spanMascotaJugador.innerHTML = capipepo.name
        mascotaJugador = capipepo.name
        sectionSeleccionarMascotaJugador.style.display = 'none'
        sectionSeleccionarAtaque.style.display = 'flex'
        mostrarBotonesDeAtaques(capipepo)

    } else if (estaSeleccionadaMascota('Ratigueya')) {
        spanMascotaJugador.innerHTML = ratigueya.name
        mascotaJugador = ratigueya.name
        sectionSeleccionarMascotaJugador.style.display = 'none'
        sectionSeleccionarAtaque.style.display = 'flex'
        mostrarBotonesDeAtaques(ratigueya)

    } else {
        alert("No has seleccionado una mascota")
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let indiceMascotaAleatoria = aleatorio(0, mokepones.length-1)
    spanMascotaEnemigo.innerHTML = mokepones[indiceMascotaAleatoria].name
    mascotaEnemigo = mokepones[indiceMascotaAleatoria].name

    secuenciaAtaque()
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

    crearMensaje(resultadoAtaque)
    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("FELICITACIONES! Ganaste 🥳")
    } else if (vidasJugador == 0) {
        crearMensajeFinal("Lo siento, perdiste 😢")
    }
}

function crearMensaje(resultado) {
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensaje.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    
    sectionReiniciar.style.display = 'flex'
    sectionMensaje.innerHTML = resultadoFinal
    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)