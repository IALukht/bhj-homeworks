const tabs = [...document.querySelectorAll('.tab')],
      tabContent = [...document.querySelectorAll('.tab__content')];

tabs.forEach(function (element) {
    element.addEventListener('click', (event) => {
        event.preventDefault();

        let activeElement = document.querySelector('.tab_active');
        let activeTabContent= document.querySelector('.tab__content_active');

        activeElement.classList.remove('tab_active');
        activeTabContent.classList.remove('tab__content_active');

        element.classList.add('tab_active');
        tabContent[tabs.indexOf(event.target)].classList.add('tab__content_active');
    })
})