function invertirPalabras() {
    const input = document.getElementById("p1-input").value.trim();
    if (input === "") {
        document.getElementById("p1-output").textContent = "Por favor, ingresa al menos una palabra.";
        return;
    }
    const palabras = input.split(" ").filter(p => p !== "");
    const resultado = palabras.reverse().join(" ");

    document.getElementById("p1-output").textContent = "Resultado: " + resultado;
}
function problema2(){
    //este es mio
}

function palabraMasCaracteresUnicos() {
    const input = document.getElementById("p3-input").value.trim().toUpperCase();
    if (input === "") {
        document.getElementById("p3-output").textContent = "Por favor, ingresa palabras separadas por comas.";
        return;
    }

    const palabras = input.split(",").map(p => p.trim()).filter(p => p !== "");

    let palabraMax = "";
    let maxUnicos = 0;

    for (let palabra of palabras) {
        const letrasUnicas = new Set([...palabra].filter(c => c >= "A" && c <= "Z"));
        if (letrasUnicas.size > maxUnicos) {
            maxUnicos = letrasUnicas.size;
            palabraMax = palabra;
        }
    }

    document.getElementById("p3-output").textContent = 
        `La palabra con mas caracteres unicos es "${palabraMax}" con ${maxUnicos} caracteres.`;
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("button")[0].onclick = invertirPalabras;
    document.querySelectorAll("button")[2].onclick = palabraMasCaracteresUnicos;
});
