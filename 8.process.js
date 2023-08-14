//process es un objeto global que proporciona informacion y control sobre el proceso actual de ejecusión.
// argumentos de entrada. 

console.log(process.argv);
// los elementos de 'node 8.process.js Viole pruebas node ----uuuu Viole'
// [
// 'ubicacion de NodeJs 
// ubicacion del archivo 8.process.js
// String 'Viole'
// String 'pruebas'
// String 'node'
// String '----uuuu'
// String 'Viole'
// ]

//controlar el proceso y su salida.
process.exit(0)
//0 --> Todo ha ido bien y el proceso tiene que terminar ahí
//1 --> Ha habido algún error y queremos que salga porque sino se puede trabar. 

//Podemos controlar eventos del proceso.
process.on('exit', () => {
    //limpiar los recursos o la consola.
})

//current working drectory
console.log(process.cwd());

//platform
//Las variables de entorno que nosotros le pasemos
console.log(process.env.NODE_ENV);