const signin = document.getElementById("signin");
const signinForm = document.getElementById("signin__form");
const welcome = document.getElementsByClassName("welcome");
const spanId = document.getElementById("user_id");

const xhr = new XMLHttpRequest();
const url = "https://students.netoservices.ru/nestjs-backend/auth";

function showUser() {
   signin.classList.remove("signin_active");
   welcome[0].classList.add("welcome_active");
   spanId.textContent = localStorage.getItem(`user_id`);
}

function showOut() {
   welcome[0].insertAdjacentHTML("beforeend", `<div class="row">
   <button class="btn" id="signout__btn">Выйти</button>
</div>`);
   const signOut = document.getElementById("signout__btn");
   signOut.addEventListener("click", () => {
      welcome[0].classList.remove("welcome_active");
      signin.classList.add("signin_active");
      signinForm.reset();
      delete localStorage.user_id;
   })
}
if (localStorage.user_id) {
   showUser();
   showOut();
} else {
   signin.classList.add("signin_active");
   signinForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(signinForm);
      xhr.open("POST", url);
      xhr.send(formData);
      xhr.responseType = "json";
      xhr.addEventListener("load", () => {
         if (xhr.response.success) {
            localStorage.setItem(`user_id`, xhr.response.user_id);
            localStorage.setItem(`sign`, "signed in");
            showUser();
            showOut();
         }
         else {
            alert("Неверный логин/пароль");
            signinForm.reset();
         }
      })
   })
}