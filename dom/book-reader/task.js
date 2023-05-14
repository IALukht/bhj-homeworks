const fontSize = [...document.querySelectorAll('.font-size')],
    book = document.querySelector('.book');

let activeFont = document.querySelector('.font-size_active');

for (let i = 0; i < fontSize.length; i++) {
    fontSize[i].addEventListener("click", (event) => {
      event.preventDefault();
      fontSize.forEach((item) => {
        if (item.classList.contains("font-size_active")) {
          item.classList.toggle("font-size_active");
        }
      });
      fontSize[i].classList.toggle("font-size_active");
      if (fontSize[i].dataset.size === "small") {
        book.className = "book book_fs-small";
      } else if (fontSize[i].dataset.size === "big") {
        book.className = "book book_fs-big";
      } else {
        book.className = "book";
      }
    });
}