const getText = require("./08-promise")
const { readFile, writeFile } = require("fs")

async function readText () {
    try{ 
        const result = await getText("./data/lenguajesWeb.txt") 
        const result2 = await getText("./data/texto.txt") 
    
        console.log(result)
        console.log(result2)
    } catch(error) {
        console.log(error)
    }
}
readText()