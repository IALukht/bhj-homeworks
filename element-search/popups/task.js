const modalMain = document.getElementById("modal_main");
modalMain.classList.add("modal_active");

const modalClosed = document.getElementsByClassName("modal__close");
        
for (let i = 0; i < modalClosed.length; i++) {
    modalClosed[i].addEventListener("click", function () {
        this.parentElement.parentElement.classList.remove("modal_active");
    });
}

const showSuccess = document.getElementsByClassName("show-success");
for (let i = 0; i < showSuccess.length; i++) {
    showSuccess[i].addEventListener("click", function () {
        const windowTwo = document.getElementById("modal_success");
        windowTwo.classList.add("modal_active");
    });
}
