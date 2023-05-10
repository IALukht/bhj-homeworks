
const menuLink = Array.from(document.querySelectorAll(".menu__link"));
let activeMenu;

menuLink.forEach(element => {
    element.onclick = function() {
        const menuSub = element.closest('.menu__item').querySelector('.menu_sub')
        if (menuSub) {
            if (menuSub !== activeMenu && activeMenu) {
                activeMenu.classList.remove('menu_active');
            }
            menuSub.classList.toggle('menu_active');

            activeMenu = menuSub;
            return false;
        }
    }
});
