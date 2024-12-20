const prompt = require('prompt-sync')();
// crear saludo automatico de bienvenida en app de musica
let nombre = prompt(`ingrese su nombre: `);
let genero = prompt(`ingrese gusto su preferencia de genero musical: `);
console.log(`Hola ${nombre}, es un placer tenerte por aca. Si tu genero musical favorito es ${genero}, ¡tenemos buenas
noticias!, aca vas a encontrar lo mejor en ${genero} a nivel global. Nos aseguraremos de que tu experiencia sea de lujo.
Que disfrutes ${nombre}`);

