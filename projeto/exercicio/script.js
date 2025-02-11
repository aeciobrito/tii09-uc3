// Menu Responsivo
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Efeito de Hover nas Imagens da Galeria
// # Flata algo para que o hoover seja aplicado corretamenteo no elemento
// # Aplique a correção e informe aqui como encontrou a solução
document.querySelectorAll('a').forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.1)';
    });
    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
    });
});

// Efeito OnClick nos Links
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        link.style.transform = 'scale(0.95)';
        setTimeout(() => {
            link.style.transform = 'scale(1)';
            window.location.href = link.href;
        }, 150);
    });
});

// Efeito de Loading ao Carregar a Página
window.addEventListener('load', () => {
    document.getElementById('loading').style.display = 'none';
});

// Scroll Progress Bar
// # Deveria funcionar ao rolar a página, mas acontece ao clicar
// # Aplique a correção e informe aqui como encontrou a solução
window.addEventListener('click', () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / scrollHeight) * 100;
    document.getElementById('progress-bar').style.width = `${scrolled}%`;
});

// Verificar Visibilidade das Seções
const sections = document.querySelectorAll('.fade-in');

const checkVisibility = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        if (sectionTop < window.innerHeight && sectionBottom > 0) {
            section.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', checkVisibility);
window.addEventListener('resize', checkVisibility);

checkVisibility();

// Slider da Hero Section
let index = 0;
const slides = document.querySelectorAll(".slide");

function showSlide() {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
    index = (index + 1) % slides.length;
}

// Iniciar o slider, troca de slide a cada 3 segundos
// # O Slide não está sendo chamado a cada 3 segundos
// # Aplique a correção e informe aqui como encontrou a solução