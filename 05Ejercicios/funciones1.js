function validarn(e) {
    var teclado = (document.all) ? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9\d .]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}


function interesMensual() {
    var valor = parseFloat(document.getElementById("cantidadInv").value);
    if (isNaN(valor) || valor <= 0) {
        alert("Introduce una cantidad válida.");
        return;
    }

    var interes = valor * 0.02;
    var total = valor + interes;

    document.getElementById("totalInv").value = "$" + total.toFixed(2);
}

function borrarInv() {
    document.getElementById("cantidadInv").value = "";
    document.getElementById("totalInv").value = "";
}


function comisiones() {
    var base = parseFloat(document.getElementById("sueldoBase").value);
    var v1 = parseFloat(document.getElementById("venta1").value);
    var v2 = parseFloat(document.getElementById("venta2").value);
    var v3 = parseFloat(document.getElementById("venta3").value);

    if ([base, v1, v2, v3].some(isNaN)) {
        alert("Completa todos los campos con números válidos.");
        return;
    }

    var totalVentas = v1 + v2 + v3;
    var comision = totalVentas * 0.10;
    var sueldoTotal = base + comision;

    document.getElementById("comisionesTotal").value = "$" + comision.toFixed(2);
    document.getElementById("sueldoFinal").value = "$" + sueldoTotal.toFixed(2);
}

function borrarComisiones() {
    document.getElementById("sueldoBase").value = "";
    document.getElementById("venta1").value = "";
    document.getElementById("venta2").value = "";
    document.getElementById("venta3").value = "";
    document.getElementById("comisionesTotal").value = "";
    document.getElementById("sueldoFinal").value = "";
}


function descuento() {
    var total = parseFloat(document.getElementById("totalCompra").value);
    if (isNaN(total) || total <= 0) {
        alert("Introduce el total de la compra.");
        return;
    }

    var descuento = total * 0.15;
    var final = total - descuento;

    document.getElementById("precioFinal").value = "$" + final.toFixed(2);
}

function borrarDescuento() {
    document.getElementById("totalCompra").value = "";
    document.getElementById("precioFinal").value = "";
}


function calificacionFinal() {
    var p1 = parseFloat(document.getElementById("parcial1").value);
    var p2 = parseFloat(document.getElementById("parcial2").value);
    var p3 = parseFloat(document.getElementById("parcial3").value);
    var examen = parseFloat(document.getElementById("examenFinal").value);
    var trabajo = parseFloat(document.getElementById("trabajoFinal").value);

    if ([p1, p2, p3, examen, trabajo].some(isNaN)) {
        alert("Completa todos los campos con calificaciones válidas.");
        return;
    }

    var promedioParciales = (p1 + p2 + p3) / 3;
    var final = (promedioParciales * 0.55) + (examen * 0.30) + (trabajo * 0.15);

    document.getElementById("resultadoFinal").value = final.toFixed(2);
}

function borrarCalificacion() {
    document.getElementById("parcial1").value = "";
    document.getElementById("parcial2").value = "";
    document.getElementById("parcial3").value = "";
    document.getElementById("examenFinal").value = "";
    document.getElementById("trabajoFinal").value = "";
    document.getElementById("resultadoFinal").value = "";
}


function porcentajes() {
    var hombres = parseFloat(document.getElementById("hombres").value);
    var mujeres = parseFloat(document.getElementById("mujeres").value);

    if ([hombres, mujeres].some(isNaN) || hombres < 0 || mujeres < 0) {
        alert("Introduce cantidades válidas.");
        return;
    }

    var total = hombres + mujeres;
    if (total === 0) {
        alert("No puede haber grupo sin estudiantes.");
        return;
    }

    var porcH = (hombres / total) * 100;
    var porcM = (mujeres / total) * 100;

    document.getElementById("porcHombres").value = porcH.toFixed(2) + "%";
    document.getElementById("porcMujeres").value = porcM.toFixed(2) + "%";
}

function borrarPorcentajes() {
    document.getElementById("hombres").value = "";
    document.getElementById("mujeres").value = "";
    document.getElementById("porcHombres").value = "";
    document.getElementById("porcMujeres").value = "";
}


function edadPersona() {
    var anioNac = parseInt(document.getElementById("anioNac").value);
    var anioActual = parseInt(document.getElementById("anioActual").value);

    if (isNaN(anioNac) || isNaN(anioActual) || anioNac > anioActual) {
        alert("Introduce años válidos.");
        return;
    }

    var edad = anioActual - anioNac;
    document.getElementById("edad").value = edad + " años";
}

function borrarEdad() {
    document.getElementById("anioNac").value = "";
    document.getElementById("anioActual").value = "";
    document.getElementById("edad").value = "";
}

/*
Del ejercicio 1, tenemos que agregar el campo número de meses y será una inversión de máximo 18 meses

Del ejercicio 2 se deben ingresar 3 ventas, un sueldo base, y despues calcular el monto total, debe de aparecer cuanto cobra por comision y la suma total

Del ejercicio 3 debe de ingresar un producto, su precio y aplicarle el 15% de descuento y el sistema debe mostrar el producto, precio, descuento y total a pagar

Del ejercicio 4, se debe ingresar C1, C2, C3, se aplica el promedio y su porcentaje, se ingresa TF y se aplica % y examen final y se aplica el % se debe mostrar el total de calificacion

Del 5, ingresar cantidad de hombres y mujeres y mostrar sus % correspondientes

Del 6, Calcular la edad de una persona
*/