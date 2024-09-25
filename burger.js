const burger = document.querySelector('.header__burger');
const header = document.querySelector('.header');
const menu = document.querySelector('.menu');
const body = document.body;

const toggleMenu = () => {
    burger.addEventListener('click', () => {
        burger.classList.toggle('header__burger_opened');
        menu.classList.toggle('menu_opened');

        if (burger.classList.contains('header__burger_opened')) {
            body.style.overflow = 'hidden';
            header.style.height = '100vh';
        } else {
            body.style.overflow = 'visible';
            header.style.height = 'auto';
        }
    });
};

toggleMenu();
