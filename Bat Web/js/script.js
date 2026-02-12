const botonMenu = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
botonMenu.addEventListener('click', () => {
    
    navLinks.classList.toggle('show');

    if (navLinks.classList.contains('show')) {
        botonMenu.textContent = '✖';
    } else {
        botonMenu.textContent = '☰';
    }
});

