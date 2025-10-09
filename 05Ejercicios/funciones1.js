function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function interes(){
        var valor = document.getElementById("cantidadi").value;

        var parseo = parseFloat(valor);
        alert(parseo);
        var interes = parseo*(0.085); //limite a 2 decimales
        alert(interes);
        var total = interes + parseo;
        alert(total);
        document.getElementById("saldoi").value = "$" + total; //limite a 2 decimales
}

function borrarf(){
    document.getElementById("saldoi").value = "";
    document.getElementById("cantidadi").value = "";
}

/*
Del ejercicio 1, tenemos que agregar el campo número de meses y será una inversión de máximo 18 meses

Del ejercicio 2 se deben ingresar 3 ventas, un sueldo base, y despues calcular el monto total, debe de aparecer cuanto cobra por comision y la suma total

Del ejercicio 3 debe de ingresar un producto, su precio y aplicarle el 15% de descuento y el sistema debe mostrar el producto, precio, descuento y total a pagar

Del ejercicio 4, se debe ingresar C1, C2, C3, se aplica el promedio y su porcentaje, se ingresa TF y se aplica % y examen final y se aplica el % se debe mostrar el total de calificacion

Del 5, ingresar cantidad de hombres y mujeres y mostrar sus % correspondientes

Del 6, Calcular la edad de una persona
*/