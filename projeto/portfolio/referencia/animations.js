const hero = document.querySelector("#hero");
const heroPosition = hero.getBoundingClientRect();

const about = document.querySelector('#about .about_content');

// Função para gerenciar animações no Hero, Sobre, e Work
function handleScrollAnimatinos() {
    if(heroPosition.top < window.innerHeight) {
        hero.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        hero.style.opacity = 1; // deixa totalmente visível
        hero.style.transform = 'translateY(0)'; // traz de volta para sua posição original
    }
}


window.addEventListener('load', () => {
    hero.style.opacity = 0; // deixa totalmente transparente
    hero.style.transform = 'translateY(-100px)'; // move para fora da tela

    window.addEventListener('scroll', handleScrollAnimatinos);
    //handleScrollAnimatinos()
});