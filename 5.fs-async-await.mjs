// Si lo pasamos a ES Modules, podemos usar el await en el cuerpo del archivo.
// Esto se llama TopLevelAwait 
// En CommonJs si o si necesitamos que el await esté dentro de una funcion. 

import { readFile } from "node:fs/promises";

console.log("Leyendo el primer archivo...");
const text = await readFile("./index.txt", "utf-8")
console.log("primer texto:", text);

console.log("Haciendo cosas mientras leo el texto...");

console.log("Leyendo el segundo archivo...");
const texto = await readFile("./archivo.txt", "utf-8")
console.log("segundo texto:", texto);
