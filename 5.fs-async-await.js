//Asincrono secuencial.

const { readFile } = require("node:fs/promises");

async function init() {
  console.log("Leyendo el primer archivo...");
  const text = await readFile("./index.txt", "utf-8");
  console.log("primer texto:", text);

  console.log("Haciendo cosas mientras leo el texto...");

  console.log("Leyendo el segundo archivo...");
  const texto = await readFile("./archivo.txt", "utf-8");
  console.log("segundo texto:", texto);
}

init();

//función auto invocada -->
// (async () => {
//   console.log("Leyendo el primer archivo...");
//   const text = await readFile("./index.txt", "utf-8");
//   console.log("primer texto:", text);

//   console.log("Haciendo cosas mientras leo el texto...");

//   console.log("Leyendo el segundo archivo...");
//   const texto = await readFile("./archivo.txt", "utf-8");
//   console.log("segundo texto:", texto);
// })(); // IIFE - Inmediatly Invoked Function Expression.
