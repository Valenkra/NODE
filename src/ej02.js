/* Importo la constante PI y la función sumar del módulo matematica. */
import {PI, sumar} from './src/modules/matematica.js';
let total, numero1=10, numero2=20;
console.clear();
console.log(`La constante PI vale '${PI}'`); // Uso la constante PI importada.
total = sumar(numero1, numero2); // Uso la función sumar importada.
console.log(`sumar(${numero1}, ${numero2}) = ${total}`);


/* Este es el módulo "matematicas" */
const PI = 3.14;
function sumar(x, y) {
// No seas vago, acá hay que hacer el cuerpo de la función!!!
}
const multiplicar = (a, b) => {
// No seas vago, acá hay que hacer el cuerpo de la función!!!
};
// Exporto todo lo que yo quiero exponer del módulo hacia el exterior.
export {PI, sumar, multiplicar};