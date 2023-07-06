const colors = require("colors")
const { readFile } = require("fs")
const { promisify } = require("util")
const { readFile: anotherWay, writeFile } = require("fs/promises")
// de esta ultima forma, nos ahorramos la linea 3 y 7, y la funcion getText

const readFilePromise = promisify(readFile)

function getText(pathFile) {
    return new Promise(function (resolve, reject) {
        readFile(pathFile, "utf-8", (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(data)
        })
    })
}

module.exports = {
    readFilePromise,
    getText,
    anotherWay
}

// console.log(module)