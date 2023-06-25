const path = require("path")

const filePath = path.join("/public", "dist", "styles/", "main.css")

console.log(filePath)
console.log(path.basename(filePath))
console.log(path.dirname(filePath))
console.log(path.parse(filePath)) // Muestra el path en formato de un objeto
console.log(path.resolve("src")) // completa la ruta que le pasamos a partir de la ruta inicial de OS  

const newPath = path.join("components", "app.jsx")
console.log(path.resolve(newPath))
