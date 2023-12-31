const { ADDRGETNETWORKPARAMS } = require('node:dns');
const fs = require('node:fs/promises');
const path = require('node:path');

const folder = process.argv[2] ?? '.'

async function ls (dictory){
    let files 
    try {
        files = await fs.readdir(folder)
    } catch {
        console.error(`No se pudo leer el directorio ${folder}`)
        process.exit(1)
    }

    const filePromises = files.map(async file => {
        const filePath = path.join(folder, file)
        let stats
        try {
            stats = await fs.stat(filePath) // status - informacion 
        } catch {
            console.error(`No se puede leer el archivo ${filePath}`)
            process.exit(1)
        }

        const isDirectory = stats.isDirectory()
        const fileType = isDirectory ? 'd' : 'f'
        const fileSize = stats.size 
        const fileModified = stats.mtime.toLocaleString()

        return `${fileType} ${file.padEnd(20)} ${fileSize.toString().padStart(10)} ${fileModified}`
    })

    const filesInfo = await Promise.all(filePromises)

    filesInfo.forEach(fileInfo => console.log(fileInfo))
}

ls(folder)