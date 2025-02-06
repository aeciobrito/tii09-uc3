const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    const randomInt = Math.floor(Math.random() * 1000);
    panel.style.backgroundImage = `url(https://picsum.photos/seed/picsum/300/600?random=${randomInt})`;
});

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();        
        panel.classList.add('active');
    });
});


function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}