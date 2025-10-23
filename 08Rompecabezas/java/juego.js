var instrucciones=[
    "utiliza las flechas para mover las piezas,",
    "para ordenar las piezas guiate por la imagen objetivo,",
]
//gauardar dentro de una varibale los movimientos del rfompecabezas

var movimientos=[]

//crear una matriz para saber las posiciones de las piezas
var matriz=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
//crear una matriz para saber la posicion correcta de las piezas
var rompeCorrecta=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
//necesitamos saber la posicion de la pieza vacia
var filaVacia=2;
var columnaVacia=2;

//necesitamos una funcion que nos muestre las instrucciones
function mostrarInstrucciones(instrucciones){
    for(var i=0;i<instrucciones.length;i++){
        mostrarInstruccionesLista(instrucciones[i],
            "lista-instrucciones");
    }
}

//funcion se encarga de crear el componente li y agregarlo a la lista lista de dichas instrucciones
function mostrarInstruccionesLista(instruccion,lista){
    var ul=document.getElementById(lista);
    var li=document.createElement("li");
    li.innerHTML=instruccion;
    ul.appendChild(li);
}

//vamos a crear una funcion parea saber que gano
function checarsigano(){
    for(var i=0;i<rompe.length;i++){
        for(var j=0;j<rompe[i].length;j++){
            var romeActual=rompe[i][j];
            if(romeActual!=rompeCorrecta[i][j]){
                return false;
        }
    }
    }
    return true;
}

//mostrar html si gano
function mostrarSiGano(){
    if(checarsigano()){
        alert("Felicidades, ganaste el juego");
    }
    return false;
}

/*
necesita,os una funcion que se encargue de poder intercambiar
las posiciones de la pieza vacia vs cualquiera, para esto
tenemos que hacer el uso de :
arreglo[][] = posicion[][]
//intercambiar
posicion[][] = arreglo[][]
*/
function intercambiarPosiciones(filaPos1, columnaPos1, filaPos2, columnaPos2){
    var pos1 = rompe[filaPos1,columnaPos1];
    var pos2 = rompe[filaPos2,columnaPos2];
    //intercambio
    rompe[filaPos1,columnaPos1] = pos2;
    rompe[filaPos2,columnaPos2] = pos1;


} 
//actualizar la posicion de la pieza vacia

function actualizarPosicionVacia(nuevaFila,nuevaColumna){
    filaVacia=nuevaFila;
    columnaVacia=nuevaColumna;
}

//necesitamos limitar las posiciones del rompecabezas
function posicionValida(fila,columna){
    return (fila>=0 && fila<=2 && columna>=0 && columna<=2);
}

//debemos crear una funcion que se encargue del movinmiento detectando el movimiento de las flechas de navegacion.
//debemos crear una matriz de identificacion de los movimientos
//arriba = 38
//abajo = 40
//izquierda = 37
//derecha = 39
var codigosDireccion={
    IZQUIERDA:37,
    ARRIBA:38,
    DERECHA:39,
    ABAJO:40    
}//Formato JSON

function moverEnDireccion(direccion){
    var nuevaFilaPiezaVacia;
    var nuevaColumnaPiezaVacia;

    if(direccion===codigosDireccion.ABAJO){
        nuevaFilaPiezaVacia=filaVacia + 1;
        nuevaColumnaPiezaVacia=columnaVacia;
    }
    else if(direccion===codigosDireccion.ARRIBA){
        nuevaFilaPiezaVacia=filaVacia - 1;
        nuevaColumnaPiezaVacia=columnaVacia;
    }
    else if(direccion===codigosDireccion.DERECHA){
        nuevaFilaPiezaVacia=filaVacia;
        nuevaColumnaPiezaVacia=columnaVacia + 1;
    }
    else if(direccion===codigosDireccion.IZQUIERDA){
        nuevaFilaPiezaVacia=filaVacia;
        nuevaColumnaPiezaVacia=columnaVacia - 1;
    }

    //solo mando a llamar a que la posicion es valida
    if(posicionValida(nuevaFilaPiezaVacia,nuevaColumnaPiezaVacia)){
        //tengo que hacer una funcion qeu se encargue de intercambias las posiciones
        intercambiarPosiciones(filaVacia,columnaVacia,
        nuevaFilaPiezaVacia,nuevaColumnaPiezaVacia);
        actualizarPosicionVacia(nuevaFilaPiezaVacia,nuevaColumnaPiezaVacia);
        //guardar el ultimo movimiento
        agregarUltimoMovimiento(direccion);
    }
}

function intercambiarPosiciones(fila1, columna1, fila2, columna2){
    var pieza1 = rompe[fila1,columna1];
    var pieza2 = rompe[fila2,columna2];
    //intercambio ya debe de ser por parte de los frames y el html
    intercambiarPosicionesRompe(fila1,columna1,fila2,columna2);
    //para el html
    intercambiarPosicionesDOM('pieza'+ pieza1,'pieza' + pieza2);
}
//checar q pp
function intercambiarPosicionesDOM(idPieza1,idPieza2){
    var pieza1=document.getElementById(idPieza1);
    var pieza2=document.getElementById(idPieza2);
    //clonar las piezas
    var padre=elementoPieza1.parentNode;
    var padre2=elementoPieza2.parentNode;
    //lo clono
    var clonarElemento1=elementoPieza1.cloneNode(true);
    var clonarElemento2=elementoPieza2.cloneNode(true);
    //remplezar a los padres por sus clones
    padre.replaceChild(clonarElemento1,elementoPieza2);
    padre2.replaceChild(clonarElemento2,elementoPieza1);
}

function actualizarUltimoMovimiento(direccion){
    var ultimoMovimiento=document.getElementById("flecha");
    switch(direccion){
        case codigosDireccion.ARRIBA:
            ultimoMovimiento.textContent="↑";
            break;
        case codigosDireccion.ABAJO:
            ultimoMovimiento.textContent="↓";
            break;
        case codigosDireccion.DERECHA:
            ultimoMovimiento.textContent="→";
            break;
        case codigosDireccion.IZQUIERDA:
            ultimoMovimiento.textContent="←";
            break;
    }
}

//poder mezclar las piezas del rompecabezas

function mezclarPiezas(veces){
    if(veces<=0){
        alert("Asi no se puede");
        return;
}
    var direcciones=[codigosDireccion.ABAJO,
        codigosDireccion.ARRIBA,
        codigosDireccion.DERECHA,
        codigosDireccion.IZQUIERDA];

    var direccion=direcciones[Math.floor(Math.random()*direcciones.length)];

    moverEnDireccion(direccion);

    setTimeout(function(){
        mezclarPiezas(veces-1);
    },100);

    }

    //necesitamos saber que teclas se estan presionando
function capturarTeclas() {
    document.body.onkeydown = function(evento) {
        if(
            evento.which === codigosDireccion.ARRIBA ||
            evento.which === codigosDireccion.ABAJO ||
            evento.which === codigosDireccion.DERECHA ||
            evento.which === codigosDireccion.IZQUIERDA
        ){
            //saber si gane
            var gano=checarsigano();
            if(gano){
                setTimeout(function(){
                    mostrarCartelGanador();
                },500);
            }
            evento.preventDefault();
        }
    };
}

    

function iniciar(){
//mezclar las piezas del rompecabezas
mezclarPiezas(30);
capturarTeclas();
}
iniciar();
//mandamos a traeer a la funcion
mostrarInstrucciones(instrucciones)