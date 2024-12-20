//Solicite al usuario que ingrese un número cualquiera
const prompt = require('prompt-sync')(); 
let numero = prompt("Ingrese un numero: ");
console.log(`Usted ingreso el numero ${numero}`);

//Calcule el doble de ese número. 
let dobleDeNumero = (numero*2)
//mostrar resultado en la consola
console.log(`el doble de su numero es ${dobleDeNumero}`);

