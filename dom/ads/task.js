let rotators = [...document.querySelectorAll('.rotator__case')];
let i = 0;

setInterval(function() {
    if (i > rotators.length - 1) {
        i = 0;
    } else {
        if ( i == 0) {
            rotators[rotators.length - 1].classList.remove('rotator__case_active');
        }
        if (i >= 1) {
            rotators[i - 1].classList.remove('rotator__case_active');
        }
        rotators[i].classList.add('rotator__case_active');
    i++;
    }
}, 1000);