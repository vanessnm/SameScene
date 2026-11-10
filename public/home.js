const homeOpenMenu = document.getElementById('openMenu');
const homeCloseMenu = document.getElementById('closeMenu');
const desktopMenu = window.matchMedia('(min-width: 1051px)');

function syncHomeMenu() {
    const open = document.body.classList.contains('menu-open') ||
        (desktopMenu.matches && !document.body.classList.contains('menu-closed'));
    homeOpenMenu.setAttribute('aria-expanded', String(open));
    homeOpenMenu.hidden = open;
    document.getElementById('sideMenu').inert = !open;
}

homeOpenMenu.addEventListener('click', () => {
    document.body.classList.remove('menu-closed');
    syncHomeMenu();
    homeCloseMenu.focus();
});

homeCloseMenu.addEventListener('click', () => {
    document.body.classList.add('menu-closed');
    syncHomeMenu();
    homeOpenMenu.focus();
});

desktopMenu.addEventListener('change', syncHomeMenu);
syncHomeMenu();
