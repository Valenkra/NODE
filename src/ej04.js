import fs from 'fs';

const ARCHIVO_ENTRADA = "./archivo-entrada.txt";
const ARCHIVO_SALIDA = "./archivo-salida.txt";
console.clear();

copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);
function copiar(origen, destino){
    fs.readFile(origen, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        fs.writeFileSync(destino, data, err => {
            if (err) {
            console.error(err);
            return;
            }
        });
    });
}

fs.readFile(ARCHIVO_SALIDA, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});