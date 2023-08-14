const fs = require('node:fs/promises');

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
        let fileStats
        try {
            fileStats = await fs.stat(filePath) // status - informacion 
        } catch {
            console.error(`No se puede leer el archivo ${filePath}`)
            process.exit(1)
        }

        const isDirectory = fileStats.isDirectory()
        const fileType = isDirectory ? 'd' : '-'
        const fileSize = fileStats.size 
        const fileModified = fileStats.mtime.toLocaleString()

        return `${fileType} ${file} ${fileSize.toString()} ${fileModified}`
    })
}