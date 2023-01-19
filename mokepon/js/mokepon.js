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

class Mokepon {
    
    constructor(nombre, foto, tipo, fotoMapa, x=10, y=10) {
        this.nombre = nombre
        this.foto = foto
        this.tipo = tipo
        this.ataques = []
        this.x = x
        this.y = y
        this.ancho = 40
        this.alto = 40
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

let hipodogeEnemigo = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 'agua', './assets/hipodoge.png', 80, 120)

let capipepoEnemigo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 'tierra', './assets/capipepo.png', 150, 95)

let ratigueyaEnemigo = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 'fuego', './assets/ratigueya.png', 200, 190)

let tucapalma = new Mokepon('Tucapalma', './assets/mokepons_mokepon_tucapalma_attack.png', 'tierra', './assets/tucapalma.png')

let pydos = new Mokepon('Pydos', './assets/mokepons_mokepon_pydos_attack.png', 'agua', './assets/pydos.png')

let langostelvis = new Mokepon('Langostelvis', './assets/mokepons_mokepon_langostelvis_attack.png', 'fuego', './assets/langostelvis.png')

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

pydos.ataques.push(
    {nombre: '💧', id: 'boton-agua', tipo: 'AGUA'},
    {nombre: '💧', id: 'boton-agua', tipo: 'AGUA'},
    {nombre: '💧', id: 'boton-agua', tipo: 'AGUA'},
    {nombre: '🔥', id: 'boton-fuego', tipo: 'FUEGO'},
    {nombre: '🌱', id: 'boton-tierra', tipo: 'TIERRA'},
)

tucapalma.ataques.push(
    {nombre: '🌱', id: 'boton-tierra', tipo: 'TIERRA'},
    {nombre: '🌱', id: 'boton-tierra', tipo: 'TIERRA'},
    {nombre: '🌱', id: 'boton-tierra', tipo: 'TIERRA'},
    {nombre: '💧', id: 'boton-agua', tipo: 'AGUA'},
    {nombre: '🔥', id: 'boton-fuego', tipo: 'FUEGO'},
)

langostelvis.ataques.push(
    {nombre: '🔥', id: 'boton-fuego', tipo:'FUEGO'},
    {nombre: '🔥', id: 'boton-fuego', tipo:'FUEGO'},
    {nombre: '🔥', id: 'boton-fuego', tipo:'FUEGO'},
    {nombre: '💧', id: 'boton-agua', tipo:'AGUA'},
    {nombre: '🌱', id: 'boton-tierra', tipo:'TIERRA'},
)

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

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            console.log(e);
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

        seleccionarMascotaEnemigo()
        } 
    })
}

function seleccionarMascotaEnemigo() {
    let indiceMascotaAleatoria = aleatorio(0, mokepones.length-1)
    
    spanMascotaEnemigo.innerHTML = `
    <img class="img-mascotas" src=${mokepones[indiceMascotaAleatoria].foto}>
    `
    mascotaEnemigo = mokepones[indiceMascotaAleatoria]
    nombreMascotaEnemigo = mokepones[indiceMascotaAleatoria].name
    ataquesMokeponEnemigo = mokepones[indiceMascotaAleatoria].ataques
    
    agregarAtaque()
>>>>>>> 7d94f6b25f44c420f3868fbf464ea6aad322bb89

    mostrarBotonesDeAtaques(mascotaJugador)

    sectionSeleccionarMascotaJugador.style.display = 'none'
    //sectionSeleccionarAtaque.style.display = 'flex'
    sectionVerMapa.style.display = 'flex'
    
    //Lienzo del canvas
    iniciarMapa()

    secuenciaAtaque()
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

    lienzo.clearRect(0,0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mascotaJugador.pintarMokepon()
    mascotaEnemigo.pintarMokepon()
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
            //detenerMovimiento()
            break;
    }
}

function iniciarMapa() {
    mapa.width = 320
    mapa.height = 240

    intervalo = setInterval(pintarCanvas, 50)

    window.addEventListener('keydown', sePresionoUnaTecla)
    window.addEventListener('keyup', detenerMovimiento)
}

window.addEventListener('load', iniciarJuego)