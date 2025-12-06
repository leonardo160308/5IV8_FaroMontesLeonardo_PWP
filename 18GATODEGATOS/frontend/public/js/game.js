let turno = "X";
let tablero = ["", "", "", "", "", "", "", "", ""];
let score = 0;

const nombreJugador = document.getElementById("nombreJugador");
const panel = document.getElementById("tablero");
const turnoTxt = document.getElementById("turnoTxt");
const info = document.getElementById("info");
const btnRestart = document.getElementById("reiniciar");
const puntaje = document.getElementById("puntaje");

function iniciarTablero() {
    panel.innerHTML = "";
    tablero.forEach((_, i) => {
        let celda = document.createElement("div");
        celda.classList.add("celda");
        celda.dataset.id = i;
        celda.addEventListener("click", () => jugar(i, celda));
        panel.appendChild(celda);
    });
}
iniciarTablero();

function jugar(pos, caja) {
    if (tablero[pos] !== "") return;

    tablero[pos] = turno;
    caja.textContent = turno;

    if (verificar(turno)) {
        info.textContent = "Ganó " + turno;
        score++;
        puntaje.textContent = "Score: " + score;
        guardarResultado(turno, "victoria", score);
        bloquearTablero();
        return;
    }

    if (tablero.every(c => c !== "")) {
        info.textContent = "Empate";
        guardarResultado("Ninguno", "empate", score);
        return;
    }

    turno = turno === "X" ? "O" : "X";
    turnoTxt.textContent = turno;
}

function verificar(t) {
    let c = tablero;
    let combinaciones = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    return combinaciones.some(arr =>
        c[arr[0]] === t && c[arr[1]] === t && c[arr[2]] === t
    );
}

function bloquearTablero() {
    document.querySelectorAll(".celda").forEach(c => {
        c.style.pointerEvents = "none";
    });
}

btnRestart.addEventListener("click", () => {
    tablero = ["", "", "", "", "", "", "", "", ""];
    turno = "X";
    turnoTxt.textContent = "X";
    info.textContent = "Turno de:";
    iniciarTablero();
});

async function guardarResultado(jugador, resultado, score) {

    if (nombreJugador.value === "") {
        alert("Escribe tu nombre para guardar partida");
        return;
    }

    await fetch("/api/save-game", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            jugador: nombreJugador.value,
            resultado: resultado,
            score: score
        })
    });
}
