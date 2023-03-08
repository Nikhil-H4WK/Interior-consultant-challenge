const ham = document.querySelector('.hamburger');
const nav = document.querySelector('.navv');
const body = document.querySelector('body');

ham.addEventListener('click', () => {
    ham.classList.toggle('active');
    body.classList.toggle('active');
    nav.classList.toggle('active');

});