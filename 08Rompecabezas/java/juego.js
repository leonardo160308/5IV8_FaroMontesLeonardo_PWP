//arreglo con las instrucciones del juego
var instrucciones = [
    "utiliza las flechas para mover las piezas,",
    "para ordenar las piezas guíate por la imagen objetivo,"
]

//guardar dentro de una variable los movimientos del rompecabezas
var movimientos = []

//crear una matriz para saber las posiciones de las piezas
var matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

//crear una matriz para saber la posición correcta de las piezas
var rompeCorrecta = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

//necesitamos saber la posición de la pieza vacía
var filaVacia = 2;
var columnaVacia = 2;

//necesitamos una función que nos muestre las instrucciones
function mostrarInstrucciones(instrucciones){
    for(var i=0; i<instrucciones.length; i++){
        mostrarInstruccionesLista(instrucciones[i], "lista-instrucciones");
    }
}

//función que se encarga de crear el componente <li> y agregarlo a la lista de instrucciones
function mostrarInstruccionesLista(instruccion, lista){
    var ul = document.getElementById(lista);
    var li = document.createElement("li");
    li.innerHTML = instruccion;
    ul.appendChild(li);
}

//vamos a crear una función para saber si ganó
function checarsigano(){
    for(var i=0; i<matriz.length; i++){
        for(var j=0; j<matriz[i].length; j++){
            var piezaActual = matriz[i][j];
            if(piezaActual != rompeCorrecta[i][j]){
                return false;
            }
        }
    }
    return true;
}

//mostrar alerta si ganó
function mostrarSiGano(){
    if(checarsigano()){
        alert("🎉 Felicidades, ganaste el juego!");
    }
    return false;
}

/*
necesitamos una función que se encargue de poder intercambiar
las posiciones de la pieza vacía vs cualquiera, para esto
tenemos que hacer el uso de :
matriz[][] = posición[][]
//intercambiar
posición[][] = matriz[][]
*/
function intercambiarPosiciones(fila1, columna1, fila2, columna2){
    //guardamos la pieza de la primera posición
    var temporal = matriz[fila1][columna1];
    //intercambiamos las posiciones en la matriz
    matriz[fila1][columna1] = matriz[fila2][columna2];
    matriz[fila2][columna2] = temporal;

    //intercambiamos también en el HTML
    intercambiarPosicionesDOM('pieza' + matriz[fila1][columna1], 'pieza' + matriz[fila2][columna2]);
}

//función para intercambiar las piezas dentro del DOM (HTML)
function intercambiarPosicionesDOM(idPieza1, idPieza2){
    var pieza1 = document.getElementById(idPieza1);
    var pieza2 = document.getElementById(idPieza2);

    //clonar las piezas
    var padre1 = pieza1.parentNode;
    var padre2 = pieza2.parentNode;

    var clonarElemento1 = pieza1.cloneNode(true);
    var clonarElemento2 = pieza2.cloneNode(true);

    //reemplazar los elementos por sus clones
    padre1.replaceChild(clonarElemento2, pieza1);
    padre2.replaceChild(clonarElemento1, pieza2);
}

//actualizar la posición de la pieza vacía
function actualizarPosicionVacia(nuevaFila, nuevaColumna){
    filaVacia = nuevaFila;
    columnaVacia = nuevaColumna;
}

//necesitamos limitar las posiciones del rompecabezas
function posicionValida(fila, columna){
    return (fila >= 0 && fila <= 2 && columna >= 0 && columna <= 2);
}

//debemos crear una función que se encargue del movimiento detectando las flechas de navegación
//matriz de identificación de los movimientos:
//arriba = 38
//abajo = 40
//izquierda = 37
//derecha = 39
var codigosDireccion = {
    IZQUIERDA: 37,
    ARRIBA: 38,
    DERECHA: 39,
    ABAJO: 40    
} //Formato JSON

//función para mover las piezas según la dirección
function moverEnDireccion(direccion){
    var nuevaFilaPiezaVacia = filaVacia;
    var nuevaColumnaPiezaVacia = columnaVacia;

    if(direccion === codigosDireccion.ABAJO){
        nuevaFilaPiezaVacia = filaVacia + 1;
    }
    else if(direccion === codigosDireccion.ARRIBA){
        nuevaFilaPiezaVacia = filaVacia - 1;
    }
    else if(direccion === codigosDireccion.DERECHA){
        nuevaColumnaPiezaVacia = columnaVacia + 1;
    }
    else if(direccion === codigosDireccion.IZQUIERDA){
        nuevaColumnaPiezaVacia = columnaVacia - 1;
    }

    //solo mandamos a llamar si la posición es válida
    if(posicionValida(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia)){
        //intercambiamos las posiciones
        intercambiarPosiciones(filaVacia, columnaVacia, nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
        //actualizamos la pieza vacía
        actualizarPosicionVacia(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
        //guardamos el último movimiento
        actualizarUltimoMovimiento(direccion);
    }
}

//actualizar el último movimiento en pantalla
function actualizarUltimoMovimiento(direccion){
    var ultimoMovimiento = document.getElementById("flecha");
    switch(direccion){
        case codigosDireccion.ARRIBA:
            ultimoMovimiento.textContent = "↑";
            break;
        case codigosDireccion.ABAJO:
            ultimoMovimiento.textContent = "↓";
            break;
        case codigosDireccion.DERECHA:
            ultimoMovimiento.textContent = "→";
            break;
        case codigosDireccion.IZQUIERDA:
            ultimoMovimiento.textContent = "←";
            break;
    }
}

//poder mezclar las piezas del rompecabezas
function mezclarPiezas(veces){
    if(veces <= 0){
        return;
    }

    var direcciones = [
        codigosDireccion.ABAJO,
        codigosDireccion.ARRIBA,
        codigosDireccion.DERECHA,
        codigosDireccion.IZQUIERDA
    ];

    var direccion = direcciones[Math.floor(Math.random() * direcciones.length)];

    moverEnDireccion(direccion);

    //llamamos recursivamente para seguir mezclando
    setTimeout(function(){
        mezclarPiezas(veces - 1);
    }, 100);
}

//necesitamos saber qué teclas se están presionando
function capturarTeclas() {
    document.body.onkeydown = function(evento) {
        if(
            evento.which === codigosDireccion.ARRIBA ||
            evento.which === codigosDireccion.ABAJO ||
            evento.which === codigosDireccion.DERECHA ||
            evento.which === codigosDireccion.IZQUIERDA
        ){
            //mover en dirección de la tecla
            moverEnDireccion(evento.which);
            //verificar si ganó
            mostrarSiGano();
            evento.preventDefault();
        }
    };
}

//función que inicia el juego
function iniciar(){
    //mezclar las piezas del rompecabezas
    mezclarPiezas(30);
    //activar el teclado
    capturarTeclas();
}

//iniciamos el juego automáticamente
iniciar();
//mostramos las instrucciones
mostrarInstrucciones(instrucciones);
