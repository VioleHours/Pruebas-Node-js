// const os = require('os') //Importando un modulo nativo. pero ya no es recomendable utilizar el nombre del modulo.
const os = require('node:os') 

console.log('Información del sistema operativo:')
console.log('Nombre del sistema operativo:', os.platform());
console.log('Versión del sistema operativo:', os.release());
console.log('Arquitectura:', os.arch());
console.log('CPUs:', os.cpus()) //<- Con esto vamos a poder escalar procesos en Node.
console.log('Memoria libre:', os.freemem() / 1024 / 1024); // para obtener los megas
console.log('Memoria total:', os.totalmem() / 1024 / 1024); // igual que arriba.
console.log('uptime:', os.uptime() / 60 / 60);