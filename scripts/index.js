const ham = document.querySelector('.hamburger');
const nav = document.querySelector('.navv');
const body = document.querySelector('body');
const logo = document.querySelector('.logo');
const mainContent = document.querySelector('main');

ham.addEventListener('click', () => {
    ham.classList.toggle('active');
    body.classList.toggle('active');
    nav.classList.toggle('active');


});