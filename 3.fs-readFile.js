const fs = require('node:fs'); 

console.log('Leyendo el primer archivo...')
// const text = fs.readFileSync('./index.txt', 'utf-8'); // Forma Sincronica de leer archivos.

// Por default la forma de leerlo es asincrónica 
fs.readFile('./index.txt', 'utf-8', (err, text) => { //acepta un callback y lo ejecuta cuando se le llame. 
    console.log('primer texto:', text)
}); 

console.log('Haciendo cosas mientras leo el texto...');

console.log('Leyendo el segundo archivo...')
fs.readFileSync('./archivo.txt', 'utf-8', (err, texto) => {
    console.log('segundo texto:', texto);
});
