// Asincrono paralelo
import { readFile } from "node:fs/promises";

//Lo bueno de este metodo es que estamos haciendo dos cosas en paralelo. Y nos aseguramos que nosotros controlamos lo que se muestra en consola.

Promise.all([
    readFile("./index.txt", "utf-8"),
    readFile("./archivo.txt", "utf-8")
]).then(([text, texto]) =>{
    console.log("primer texto:", text);
    console.log("segundo texto:", texto);
})

