let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onlick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}