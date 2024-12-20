//Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con 
//valores numéricos de tu elección. Pide al usuario que ingrese un 
//número y verifica si está dentro del rango definido por las constantes. 

const prompt = require('prompt-sync')();

const RANGO_MINIMO = 18;
const RANGO_MAXIMO = 45;

let edad = parseFloat(prompt("Ingrese su edad: "));

if(edad > RANGO_MINIMO && edad < RANGO_MAXIMO){
    console.log("Usted puede aplicar a esta beca")
}else{
    console.log("Usted no comple con la edad permitida para aplicar a esta beca")
}
