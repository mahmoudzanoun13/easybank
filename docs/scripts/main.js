const backgroundImage = document.getElementById('bg-intro');
const header = document.querySelector('header');
const width = window.innerWidth;
const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const nav = document.querySelector('.nav');
const content = document.querySelectorAll('.section-1, .section-2, .section-3, footer');


const changeImage = (newImage) => {
  backgroundImage.src = newImage;
}

if (width <= 375) {
  changeImage('../images/bg-intro-mobile.svg');
}

hamburger.addEventListener('click', () => {
  nav.classList.add('nav-active');
  hamburger.classList.add('hidden');
  close.classList.add('close-active');
  content.forEach(section => {
    section.classList.add('blur');
  })
  close.addEventListener('click', () => {
    nav.classList.remove('nav-active');
    hamburger.classList.remove('hidden');
    close.classList.remove('close-active');
    content.forEach(section => {
      section.classList.remove('blur');
    })
  })
})

