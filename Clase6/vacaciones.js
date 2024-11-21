const prompt = require("prompt-sync")({ sigint: true});
//organizando vacaciones con amigas
//¿cuantos dias seran?
let dias = prompt(`Cantidad de dias: `);
console.log(`El viaje durara ${dias} dias`);
//¿cuantas personas hay confirmadas?
let asistenciaConfirmada = ("4 personas")
console.log(`ya confirmaron ${asistenciaConfirmada} de 6`);
//en cuanto al hospedaje...
let hayHospedajeConfirmado = true;
if (hayHospedajeConfirmado == true) {
    console.log(`hay hospedaje confirmado en Cordoba` );};
//calcular presupuesto con el que debe contar cada una.

// 1.Pedir precion total del hospedaje por 5 dias para 6 personas
let precioHospedajexCincoDias = parseFloat(prompt(`Ingresa el precio de hospedaje por 5 dias para 6 personas: `));
console.log(`El precio del hospedaje por 5 dias es ${precioHospedajexCincoDias} , estadia para maximo 6 personas`);

//2.Pedir cantidad de personas a dividir el monto.
let cantidadDePersonasaPagar = parseFloat(prompt(`Ingresa cantidad de personas a dividir el monto: `));
console.log(`son ${cantidadDePersonasaPagar} personas para pagar el hospedaje`);

//Calcular monto a pagar individualmente.
let montoIndividual = (precioHospedajexCincoDias/cantidadDePersonasaPagar);
//mostrar el monto individual al ususario
console.log(`solo para pagar el hospedaje, el monto final por persona es: ${montoIndividual}`);