//ejercicio 1 
// consultaremos disponibilidad en alojamiento
//declaramos la variable dias y disponibilidad
let dias = 15

// comparar disponibilidad con estadía, no contra días (disponibilida debería ser variable numérica)
let disponibilidad = " "; // string no vacío
if (dias >15) { // revisar signo
 disponibilidad = "sin cupo" ;
} else if (dias >=15) {
disponibilidad = "habilitada" ;
}

const prompt = require("prompt-sync")();
let estadia = parseFloat(prompt( "ingresa cantidad de dias de su estadia: ")); // no estás usando la variable estadía

console.log("La cantidad de dias solicitada se encuentra: ", disponibilidad);


