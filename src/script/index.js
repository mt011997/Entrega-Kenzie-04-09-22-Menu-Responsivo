class Animacao {

    static animation (){

        const header = document.querySelector(".container")
        const btn    = document.querySelector(".icone")
        
        btn.addEventListener("click", () => {
            header.classList.toggle("hidden")
        })
    }
}

Animacao.animation()