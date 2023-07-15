const menubar = document.querySelector('.menuBurger i');
const bar = document.querySelector('ul')

menubar.addEventListener("click", myFunction);


function myFunction() {

    menubar.classList.toggle('bx-x');
    bar.classList.toggle('open');
}