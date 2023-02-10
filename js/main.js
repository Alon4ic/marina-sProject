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

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// let scrollWidth = Math.max(
//   document.body.scrollWidth, document.documentElement.scrollWidth,
//   document.body.offsetWidth, document.documentElement.offsetWidth,
//   document.body.clientWidth, document.documentElement.clientWidth
// );
// let scrollHeight = Math.max(
//   document.body.scrollHeight = document.documentElement.scrollHeight,
//   document.body.offsetHeight = document.documentElement.offsetHeight,
//   document.body.clientHeight = document.documentElement.clientHeight
// );
// console.log(scrollHeight);
// console.log(scrollWidth);


// let scrollLink = document.querySelector('.footer-link');
// scrollLink.addEventListener('click', setScrollBy);
// function setScrollBy() {
//   window.scrollBy(0, 50);
//   const windowScrollTop = window.pageYOffset;
//   console.log(windowScrollTop);
// }