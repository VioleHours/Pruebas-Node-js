// const os = require('os') //Importando un modulo nativo. pero ya no es recomendable utilizar el nombre del modulo.
import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os'; 

console.log('Información del sistema operativo:')
console.log('Nombre del sistema operativo:', platform());
console.log('Versión del sistema operativo:', release());
console.log('Arquitectura:', arch());
console.log('CPUs:', cpus()) //<- Con esto vamos a poder escalar procesos en Node.
console.log('Memoria libre:', freemem() / 1024 / 1024); // para obtener los megas
console.log('Memoria total:', totalmem() / 1024 / 1024); // igual que arriba.
console.log('uptime:', uptime() / 60 / 60);