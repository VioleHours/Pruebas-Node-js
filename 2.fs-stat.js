//File-system
const fs = require('node:fs'); // A partir de Node 16, se recomienda poner primero node:

const stats = fs.statSync('./index.txt');

console.log(
    stats.isFile(), //si es un fichero
    stats.isDirectory(), //si es un directorio
    stats.isSymbolicLink(), //si es un enlace simbólico
    stats.size, //tamaño en bytes
)