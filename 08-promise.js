const { readFile, writeFile } = require("fs")
const colors = require("colors")

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


// getText("./data/frameworks.txt")
//     .then( result => console.log(result))
//     .then(() => getText("./data/lenguajes.txt"))
//     .then( res => console.log(res,"\n fin archivo 08-promise \n".bgCyan))
//     .catch( error => console.log(error))


module.exports = getText
