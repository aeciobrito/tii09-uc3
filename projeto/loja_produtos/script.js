const cards = document.querySelectorAll('.card');
const btnRedefinir = document.getElementById('btnRedefinir');

cards.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("selecionado")
    })
})

cards.forEach(card => {
    btnRedefinir.addEventListener("click", () => {
        card.classList.remove("selecionado")
    })
})