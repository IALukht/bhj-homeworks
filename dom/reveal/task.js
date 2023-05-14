let  reveal = [...document.querySelectorAll('.reveal')];

function openBlock () {
    reveal.forEach(element => {
    let block = ({top, bottom } = element.getBoundingClientRect());
        if (block.top > 0 && block.bottom < window.outerHeight) {
            element.classList.add("reveal_active"); 
        } else {
            element.classList.remove("reveal_active");
        }
    })
}

document.addEventListener("scroll", openBlock)