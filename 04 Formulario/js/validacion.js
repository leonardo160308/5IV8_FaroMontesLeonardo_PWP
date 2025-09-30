/* 
JavaScript es un lenguaje multiparadigma 
acepta la programcaion funcional, estructurada, orientada a objetos 
y orientada a eventos.
dentro de javascript no existe el tipado de variables no existe el int,string,float,etc
solo existen 3 tipos de variables de acuerdo al estandar ES6
VAR,LET,CONST
*/
function validar(formulario){
//quiero validar que el campo nombre acepte mas de 3 caracteres
if(formulario.nombre.value.length < 4){
    alert("Por favor escribe mas de 3 caracteres en el campo nombre");
    formulario.nombre.focus();
    return false;
    }
    //validacion letras
var checkStr = formulario.nombre.value;
alert(checkStr);
var abcOk="QWWERTYUIOPASDFGHJKLÑZXCVBNM"+"qwertyuiopasdfghjklñzxcvbnm";
var allValido=true;
//tenemos que comparar la cadena de nombre vs el abc
for (var i = 0; i < checkStr.length; i++) {
    var caracteres = checkStr.charAt(i);
    for (var j = 0; j < abcOk.length; j++) {
      if (caracteres == abcOk.charAt(j)) {
        esLetra = true;
        break;
      }
    }
    if (!esLetra) {
      allValido = false;
      break;
    }
  }

  if (!allValido) {
    alert("Escriba únicamente letras en el campo nombre");
    formulario.nombre.focus();
    return false;
  }

 // validación de edad (números)
var edadStr = formulario.edad.value;
  var soloNumeros = "0123456789";
  allValido = true;
  for (var i = 0; i < edadStr.length; i++) {
    var caracter = edadStr.charAt(i);
    var esNumero = false;
    for (var j = 0; j < soloNumeros.length; j++) {
      if (caracter == soloNumeros.charAt(j)) {
        esNumero = true;
        break;
      }
    }
    if (!esNumero) {
      allValido = false;
      break;
    }
  }
  if (!allValido) {
    alert("Escriba únicamente números en el campo edad");
    formulario.edad.focus();
    return false;
  }

//vamos a crear una funcion de una expresion regular para validar el correo electronico
//texto.texto@texto.texto 
var b = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var txt  = formulario.correo.value;
alert("Email"+(b.test(txt)?" ":"No")+"valido")
return b.test;
}


