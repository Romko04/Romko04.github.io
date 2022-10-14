
//Таби
const tabNavItems = document.querySelectorAll('.tabs__deals-button');
const tab = document.querySelectorAll('.deals__tabs-item');
document.addEventListener('click', function (e) {
  const targetElement = e.target;
  let currentActiveIndex = null;
  let newActiveIndex = null;
  if (targetElement.closest('.tabs__deals-button')) {
    tabNavItems.forEach((tabNavItem, index) => {
      if (tabNavItem.classList.contains('active')) {
        currentActiveIndex = index;
        tabNavItem.classList.remove('active');
      }
      if (tabNavItem === targetElement) {
        newActiveIndex = index;
      }
    });
    targetElement.classList.add('active')
    tab[currentActiveIndex].classList.remove('visible');
    tab[newActiveIndex].classList.add('visible');
  }
} )






//бургер




const btn = document.querySelector('.icon__menu');
const menuBody = document.querySelector('.menu__body');
console.log(menuBody);
btn.addEventListener('click', mouseclick);
function mouseclick() {
    menuBody.classList.toggle('_active');
    btn.classList.toggle('_active');
}



//слайдер
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += "active";
}