const cards = document.querySelectorAll('.card');
const btnRedefinir = document.getElementById('btnRedefinir');
const btnComprar = document.getElementById('btnComprar');
const resultado = document.getElementById('resultado');

cards.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("selecionado")
    })
})

cards.forEach(card => {
    btnRedefinir.addEventListener("click", () => {
        card.style.display = "";
        card.classList.remove("selecionado")
        resultado.innerText = "";
    })
})

// FUNÇÃO DE COMPRAR DEVE
// 1 - ESCONDER OS CARDS QUE NÃO ESTÃO SELECIONADOS #OK
// 2 - CALCULAR O PREÇO DOS CARDS VISIVEIS
// 3 - EXIBIR UM TOTAL DA SOMA DOS CARDS VISIVEIS

btnComprar.addEventListener("click", () => {
    let precoTotal = 0;

    cards.forEach(card => {
        if(!card.classList.contains("selecionado")) {
            card.style.display = "none";
        } else {
            precoTotal += parseFloat(card.dataset.preco);
        }
    });
    resultado.innerText = `Preço Total R$ ${precoTotal}`;
});