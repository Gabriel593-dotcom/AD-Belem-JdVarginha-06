const btnMobile = document.getElementById("btn-mobile");

btnMobile.addEventListener("touchstart", toggleMenu);

function toggleMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");

    const mobileSection = document.getElementById("content-container");
    mobileSection.classList.toggle("active");
}