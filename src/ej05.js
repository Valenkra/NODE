const miURL = 'https://campus.ort.edu.ar/secundaria/almagro/quimica/articulo/1899494/ce-cee-periodo-y-grupo-2-parte';
let URLObj = {
    host: "",
    pathname: "",
    parametros: ""
}

parseUrl(miURL);

function parseUrl(miURL){
    let myURL = new URL(miURL);
    URLObj.host = myURL.origin;
    URLObj.pathname = myURL.pathname;
    let parametros = miURL.split("?");
    URLObj.parametros = (parametros.length > 1) ? new URLSearchParams(parametros[1]) : null;
    
}

console.log(URLObj);