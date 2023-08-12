//Patron de diseño MODULO
// lo que haremos es separar nuestro codigo en diferentes ficheros y los vamos a poder importar y exportar para que ese
// codigo, se reutilize. 

//CommonJS require module
const { sum } = require('./sum')
console.log(sum(1, 3))