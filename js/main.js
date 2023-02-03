let btn = document.querySelector('#toggle');
let main = document.querySelector('.header-navbar-nav');
let header = document.querySelector('.header');


btn.addEventListener('click', function() {
	main.classList.toggle('_active');
	header.classList.toggle('_active');
})
let cont = document.querySelector('.features-span');
cont.style.borderBottom = '3px solid #0073C7';