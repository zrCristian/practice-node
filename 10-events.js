const eventEmitter = require("events") // crear un nuevo evento
// import eventEmitter from "events"

const customEmitter = new eventEmitter()

customEmitter.on("response", (data, secondData) => {
    console.log("received")
    console.log(data)
    console.log(secondData)
    console.log()
})

customEmitter.emit("response", [{name: "cristian"}, [1, 2]], "parametro")
customEmitter.emit("response", "parametro", [1,2,3])
