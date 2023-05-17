const interestsMain = document.querySelector('.interests_main');

interestsMain.addEventListener('click', (e) => {
   const childElements = [...e.target.closest('li').querySelectorAll('label input')];
   childElements.forEach(element => element.checked = childElements[0].checked)
});