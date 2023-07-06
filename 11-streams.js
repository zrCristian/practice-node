const { writeFile } = require("fs/promises")
const { createReadStream } = require("fs")
const colors = require("colors")

// writeFile("./data/bigfile.txt", "Hello world".repeat(100000))
//     .then(e => { })
//     .catch(error => console.log(error))


const stream = createReadStream("./data/bigfile2.txt", {
    encoding: "utf-8",
    // highWaterMark
})

stream.on("data", (chunk) => {
    console.log(chunk)
})

stream.on("end", () => {
    console.log("finalizo de ...".bgBlue)
})

stream.on("error", error => {
    console.log(error)
})

console.log("despues ")