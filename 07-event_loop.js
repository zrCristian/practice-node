const http = require("http")

const server = http.createServer( (req, res) => {
    if (req.url == "/") {
        res.write("Welcome to the server")
        return res.end()
    }

    if (req.url == "/about") {
        // blocking code
        for (let i = 0; i < 5000; i++) {
            console.log(Math.random() * i)
        }
        return res.end("About page")
    }

    res.end(`
    <h1 style= "color: #dfa;">Not found</h1>
    <p>Esta pagina no se encontro</p>
    <a href="/">Volver a la pagina principal</a>
    `)
})

server.listen(3000)
console.log("server on port 3000")