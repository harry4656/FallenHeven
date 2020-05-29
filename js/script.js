// Hamburger Code.
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
const menuClose = document.querySelector('.menu-close');
console.log(nav);

// For mobile slide navigation -
// Note- query selector selects the first instance. so in markup first instance of menu-btn is mobile navigation.
menuBtn.addEventListener('click', () => {
  nav.classList.add('active');
});

menuClose.addEventListener('click', () => {
  nav.classList.remove('active');
});

// For desktop Slide navigation.
const menuBtn2 = document.querySelectorAll('.menu-btn')[1];
console.log(menuBtn2);
menuBtn2.addEventListener('click', () => {
  nav.classList.add('active');
});

// Video play
const video = document.querySelector('.welcome-content-video video');

// Video play onscroll
window.onscroll = () => {
  //console.log(pageYOffset);
  if (pageYOffset >= 565) {
    video.autoplay = true;
  }
};

const knowMore = document.querySelector('#knowMore');
console.log(knowMore);

knowMore.addEventListener('click', (e) => {
  video.autoplay = true;
  console.log(e);

  e.preventDefault();
});
