const { readFilePromise, getText } = require("./08-creating-promises")

getText("./data/frameworks.txt")
    .then( result => console.log(result, "\n Fin 'getText' \n".bgCyan))
    .then(() => getText("./data/lenguajes.txt"))
    .then( res => console.log(res,"\n Fin 'getText' \n".bgCyan))
    .catch( error => console.log(error))

console.log(readFilePromise("./data/texto.txt"))
readFilePromise("./data/texto.txt", "utf-8")
    .then(res => console.log(res, "\n Fin 'readFilePromise' \n".bgMagenta))
    .catch(error => console.log(error))
