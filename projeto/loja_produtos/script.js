const cards = document.querySelectorAll('.card');
const btnRedefinir = document.getElementById('btnRedefinir');
const btnComprar = document.getElementById('btnComprar');
const resultado = document.getElementById('resultado');
const telefoneDoWhatsapp = "5511948887050";
const whatsappLink = document.getElementById("whatsappLink");

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

btnComprar.addEventListener("click", () => {
    let precoTotal = 0;
    let listaProdutos = [];

    cards.forEach(card => {
        if(!card.classList.contains("selecionado")) {
            card.style.display = "none";
        } else {
            listaProdutos.push(
                card.querySelector("div:first-child").textContent + " R$ $" + card.dataset.preco);
            precoTotal += parseFloat(card.dataset.preco);
        }
    });
    resultado.innerText = `Preço Total R$ ${precoTotal}`;

    const mensagem = encodeURI(`Olá, gostaria de comprar os seguintes produtos:\n\n${listaProdutos.join("\n")}\n\n Preço Total R$ ${precoTotal}`);

    whatsappLink.href = `https://wa.me/${telefoneDoWhatsapp}?text=${mensagem}`;


});