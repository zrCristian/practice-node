import "colors"
// ex...
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

// export default add

export default {
    add, 
    subtract,
    multiply,
    divide,
    user
}

// module.exports = {
//     add, 
//     subtract,
//     multiply,
//     divide,
//     user
// }
