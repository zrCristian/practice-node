const { readFilePromise, getText } = require("./08-creating-promises")


async function readText () {
    try{ 
        const br = "\n Fin... \n".bgBlack
        const result = await getText("./data/lenguajesWeb.txt") 
        const result2 = await getText("./data/texto.txt") 
        const result3 = await readFilePromise("./data/frameworks.txt", "utf-8") 

        console.log(result, br)
        console.log(result2, br)
        console.log(result3, br)
    } catch(error) {
        console.log(error)
    }
}


readText()