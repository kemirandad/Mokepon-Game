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

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

let mokepones = []
let mokeponesEnemigos = []
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
let nombreMascotaJugador
let nombreMascotaEnemigo
let mascotaJugador
let mascotaEnemigo

//canva
let lienzo = mapa.getContext('2d')
let intervalo
let mapaBackground = new Image()
mapaBackground.src = './assets/mokemap.png' 
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20

const anchoMaximoDelMapa = 350

if (anchoDelMapa > anchoMaximoDelMapa) {
    anchoDelMapa = anchoMaximoDelMapa - 20
}

alturaQueBuscamos = anchoDelMapa * 600 / 800

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos


//fetch
let jugadorId = null

class Mokepon {
    
    constructor(nombre, foto, tipo, fotoMapa, id=null) {
        this.nombre = nombre
        this.id = id
        this.foto = foto
        this.tipo = tipo
        this.ataques = []
        this.alto = 40
        this.ancho = 40
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }

    get name(){
        return this.nombre
    }

    get attackList(){
        return this.ataques
    }

    pintarMokepon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}

let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 'agua', './assets/hipodoge.png')

let capipepo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 'tierra', './assets/capipepo.png')

let ratigueya = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 'fuego', './assets/ratigueya.png')

// let hipodogeEnemigo = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 'agua', './assets/hipodoge.png')

// let capipepoEnemigo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 'tierra', './assets/capipepo.png')

// let ratigueyaEnemigo = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 'fuego', './assets/ratigueya.png')

// let tucapalmaEnemigo = new Mokepon('Tucapalma', './assets/mokepons_mokepon_tucapalma_attack.png', 'tierra', './assets/tucapalma.png')

// let pydosEnemigo = new Mokepon('Tucapalma', './assets/mokepons_mokepon_pydos_attack.png', 'agua', './assets/pydos.png')

// let langostelvisEnemigo = new Mokepon('Tucapalma', './assets/mokepons_mokepon_langostelvis_attack.png', 'fuego', './assets/langostelvis.png')

let tucapalma = new Mokepon('Tucapalma', './assets/mokepons_mokepon_tucapalma_attack.png', 'tierra', './assets/tucapalma.png')

let pydos = new Mokepon('Pydos', './assets/mokepons_mokepon_pydos_attack.png', 'agua', './assets/pydos.png')

let langostelvis = new Mokepon('Langostelvis', './assets/mokepons_mokepon_langostelvis_attack.png', 'fuego', './assets/langostelvis.png')

const TIPO_AGUA_ATAQUES = [
    {nombre: '💧', id: 'boton-agua', tipo: 'AGUA'},
    {nombre: '💧', id: 'boton-agua', tipo: 'AGUA'},
    {nombre: '💧', id: 'boton-agua', tipo: 'AGUA'},
    {nombre: '🔥', id: 'boton-fuego', tipo: 'FUEGO'},
    {nombre: '🌱', id: 'boton-tierra', tipo: 'TIERRA'},
]

const TIPO_TIERRA_ATAQUES = [
    {nombre: '🌱', id: 'boton-tierra', tipo: 'TIERRA'},
    {nombre: '🌱', id: 'boton-tierra', tipo: 'TIERRA'},
    {nombre: '🌱', id: 'boton-tierra', tipo: 'TIERRA'},
    {nombre: '💧', id: 'boton-agua', tipo: 'AGUA'},
    {nombre: '🔥', id: 'boton-fuego', tipo: 'FUEGO'},
]

const TIPO_FUEGO_ATAQUES = [
    {nombre: '🔥', id: 'boton-fuego', tipo:'FUEGO'},
    {nombre: '🔥', id: 'boton-fuego', tipo:'FUEGO'},
    {nombre: '🔥', id: 'boton-fuego', tipo:'FUEGO'},
    {nombre: '💧', id: 'boton-agua', tipo:'AGUA'},
    {nombre: '🌱', id: 'boton-tierra', tipo:'TIERRA'},
]

hipodoge.ataques.push(...TIPO_AGUA_ATAQUES)

capipepo.ataques.push(...TIPO_TIERRA_ATAQUES)

ratigueya.ataques.push(...TIPO_FUEGO_ATAQUES)

pydos.ataques.push(...TIPO_AGUA_ATAQUES)

tucapalma.ataques.push(...TIPO_TIERRA_ATAQUES)

langostelvis.ataques.push(...TIPO_FUEGO_ATAQUES)

// hipodogeEnemigo.ataques.push(...TIPO_AGUA_ATAQUES)

// capipepoEnemigo.ataques.push(...TIPO_TIERRA_ATAQUES)

//mokeponesEnemigos.push(hipodogeEnemigo, capipepoEnemigo, ratigueyaEnemigo, tucapalmaEnemigo, pydosEnemigo, langostelvisEnemigo)
mokepones.push(hipodoge, capipepo, ratigueya, tucapalma, pydos, langostelvis)

function iniciarJuego() {
    sectionReiniciar.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'none'
    sectionVerMapa.style.display = 'none'

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
    
    //Express
    unirseAlJuego()
}

function unirseAlJuego() {
    fetch("http://localhost:5500/unirse")
        .then((res) => {
            if (res.ok) {
                res.text()
                    .then((respuesta) => {
                        console.log(respuesta);
                        jugadorId = respuesta
                    })
            }
        })
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
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.innerText === '🔥') {
                ataqueJugador.push('FUEGO')
                boton.style.background = '#112f58'
                boton.disabled = true
                console.log("ataque de fuego enviado");
                ataqueAleatorioEnemigo()
            } else if (e.target.innerText === '💧') {
                ataqueJugador.push('AGUA')
                boton.style.background = '#112f58'
                boton.disabled = true
                console.log("ataque de agua enviado");
                ataqueAleatorioEnemigo()
            } else {
                ataqueJugador.push('TIERRA')
                boton.style.background = '#112f58'
                boton.disabled = true
                console.log("ataque de tierra enviado");
                ataqueAleatorioEnemigo()
            }
        })
    })
}


function seleccionarMascotaJugador() {

    botonesDeAtaques = document.getElementById('botones-ataques')

    mokepones.forEach((mokepon) => {
        if (estaSeleccionadaMascota(mokepon.nombre)) {
            spanMascotaJugador.innerHTML = `
        <img class="img-mascotas" src=${mokepon.foto}>
        `
            nombreMascotaJugador = mokepon.nombre

            mascotaJugador = mokepon

            ataquesMokeponJugador = mokepon.ataques

            sectionSeleccionarMascotaJugador.style.display = 'none'

            sectionVerMapa.style.display = 'flex'

        }
    })

    seleccionarMokepon(mascotaJugador)

    //Lienzo del canvas
    iniciarMapa()
    secuenciaAtaque()
}

function seleccionarMokepon() {
    fetch(`http://localhost:5500/mokepon/${jugadorId}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            mokepon: nombreMascotaJugador
        })
    })
}

function seleccionarMascotaEnemigo() {
    let indiceMascotaAleatoria = aleatorio(0, mokeponesEnemigos.length-1)
    
    spanMascotaEnemigo.innerHTML = `
    <img class="img-mascotas" src=${mokeponesEnemigos[indiceMascotaAleatoria].foto}>
    `
    mascotaEnemigo = mokeponesEnemigos[indiceMascotaAleatoria]
    nombreMascotaEnemigo = mokeponesEnemigos[indiceMascotaAleatoria].name
    ataquesMokeponEnemigo = mokeponesEnemigos[indiceMascotaAleatoria].ataques
    
    agregarAtaque()

    sectionSeleccionarMascotaJugador.style.display = 'none'
    sectionVerMapa.style.display = 'flex'
}

function agregarAtaque() {
    if (mascotaJugador.tipo == 'agua' && mascotaEnemigo.tipo == 'fuego') {
        ataquesMokeponJugador.push({ nombre: '💧', id: 'boton-agua', tipo: 'AGUA' })
    } else if (mascotaJugador.tipo == 'fuego' && mascotaEnemigo.tipo == 'tierra') {
        ataquesMokeponJugador.push({ nombre: '🔥', id: 'boton-fuego', tipo: 'FUEGO' })
    } else if (mascotaJugador.tipo == 'tierra' && mascotaEnemigo.tipo == 'agua') {
        ataquesMokeponJugador.push({ nombre: '🌱', id: 'boton-tierra', tipo: 'TIERRA' })
    } else if (mascotaEnemigo.tipo == 'agua' && mascotaJugador.tipo == 'fuego') {
        ataquesMokeponEnemigo.push({ nombre: '💧', id: 'boton-agua', tipo: 'AGUA' })
    } else if (mascotaEnemigo.tipo == 'fuego' && mascotaJugador.tipo == 'tierra') {
        ataquesMokeponEnemigo.push({ nombre: '🔥', id: 'boton-fuego', tipo: 'FUEGO' })
    } else if (mascotaEnemigo.tipo == 'tierra' && mascotaJugador.tipo == 'agua') {
        ataquesMokeponEnemigo.push({ nombre: '🌱', id: 'boton-tierra', tipo: 'TIERRA' })
    }
}

function ataqueAleatorioEnemigo() {
    let indexAleatorio = aleatorio(0, ataquesMokeponEnemigo.length - 1)
    
    let ataqueAleatorio = ataquesMokeponEnemigo[indexAleatorio]
    
    ataqueEnemigo.push(ataqueAleatorio.tipo)
    ataquesMokeponEnemigo = ataquesMokeponEnemigo.filter(item => item != ataqueAleatorio)
    combate()
}

function combate() {

    let elementoJugador = ataqueJugador.at(-1)
    let elementoEnemigo = ataqueEnemigo.at(-1)


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
    
    botones.forEach(boton => {
        boton.disabled = true
    })

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

function pintarCanvas() {
    mascotaJugador.x = mascotaJugador.x + mascotaJugador.velocidadX
    mascotaJugador.y = mascotaJugador.y + mascotaJugador.velocidadY

    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mascotaJugador.pintarMokepon()

    enviarPosicion(mascotaJugador.x, mascotaJugador.y)

    mokeponesEnemigos.forEach((mokeponEnemigo) => {
        mokeponEnemigo.pintarMokepon()

        if (mascotaJugador.velocidadX !== 0 || mascotaJugador.velocidadY !== 0) {
            revisarColision(mokeponEnemigo, mascotaJugador, mokeponEnemigo.nombre)

        }
    })
}

function enviarPosicion(x, y) {
    fetch(`http://localhost:5500/mokepon/${jugadorId}/posicion`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            x,
            y
        })
    })
        .then(function (res) {
            if (res.ok) {
                res.json()
                    .then(function ({ enemigos }) {
                        console.log(enemigos);
                        enemigos.forEach((enemigo) => {
                            let mokepEnemigo = null
                            const mokeponNombre = enemigo.mokepon.nombre || ""
                            if (mokeponNombre === "Hipodoge") {
                                mokepEnemigo = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 'agua', './assets/hipodoge.png')
                            }
                            else if (mokeponNombre === "Capipepo") {
                                mokepEnemigo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 'tierra', './assets/capipepo.png')
                            }
                            else if (mokeponNombre === "Ratigueya") {
                                mokepEnemigo = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 'fuego', './assets/ratigueya.png')
                            }
                            mokepEnemigo.x = enemigo.x
                            mokepEnemigo.y = enemigo.y

                            mokepEnemigo.pintarMokepon()
                        })
                    })
            }
    })
}

function moverHaciaDerecha() {
    mascotaJugador.velocidadX = 5
}

function moverHaciaIzquierda() {
    mascotaJugador.velocidadX = -5
}

function moverHaciaAbajo() {
    mascotaJugador.velocidadY = 5
}

function moverHaciaArriba() {
    mascotaJugador.velocidadY = -5
}

function detenerMovimiento() {
    mascotaJugador.velocidadX = 0
    mascotaJugador.velocidadY = 0
}

function sePresionoUnaTecla(event) {
    switch (event.key) {
        case 'ArrowUp':
            moverHaciaArriba()
            break;
        case 'ArrowDown':
            moverHaciaAbajo()
            break;
        case 'ArrowRight':
            moverHaciaDerecha()
            break;
        case 'ArrowLeft':
            moverHaciaIzquierda()
            break;
        default:

            break;
    }
}

function iniciarMapa() {

    intervalo = setInterval(pintarCanvas, 50)

    window.addEventListener('keydown', sePresionoUnaTecla)
    window.addEventListener('keyup', detenerMovimiento)
}

function revisarColision(enemigo, mascota) {

    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x 


    const arribaMascota = mascota.y
    const abajoMascota = mascota.y + mascota.alto
    const derechaMascota = mascota.x + mascota.ancho
    const izquierdaMascota = mascota.x 

    if (
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ) {
        return
    }
    detenerMovimiento()
    clearInterval(intervalo)

    sectionSeleccionarAtaque.style.display = 'flex'
    sectionVerMapa.style.display = 'none'
    seleccionarMascotaEnemigo(enemigo)
}

window.addEventListener('load', iniciarJuego)