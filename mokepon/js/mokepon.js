const sectionReiniciar = document.getElementById('reiniciar')
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById('reiniciar')
const sectionSeleccionarMascotaJugador = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')
const spanScoreJugador = document.getElementById('vidas-jugador')
const spanScoreEnemigo = document.getElementById('vidas-enemigo')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const sectionMensaje = document.getElementById('resultado')
const contenedorDeTarjetas = document.getElementById('contenedor-tarjetas')

let mokepones = []
let opcionDeMokepones 
let opcionDeAtaques

let botones = []
let resultadoAtaqueEnemigo = []
let resultadoAtaqueJugador = []
let ataqueJugador = []
let ataqueEnemigo = []
let ataquesMokeponJugador 
let ataquesMokeponEnemigo

let botonesDeAtaques

let puntosJugador
let puntosEnemigo
let mascotaJugador
let mascotaEnemigo

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
    {nombre: '🌱', id: 'boton-tierra', tipo: 'TIERRA'},
)

capipepo.ataques.push(
    {nombre: '🌱', id: 'boton-tierra', tipo: 'TIERRA'},
    {nombre: '🌱', id: 'boton-tierra', tipo: 'TIERRA'},
    {nombre: '🌱', id: 'boton-tierra', tipo: 'TIERRA'},
    {nombre: '💧', id: 'boton-agua', tipo: 'AGUA'},
    {nombre: '🔥', id: 'boton-fuego', tipo: 'FUEGO'},
)

ratigueya.ataques.push(
    {nombre: '🔥', id: 'boton-fuego', tipo:'FUEGO'},
    {nombre: '🔥', id: 'boton-fuego', tipo:'FUEGO'},
    {nombre: '🔥', id: 'boton-fuego', tipo:'FUEGO'},
    {nombre: '💧', id: 'boton-agua', tipo:'AGUA'},
    {nombre: '🌱', id: 'boton-tierra', tipo:'TIERRA'},
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
    botones = document.querySelectorAll('.BAtaque')

}

function secuenciaAtaque() {
    console.log(ataqueJugador.length);
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.innerText === '🔥') {
                ataqueJugador.push('FUEGO')
                boton.style.background = '#112f58'
                boton.disabled = true
                ataqueAleatorioEnemigo()
            } else if (e.target.innerText === '💧') {
                ataqueJugador.push('AGUA')
                boton.style.background = '#112f58'
                boton.disabled = true
                ataqueAleatorioEnemigo()
            } else {
                ataqueJugador.push('TIERRA')
                boton.style.background = '#112f58'
                boton.disabled = true
                ataqueAleatorioEnemigo()
            }
        })
    })
}

function seleccionarMascotaJugador() {    

    botonesDeAtaques = document.getElementById('botones-ataques')

    if (estaSeleccionadaMascota('Hipodoge')) {
        spanMascotaJugador.innerHTML = `
        <img class="img-mascotas" src=${hipodoge.foto}>
        `

        mascotaJugador = hipodoge.name
        sectionSeleccionarMascotaJugador.style.display = 'none'
        sectionSeleccionarAtaque.style.display = 'flex'
        mostrarBotonesDeAtaques(hipodoge)
        seleccionarMascotaEnemigo()

    } else if (estaSeleccionadaMascota('Capipepo')) {
        spanMascotaJugador.innerHTML = `
        <img class="img-mascotas" src=${capipepo.foto}>
        `
        mascotaJugador = capipepo.name
        sectionSeleccionarMascotaJugador.style.display = 'none'
        sectionSeleccionarAtaque.style.display = 'flex'
        mostrarBotonesDeAtaques(capipepo)
        seleccionarMascotaEnemigo()

    } else if (estaSeleccionadaMascota('Ratigueya')) {
        spanMascotaJugador.innerHTML = `
        <img class="img-mascotas" src=${ratigueya.foto}>
        `
        mascotaJugador = ratigueya.name
        sectionSeleccionarMascotaJugador.style.display = 'none'
        sectionSeleccionarAtaque.style.display = 'flex'
        mostrarBotonesDeAtaques(ratigueya)
        seleccionarMascotaEnemigo()

    } else {
        alert("No has seleccionado una mascota")
    }

}

function seleccionarMascotaEnemigo() {
    let indiceMascotaAleatoria = aleatorio(0, mokepones.length-1)
    
    spanMascotaEnemigo.innerHTML = `
    <img class="img-mascotas" src=${mokepones[indiceMascotaAleatoria].foto}>
    `
    mascotaEnemigo = mokepones[indiceMascotaAleatoria].name
    ataquesMokeponEnemigo = mokepones[indiceMascotaAleatoria].ataques
    
    secuenciaAtaque()
}


function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length - 1)

    if (ataqueAleatorio == 0 ||  ataqueAleatorio == 1) {
        ataqueEnemigo.push('FUEGO')
    } else if (ataqueAleatorio == 2 || ataqueAleatorio == 4) {
        ataqueEnemigo.push('AGUA')
    } else {
        ataqueEnemigo.push('TIERRA')
    }
    combate()
}

function combate() {

    let elementoJugador = ataqueJugador.at(-1)
    let elementoEnemigo = ataqueEnemigo.at(-1)

    console.log(ataqueJugador);
    console.log(ataqueEnemigo);

    if (elementoJugador == elementoEnemigo) {
        resultadoAtaque = 'EMPATE'
        
        spanScoreJugador.innerHTML = "🤝🏼"
        spanScoreEnemigo.innerHTML = "🤝🏼"

        resultadoAtaqueEnemigo.push(0)
        resultadoAtaqueJugador.push(0)
    } else if (elementoJugador == 'FUEGO' && elementoEnemigo == 'TIERRA') {
        resultadoAtaque = 'GANASTE'

        spanScoreJugador.innerHTML = "🤩"
        spanScoreEnemigo.innerHTML = "😵"

        resultadoAtaqueEnemigo.push(0)
        resultadoAtaqueJugador.push(1)
    } else if (elementoJugador == 'AGUA' && elementoEnemigo == 'FUEGO') {
        resultadoAtaque = 'GANASTE'

        spanScoreJugador.innerHTML = "🤩"
        spanScoreEnemigo.innerHTML = "😵"

        resultadoAtaqueEnemigo.push(0)
        resultadoAtaqueJugador.push(1)
    } else if (elementoJugador == 'TIERRA' && elementoEnemigo == 'AGUA') {
        resultadoAtaque = 'GANASTE'

        spanScoreJugador.innerHTML = "🤩"
        spanScoreEnemigo.innerHTML = "😵"

        resultadoAtaqueEnemigo.push(0)
        resultadoAtaqueJugador.push(1)
    } else {
        resultadoAtaque = 'PERDISTE'

        spanScoreJugador.innerHTML = "😵"
        spanScoreEnemigo.innerHTML = "🤩"

        resultadoAtaqueEnemigo.push(1)
        resultadoAtaqueJugador.push(0)
    }
    crearMensaje(resultadoAtaque, elementoJugador, elementoEnemigo)
    revisarPuntuacion()
}

function revisarPuntuacion() {
    puntosJugador = resultadoAtaqueJugador.reduce((a, b) => a + b)
    puntosEnemigo = resultadoAtaqueEnemigo.reduce((a, b) => a + b)

    if (ataqueJugador.length > 4) {
        if (puntosJugador > puntosEnemigo) {
            crearMensajeFinal("FELICITACIONES! Ganaste 🥳", puntosJugador, puntosEnemigo)
        } else if (puntosJugador < puntosEnemigo) {
            crearMensajeFinal("Lo siento, perdiste 😢", puntosJugador, puntosEnemigo)
        } else {
            crearMensajeFinal("Empate 🤝🏼! Vuelve a intentarlo...", puntosJugador, puntosEnemigo)
        }
    }
}

function crearMensaje(resultado, tipoAtaqueJugador, tipoAtaqueEnemigo) {
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensaje.innerHTML = resultado

    if (resultadoAtaqueJugador.at(-1) == 1) {
        nuevoAtaqueDelJugador.innerHTML = tipoAtaqueJugador + '✅'
        nuevoAtaqueDelEnemigo.innerHTML = tipoAtaqueEnemigo + '❌'
    } else if (resultadoAtaqueEnemigo.at(-1) == 1) {
        nuevoAtaqueDelJugador.innerHTML = tipoAtaqueJugador + '❌'
        nuevoAtaqueDelEnemigo.innerHTML = tipoAtaqueEnemigo + '✅'
    } else {
        nuevoAtaqueDelJugador.innerHTML = tipoAtaqueJugador + '🤝🏼'
        nuevoAtaqueDelEnemigo.innerHTML = tipoAtaqueEnemigo + '🤝🏼'
    }
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal, scoreJugador, scoreEnemigo) {
    
    sectionReiniciar.style.display = 'flex'
    sectionMensaje.innerHTML = resultadoFinal
    spanScoreJugador.innerHTML = `${scoreJugador} ⭐`
    spanScoreEnemigo.innerHTML = `${scoreEnemigo} ⭐`
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)