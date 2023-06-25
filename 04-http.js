const http = require("http")

const server = http.createServer((request, response) => {
    console.log(request.url)

    if(request.url === "/") {
        response.write("Welcome to the server")
        return response.end()
    }
    

    if(request.url === "/about") {
        response.write("about me")
        return response.end()
    }
    
    response.write(`
    <h1 style= "color: #dfa;">Not found</h1>
    <p>Esta pagina no se encontro</p>
    <a href="/">Volver a la pagina principal</a>
    `) 
    response.end()
})

console.log(server)
server.listen(3000, "127.0.0.1")


console.log("Servidor escuchando en el puerto 3000")