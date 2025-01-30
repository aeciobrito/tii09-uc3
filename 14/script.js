document.addEventListener("DOMContentLoaded", () => {

    // Menu Dropdow
    const btnMenu = document.getElementById("btn-menu");
    const listaMenu = document.getElementById("lista-menu");

    btnMenu.addEventListener("click", () => {
        listaMenu.style.display = listaMenu.style.display === "block" ? "none" : "block";
    });

    // Painel lateral
    const abrirPainel = document.getElementById("abrir-painel");
    const fecharPainel = document.getElementById("fechar-painel");
    const painel = document.getElementById("painel-lateral");

    abrirPainel.addEventListener("click", () => {
        painel.style.right = "0";
    });

    fecharPainel.addEventListener("click", () => {
        painel.style.right = "-250px";
    });

    // Slider Automático
    const slides = document.querySelector(".slides");
    let index = 0;

    function mudarSlide() {
        index = (index + 1) % 4; // calcula o total de 3 slides
        slides.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(mudarSlide, 4000);
})