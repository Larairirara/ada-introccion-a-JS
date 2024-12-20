const prompt = require("prompt-sync")({ sigint: true }); 
//Pida al usuario que ingrese un número. 
let numero = parseFloat(prompt(`ingrese un numero: `));
let cupo = '';

if ( numero > 10){
cupo = 'rechazado';
} else if (numero <= 10 && numero >= 5) {
cupo = 'aguarde respuesta'
} else {
cupo = 'otorgado';
}
console.log(`respuesta su solicitud de cupo: ${cupo}`);


