import { getCurrency } from 'currency-map-country';

let monedaDelPais, codigoPais;
codigoPais = 'AR';
monedaDelPais = getCurrency(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);
codigoPais = 'USA';
monedaDelPais = getCurrency(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);


