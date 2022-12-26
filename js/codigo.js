// mi primera función
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function eleccion(jugada){
    let resultado = ""
    if(jugada == 1){
        resultado = "Piedra 🪨"
    } else if(jugada == 2){
        resultado = "Papel 🧻"
    } else if(jugada == 3){
        resultado = "Tijera ✂️"
    } else {
        resultado = "MAL ELEGIDO"
    }
    return resultado;
}

// 1 es priedra, 2 es papel, 3 es tijera
let jugador = 0;
let triunfos = 0
let derrotas = 0

while (triunfos < 3 && derrotas < 3){
    let pc = aleatorio(1, 3);
    jugador = prompt("Jugador :::: elige: 1 para piedra, 2 para papel, 3 para tijera")

    alert("PC elige: " + eleccion(pc))
    alert("Tu eliges: " + eleccion(jugador))

    // COMBATE
    if (pc == jugador){
        alert("EMPATE")
    }else if (jugador == 1 && pc ==  3){
        alert("GANASTE")
        triunfos++
    }else if (jugador == 2 && pc == 1){
        alert("GANASTE")
        triunfos++
    }else if(jugador == 3 && pc == 2){
        alert("GANASTE")
        triunfos++
    }else{
        alert("PERDISTE")
        derrotas++
    }
}

alert("Ganaste " + triunfos + " veces. Perdiste " + derrotas + " veces.")