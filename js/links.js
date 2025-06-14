const navBar = document.querySelector("nav");
let navlinks = document.querySelectorAll("nav .nav-links a");
let menuToggler = document.getElementById("menu-toggler");
// let closemenuToggler = document.querySelector(".cross-icon");


menuToggler.addEventListener("click", () => navBar.classList.toggle("show-menu-icon"));

navlinks.forEach(link => {
    link.addEventListener("click", () => {
        navBar.classList.remove("show-menu-icon");


        // // Prevent hash from appearing in URL on nav link clicks
        // if (link.getAttribute('href') &&
        //     link.getAttribute('href').startsWith('#')) {
        //     link.addEventListener('click', (e) => {
        //         e.preventDefault();
        //         // Optionally, you can handle scroll or navigation here if needed.
        //         // For example, smooth scroll can be implemented here if anchors exist.
        //     });
        // }
    });
});


const header = document.getElementById('page-header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
})