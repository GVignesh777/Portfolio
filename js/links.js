const navBar = document.querySelector("nav");
let menuToggler = document.getElementById("menu-toggler");
// let closemenuToggler = document.querySelector(".cross-icon");


menuToggler.addEventListener("click", () => navBar.classList.toggle("show-menu-icon"));
// closemenuToggler.addEventListener("click", () => navBar.classList.remove("show-menu-icon"));




const header = document.getElementById('page-header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
})