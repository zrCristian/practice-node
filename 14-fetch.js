
// const res = fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))




// async function devolver() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
// }

// devolver()

// con las nuevas caracteristicas de ES 2022 podria sacar la funcion devolver y usar solo la linea 12-14 y tmb puedo usarlo con try-catch
// esta relacionado con los type module 