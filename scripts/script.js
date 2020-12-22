const menuToggle = document.querySelector("#menu-toggle");
const activeElements = document.querySelectorAll(".active__element");
const headerMenu = document.querySelector('.header__menu');

menuToggle.addEventListener("click", function () {
    headerMenu.classList.toggle('menu__show');
    activeElements.forEach(function (e) {
        e.classList.toggle("active");
    });
})