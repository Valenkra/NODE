import { getCountryByAbbreviation, getCurrencyAbbreviation } from 'currency-map-country';


const obtenerMoneda = (abr) => {
    let monedaDelPais = getCurrencyAbbreviation(getCountryByAbbreviation(abr));
    if(monedaDelPais === undefined) return null;
    else return monedaDelPais;
}


let monedaDelPais, codigoPais;
codigoPais = 'AR';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

codigoPais = 'UZA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

codigoPais = 'UK';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

codigoPais = 'USA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

codigoPais = 'US';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

/*
codigoPais = getCountry('USA').abbr;
monedaDelPais = getCurrency(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);
*/

