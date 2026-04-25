// menu mobile
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('navbar-menu');

if (toggle && menu) {
    toggle.addEventListener('click', () => {
        const expanded = toggle.getAttribute('aria-expanded') === 'true' ? false : true;
        toggle.setAttribute('aria-expanded', expanded);
        menu.classList.toggle('active');
    });
}

// optionnel : fermer le menu mobile après un clic sur un lien
const navLinks = document.querySelectorAll('.navbar-menu .nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768 && menu.classList.contains('active')) {
            menu.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
        }
    });
});