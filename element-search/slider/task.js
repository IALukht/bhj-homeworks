window.onload = function() {
	let counter = 0;
	let arr = Array.from(document.querySelectorAll('.slider__item'));
	document.querySelector('.slider__arrow_next').onclick = function() {
		counter = arr.findIndex((currentValue) => {return currentValue.classList.contains('slider__item_active')});
		arr[counter].classList.toggle('slider__item_active');
		counter = (counter + 1) % arr.length;
		arr[counter].classList.toggle('slider__item_active');
	}
	document.querySelector('.slider__arrow_prev').onclick = function() {
		counter = arr.findIndex((currentValue) => {return currentValue.classList.contains('slider__item_active')});
		arr[counter].classList.toggle('slider__item_active');
		counter = (counter > 0) ? counter - 1: arr.length - 1;
		arr[counter].classList.toggle('slider__item_active');
	}
}
