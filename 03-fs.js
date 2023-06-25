const fs = require("fs")

// -- Sincrono -- 
const textoArchivo = fs.readFileSync("./data/texto.txt", "utf-8")
const lenguajesArchivo = fs.readFileSync("./data/lenguajes.txt", "utf-8")

// console.log(textoArchivo)
// console.log(lenguajesArchivo)

const frameworks = "1. React \n2. Django \n3. Spring boot"
fs.writeFileSync("./data/frameworks.txt", frameworks, {
    // flag:  "a" // append => añadimos y NO sobrescribimos
})


// -- Asincrono --
fs.readFile("./data/lenguajes.txt", "utf-8", (error, data) => {
    if (error) {
        console.log(error)
    } 
    console.log(data)

    fs.readFile("./data/frameworks.txt", "utf-8", (error, data) => {
        if (error) {
            console.log(error)
        } 
        console.log(data)

        fs.writeFile("./data/lenguajesWeb.txt", "HTML5, CSS3, Javascript", (error, data) => {
            console.log(error)
            console.log(data)


        })
    }) 
})


