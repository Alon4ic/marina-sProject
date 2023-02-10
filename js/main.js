$(function(){
$('.carousel-inner').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    
  ]
});
});


let btn = document.querySelector('#toggle');
let main = document.querySelector('.header-navbar-nav');
let header = document.querySelector('.header');


btn.addEventListener('click', function() {
	main.classList.toggle('_active');
	header.classList.toggle('_active');
})
let cont = document.querySelector('.features-span');
cont.style.borderBottom = '3px solid #0073C7';

const boxes = Array.from(document.querySelectorAll('.accordion-item__box'));
boxes.forEach((box) => {
  box.addEventListener('click', boxHandler);
});
function boxHandler(e) {
  e.preventDefault();
  let currentBox = e.target.closest('.accordion-item__box');
  let currentContent = e.target.nextElementSibling;
  currentBox.classList.toggle('active');
  if (currentBox.classList.contains('active')) {
    currentContent.style.maxHeight = currentContent.scrollHeight + "px";
    currentBox.style.fontWeight = 500;
  } else {
    currentContent.style.maxHeight = 0;
    currentBox.style.fontWeight = 400;
  }
}

document.querySelector ('.footer-link').onclick = () => {
  window.scrollTo(pageYOffset, 0);
}