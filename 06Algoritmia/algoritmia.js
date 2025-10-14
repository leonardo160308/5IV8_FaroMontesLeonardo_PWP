function problema1() {
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
    var p2_x1=document.querySelector("#p2_x1").value;
    var p2_x2=document.querySelector("#p2_x2").value;
    var p2_x3=document.querySelector("#p2_x3").value;
    var p2_x4=document.querySelector("#p2_x4").value;
    var p2_x5=document.querySelector("#p2_x5").value;

    var p2_y1 = document.querySelector("p2_y1").value;
    var p2_y2 = document.querySelector("p2_y2").value;
    var p2_y3 = document.querySelector("p2_y3").value;
    var p2_y4 = document.querySelector("p2_y4").value;
    var p2_y5 = document.querySelector("p2_y5").value;

    //creeamos los vectores
    var v1 = [p2_x1,p2_x2,p2_x3,p2_x4,p2_x5]
    var v2 = [p2_y1,p2_y2,p2_y3,p2_y4,p2_y5]

    //creamos el vector resultado
    v1 = v1.sort(function(a,b){return b-a});
    v2 = v2.sort(function(a,b){return b-a});

    v2= v2.reverse();

    var p2_producto = 0;
    
    for(var i=0; i< v1.length; i++){

        p2_producto += v1[i]*v2[i];
    }

    document.querySelector("#p2_resultado").textContent=p2_producto;
    
}

function problema3() {
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
