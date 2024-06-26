/* Importo la constante PI y la función sumar del módulo matematica. */
import {PI, sumar, dividir, restar, multiplicar} from './modules/matematica.js';

let total, numero1=10, numero2=20;
let numeros =  ["dos", "cuatro", "ocho", "diez"];
console.clear();
console.log(`La constante PI vale '${PI}'`); // Uso la constante PI importada.
total = sumar(numero1, numero2); // Uso la función sumar importada.
console.log(`sumar(${numero1}, ${numero2}) = ${total}`);

total = restar(numero1, numero2); // Uso la función sumar importada.
console.log(`restar(${numero1}, ${numero2}) = ${total}`);

total = multiplicar(numero1, numero2); // Uso la función sumar importada.
console.log(`multiplicar(${numero1}, ${numero2}) = ${total}`);

total = dividir(numero1, numero2); // Uso la función sumar importada.
console.log(`dividir(${numero1}, ${numero2}) = ${total}`);

numeros.forEach(num => {
    console.log(num);
});