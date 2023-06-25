const cards = document.querySelectorAll(".card");
const icono = document.querySelectorAll(".icon"); 
const modal_img = document.querySelector(".modal-img");
const add_img = document.querySelector(".add-img");
const close = document.querySelector(".close");


function removeActiveClasses() {
    cards.forEach(card => {
        card.classList.remove("active")
    })
}

// expanding cards
cards.forEach(card => {
    card.addEventListener("click", () => {
        removeActiveClasses();
        card.classList.add("active");
    })
})

// click icono
cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        icono.forEach(icons => {
            icons.addEventListener("click", () => {
                modal_img.style.display = "block";
                add_img.style.backgroundImage = getComputedStyle(card).backgroundImage
            })
        })
    })
})

// doble click
cards.forEach(imgs => {
    imgs.addEventListener("dblclick", () => {
        modal_img.style.display = "block";
        add_img.style.backgroundImage = getComputedStyle(imgs).backgroundImage
    })
})

// teclas
cards.forEach(card => {
    card.addEventListener("keydown", e => {
        let teclaPresionada = e.key.toLowerCase()
        if (teclaPresionada === "f") {
            if(modal_img.style.display === "block") {
                modal_img.style.display = "none"
            } else {
                modal_img.style.display = "block"
                add_img.style.backgroundImage = getComputedStyle(card).backgroundImage
            }
        }
        
        let salir = e.key 
        if (e.key === "Escape") modal_img.style.display = "none" 
    })
})



// tiene dos seleccionados ¡OJO!
close,modal_img.addEventListener("click", () => {
    modal_img.style.display = "none";
}) 




// button nada que ver con lo que estoy haciendo
    // button = document.querySelector(".button")

    // button.addEventListener("dblclick", () => {
    //     console.log("doble click")
    // })


    // button.addEventListener("keydown", () => {
    //     console.log("tecla")
    // })



