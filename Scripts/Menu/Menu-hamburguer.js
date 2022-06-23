const btnMobile = document.getElementById('Menu__botao');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const Menu = document.getElementById('Menu');
    Menu.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);