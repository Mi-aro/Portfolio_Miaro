AOS.init({ offset: 0 });
    // souris
const souris = document.querySelector('.souris');

document.addEventListener("mousemove", (e) => {
souris.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
});

    //responsive navbar js
    const menuBurger = document.querySelector('.menu_burger');
    const menuBurgerIcone = document.querySelector('.menu_burger i');
    const menuResponsive = document.querySelector('.menu_responsive');

menuBurger.onclick = function () {
    menuResponsive.classList.toggle('open_menu');
    const isOpen = menuResponsive.classList.contains('open_menu');
    menuBurgerIcone.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
}