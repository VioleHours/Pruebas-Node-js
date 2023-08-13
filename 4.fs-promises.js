const fs = require("node:fs/promises"); // para que no use callbacks y use promesas.

// Este caso solo se utilizaria en casos donde por algún motivo la version de node no aceptara promesas.
// const { promisify } = require("node:util")
// const readFilePromise = promisify(fs.readFile) 

console.log("Leyendo el primer archivo...");
fs.readFile("./index.txt", "utf-8")
    .then((text) => { //cuando se resuelva la promesa, hace el console.log
        console.log("primer texto:", text);
    });

console.log("Haciendo cosas mientras leo el texto...");

console.log("Leyendo el segundo archivo...");
fs.readFile("./archivo.txt", "utf-8")
    .then((texto) => {
        console.log("segundo texto:", texto);
    });
