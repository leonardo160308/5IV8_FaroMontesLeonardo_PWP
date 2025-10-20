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






function iniciar(){
//mezclar las piezas del rompecabezas

}

//mandamos a traeer a la funcion
mostrarInstrucciones(instrucciones);