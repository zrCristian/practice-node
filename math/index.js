function add(x, y) {
    return x + y
}

function subtract(x, y) {
    return x - y
}

function multiply(x, y) {
    return x * y
}

function divide(x, y) {
    return x / y
} 

const user = {
    name: "Cristian",
    isDeveloper: true
}


console.log(module)


module.exports = {
    add, 
    subtract,
    multiply,
    divide,
    user
}


console.log(module)

// exports.user = {
//     name: "Cristian",
//     isDeveloper: true
// }


// exports.randomNum = () => {
//     return Math.round(Math.random() * 100)
// }

// exports.saludar = (name) => {
//     return `hola ${name}`
// }
