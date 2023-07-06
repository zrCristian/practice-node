import express from "express"
import path from "path";
import { fileURLToPath } from "url"
import { dirname } from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()

app.get("/", (req, res) => {
    res.send("<h1> Hola mundo! </h1>")
})

app.get("/about", (req, res) => {
    const filePath = path.join(__dirname, "index.html")
    res.sendFile(filePath)
})



app.listen(3000)


console.log("listo")