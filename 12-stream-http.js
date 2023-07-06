const http = require("http")
const { createReadStream } = require("fs")

const app = http.createServer((req, res) => {
    const fileStream = createReadStream("./data/bigfile.txt", "utf-8")

    fileStream.on("data", (chunk) => {
        fileStream.pipe(res)
    }) 

    fileStream.on("error", (error) => {
        console.log(error)
    })
})

app.listen(3000)
console.log(`server on port ${3000}`)
