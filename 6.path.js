const path = require('node:path')

// X no hacer esto para crear rutas --> './content/folder/text.txt'
// Porque las barras en unix --> /
// Y las barras en Windows --> \ 

console.log(path.sep); // Esto nos va a decir como son las rutas en nuestro sistema. --> Mi caso \

//unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'text.txt');
console.log(filePath);

//Nombre de un archivo/fichero
const base = path.basename('/temp/viole-secret-files/password.txt');
console.log(base);

//También podemos pedir el nombre del archivo/fichero y pedirle que nos quite la extensión.
const fileName = path.basename('/temp/viole-secret-files/password.txt', '.txt')
console.log(fileName);

//Uno de los más útiles del path es la extension. 
//Se suele usar mucho más de lo que se cree.
const extension = path.extname('image.png');
console.log(extension); 