// Navbar Menu
let menuIcon = document.querySelector("#menu-icon");
let navBar = document.querySelector(".navbar ul");

menuIcon.onclick = function () {
    menuIcon.classList.toggle("bx-x");
    navBar.classList.toggle("navActive");
};

document.addEventListener("click", function (event) {
    if (!navBar.contains(event.target) && !menuIcon.contains(event.target)) {
        navBar.classList.remove("navActive");
        menuIcon.classList.remove("bx-x");
    };
});