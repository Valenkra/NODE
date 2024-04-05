const miURL = 'dfgdfgdfgdfg?';
let URLObj = {
    host: null,
    pathname: null,
    parametros: null
}


function parseUrl(miURL){
    try{
        let myURL = new URL(miURL);
        URLObj.host = myURL.origin;
        URLObj.pathname = myURL.pathname;
        let parametros = miURL.split("?");
        URLObj.parametros = (parametros.length > 1) ? new URLSearchParams(parametros[1]) : "";
        return true;
    }
    catch (error) {
        console.log("ERROR! Este codigo no puede ejecutarse URL Invalida (" + error + ")");
        return false;
    }
    
}

console.log(URLObj);