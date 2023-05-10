const dropdownValue = document.querySelector('.dropdown__value'),
      dropdownList = document.querySelector('.dropdown__list'),
      dropdownItem = [...document.querySelectorAll('.dropdown__item')];

dropdownValue.addEventListener('click', function() {
    dropdownList.classList.toggle('dropdown__list_active');
});

dropdownItem.forEach(function(element) {
    element.addEventListener('click', event => {
        event.preventDefault();
        dropdownValue.textContent = element.textContent;
        dropdownList.classList.remove('dropdown__list_active')
    });
});