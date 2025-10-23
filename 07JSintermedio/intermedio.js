/*
js maneja variables del siguiente modo:

var -> una variable de acceso local y glonbaol dependiendo de donde se declare
let -> es una variable "prtotegida , solo se puede hacer uso dentro de la funcion o bloque donde se declara"
cost -> es una variaboe que no puede cambiar su valor, es una constante 




var x = "hola";


if(true){
    let x ="habia una vez"
}
console.log(x);


//como usamos la funciones

function suma(n1,n2){
    return n1+n2;
}
console.log(`esta suma es de ${suma(5,3)}`)

//las funciones flecha, nos ayudan a poder realizar operaciones de una forma mucho mas sencilla, de acuerdo a la siguiente estrucvcvtura
//"cadena"-> id,clase,metodo,nombre,atributo

const suma =(n1,n2)=> n1+n2;
console.log(`esta suma es de ${suma(5,3)}`)



const razasDePerros=[
    "Pastor Aleman",
    "Labrador Retriever",
    "Bulldog Frances",
    "Beagle",
    "Chihuahua",
    "Dalmata",
    "Salchica",
    "Pug"
];
//formas de recorrer un arreglo
//for 
for(let i=0; i< razasDePerros.length; i++){
    console.log(razasDePerros[i]);
}

//for of
for(const raza of razaDePerros){
    console.log(raza);
}

// for in 
for(const indice in razasDePerros){
    console.log(razasDePerros[indice]);
}
       
//forEach itera sobre los elementos del arreglo y no devuelve nada
//todos los foreach son funciones flecha por defecto

razasDePerros.forEach(raza=>console.log(raza));
//la estructura general del for each es la siguiente 
//arreglo.forEach((raza, indice, arregloOriginal)=>{codigo a ejecutar})

razasDePerros.forEach((raza, indice,razasDePerros) => console.log(raza));
 
//funcion MAP -> iterar sibre los elemento sdel arrreglo, y regresa un arreglo diferente conel cual podemos jugar
const razaDePerrosMayusculas = razasDePerros.map(raza=>raza,toUpperCase());
console.log(razaDePerrosMayusculas);

//FIND -> nos permire realizare iuna busqueda de un elemento dentro del arreglo, si lo encuentr, lo retorna sino lanza un "undifine"
if(razasDePerros.find(raza=> === "Chihuahua")){
    console.log("Si se encontro la raza");
    console.log(razasDePerros);
}else{
    //hay que meterlo
    razasDePerros.push("Chihuahua");
    console.log(razasDePerros);
}

   //EINDEX -> nos permite realizar una busqueda de un elemento adrentro del arreglom si no lp ewncuetra, regresa el inice del eletentom sino re¿gresa-1,esta funcion es particuylarmetne util cuando necesitamso modificar o eliuminar un arreglo original, dentro de una copia del mismo

   const indiceChihuahua=razasDePerros.findIndex(raza=> raza === "Chihuahua");
   if(indiceChihuahua > -1){
    //si se encontro  y esta dentro del arreglo 
    console.log(razasDePerros[indiceChihuahua]);
    //aparte le voy a decir que agrege un texto a a este resultado
    razasDePerros[indiceChihuahua] += "(es una raza de perros chiquita y chilona )";
    console.log(razasDePerros[indiceChihuahua]);
    console.log(razasDePerros);
   }
   */

   // scripts.js
// Manejo con const / let, funciones flecha, y comentarios estilo aprendizaje

// ============= EJERCICIO 1 =============
const form1 = document.getElementById("form-ej1");
const resultado1 = document.getElementById("ej1-resultado");

form1.addEventListener("submit", (e) => {
  e.preventDefault();

  const n1 = parseFloat(document.getElementById("ej1-n1").value);
  const n2 = parseFloat(document.getElementById("ej1-n2").value);

  if (isNaN(n1) || isNaN(n2)) {
    resultado1.textContent = " Ingresa números válidos.";
    return;
  }

  if (n1 === n2) {
    resultado1.textContent = `Los números son iguales (${n1}) y por tanto son múltiplos.`;
  } else if (n1 > n2) {
    resultado1.textContent = `El primero (${n1}) es mayor. Resta: ${n1 - n2}`;
  } else {
    resultado1.textContent = `El primero (${n1}) no es mayor. Suma: ${n1 + n2}`;
  }
});

// ============= EJERCICIO 2 =============
const form2 = document.getElementById("form-ej2");
const resultado2 = document.getElementById("ej2-resultado");

form2.addEventListener("submit", (e) => {
  e.preventDefault();

  const a = parseFloat(document.getElementById("ej2-a").value);
  const b = parseFloat(document.getElementById("ej2-b").value);
  const c = parseFloat(document.getElementById("ej2-c").value);

  if ([a, b, c].some(isNaN)) {
    resultado2.textContent = "Ingresa los tres números.";
    return;
  }

  if (a === b || a === c || b === c) {
    resultado2.textContent = "Los números deben ser diferentes.";
    return;
  }

  const mayor = Math.max(a, b, c);
  resultado2.textContent = `El número mayor es: ${mayor}`;
});

// ============= EJERCICIO 3 =============
const form3 = document.getElementById("form-ej3");
const resultado3 = document.getElementById("ej3-resultado");

form3.addEventListener("submit", (e) => {
  e.preventDefault();

  const salario = parseFloat(document.getElementById("ej3-salario").value);
  const horas = parseFloat(document.getElementById("ej3-horas").value);

  if (isNaN(salario) || isNaN(horas) || salario < 0 || horas < 0) {
    resultado3.textContent = "Ingresa valores positivos válidos.";
    return;
  }

  const tarifa = salario / 160; // 40h * 4 semanas
  let pagoExtra = 0;

  if (horas > 40) {
    const extras = horas - 40;
    if (extras <= 8) {
      pagoExtra = extras * tarifa * 2;
    } else {
      pagoExtra = (8 * tarifa * 2) + ((extras - 8) * tarifa * 3);
    }
  }

  resultado3.textContent = `Tarifa/hora: $${tarifa.toFixed(2)} | Pago extra semanal: $${pagoExtra.toFixed(2)}`;
});


const form4 = document.getElementById("form-ej4");
const resultado4 = document.getElementById("ej4-resultado");

form4.addEventListener("submit", (e) => {
  e.preventDefault();

  const salario = parseFloat(document.getElementById("ej4-salario").value);
  const antiguedad = parseFloat(document.getElementById("ej4-antig").value);

  if (isNaN(salario) || isNaN(antiguedad) || salario < 0 || antiguedad < 0) {
    resultado4.textContent = "Ingresa salario y antigüedad válidos.";
    return;
  }

  let porcentaje = 0;
  if (antiguedad < 1) porcentaje = 0.05;
  else if (antiguedad < 2) porcentaje = 0.07;
  else if (antiguedad < 5) porcentaje = 0.10;
  else if (antiguedad < 10) porcentaje = 0.15;
  else porcentaje = 0.20;

  const utilidadMensual = salario * porcentaje;
  const utilidadAnual = utilidadMensual * 12;

  resultado4.textContent = `Antigüedad: ${antiguedad} años → ${porcentaje * 100}% 
  | Utilidad mensual: $${utilidadMensual.toFixed(2)} 
  | Utilidad anual: $${utilidadAnual.toFixed(2)}`;
});
