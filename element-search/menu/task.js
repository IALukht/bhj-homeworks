
const menuLink = Array.from(document.querySelectorAll(".menu__link"));
menuLink.forEach(elem =>{
    elem.onclick = function () {
        const menuActive = document.querySelector(".menu_active");
            if(menuActive) {
            if(menuActive !== elem.nextElementSibling) {
                menuActive.classList.remove("menu_active");
            }
        }
            elem.nextElementSibling.classList.toggle("menu_active");
            return false;
        }
    
})
