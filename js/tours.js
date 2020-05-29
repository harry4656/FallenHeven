// Hamburger Code.
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
const menuClose = document.querySelector('.menu-close');
console.log(nav);

// For mobile slide navigation -
// Note- query selector selects the first instance. so in markup first instance of menu-btn is mobile navihation.
menuBtn.addEventListener('click', () => {
  nav.classList.add('active');
});

menuClose.addEventListener('click', () => {
  nav.classList.remove('active');
});

// For desktop Slide navigation.
const menuBtn2 = document.querySelectorAll('.menu-btn')[1]
console.log(menuBtn2)
menuBtn2.addEventListener('click', () => {
  nav.classList.add('active');
});


// Google Map API
var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: -34.397,
      lng: 150.644,
    },
    zoom: 8,
  });
}

// Image Gallery
// Variable Declaration.
const [current, gallery, lightOpacity] = [
  document.querySelector('.current'),
  document.querySelectorAll('.tour-gallery-img img'),
  0.5,
];

// First picture is selected so reduce the opacity of forst img in gallery.
const firstImg = gallery[0];
firstImg.style.opacity = lightOpacity;

gallery.forEach((img) => {
  img.addEventListener('click', changeImg);
});

function changeImg(e) {
  // Reset opactiy of image to 1
  gallery.forEach((img) => (img.style.opacity = 1));

  // changing the showcase picture.
  current.src = e.target.src;

  // Add Fade in class
  current.classList.add('fade-in');

  // Remove fade-in class after 0.5 seconds
  setTimeout(() => {
    current.classList.remove('fade-in');
  }, 500);
  // Change opacity for current clicked.
  e.target.style.opacity = lightOpacity;
}

//***  Collapse Module ***//
// Highlights Variables
const [highLightBtn, highLightContent] = [
  document.querySelector('.highBtn'),
  document.querySelector('.high-show'),
];
// Description Variables
const [descriptionBtn, descriptionContent] = [
  document.querySelector('.descriptionBtn'),
  document.querySelector('.des-show'),
];
// Gallery Variables
const [galleryBtn, galleryContent] = [
  document.querySelector('.galleryBtn'),
  document.querySelector('.gallery-show'),
];

// Hightlight click Event
highLightBtn.addEventListener('click', () => {
  highLightContent.style.display = 'block';
  // Adding border style
  highLightBtn.style.borderBottom = '3px solid rgba(216, 148, 1, 1)';
  if ((highLightContent.style.display = 'block')) {
    descriptionContent.style.display = 'none';
    galleryContent.style.display = 'none';
    // Reset borders for rest two.
    descriptionBtn.style.borderBottom = 'none';
    galleryBtn.style.borderBottom = 'none';
  }
});

// Description Click Event
descriptionBtn.addEventListener('click', () => {
  descriptionContent.style.display = 'block';
  // Adding border style
  descriptionBtn.style.borderBottom = '3px solid rgba(216, 148, 1, 1)';
  if ((descriptionContent.style.display = 'block')) {
    highLightContent.style.display = 'none';
    galleryContent.style.display = 'none';
    // Reset borders for rest two.
    highLightBtn.style.borderBottom = 'none';
    galleryBtn.style.borderBottom = 'none';
  }
});

// Gallery Click Event
galleryBtn.addEventListener('click', () => {
  galleryContent.style.display = 'block';
  // Adding border style
  galleryBtn.style.borderBottom = '3px solid rgba(216, 148, 1, 1)';
  if ((galleryContent.style.display = 'block')) {
    highLightContent.style.display = 'none';
    descriptionContent.style.display = 'none';
    // Reset borders for rest two.
    highLightBtn.style.borderBottom = 'none';
    descriptionBtn.style.borderBottom = 'none';
  }
});

// ON window reload the first tab will be active
window.onload = () => {
  highLightContent.style.display = 'block';
  descriptionContent.style.display = 'none';
  galleryContent.style.display = 'none';
  // Adding border style
  highLightBtn.style.borderBottom = '3px solid rgba(216, 148, 1, 1)';
};

// Carousel Silder

const controls = document.querySelectorAll('.controlBtn');
const slide1 = document.querySelector('.slide-1');
const slide2 = document.querySelector('.slide-2');
const slide3 = document.querySelector('.slide-3');
const slide4 = document.querySelector('.slide-4');
const activeControl = document.querySelector('.activeBtn');

for (let i = 0; i <= controls.length; i++) {
  if (i === 0) {
    one();
  } else if (i === 1) {
    second();
  } else if (i === 2) {
    third();
  } else if (i === 3) {
    fourth();
  }

  function one() {
    controls[i].addEventListener('click', (e) => {
      controls.forEach((btn) => (btn.style.color = 'rgba(219, 151, 3, 0.5)'));
      e.target.style.color = 'rgba(216, 148, 1, 1)';
      slide1.style.transform = 'translateX(0)';
      slide2.style.transform = 'translateX(0)';
      slide3.style.transform = 'translateX(0)';
      slide4.style.transform = 'translateX(0)';
    });
  }
  // second Silde
  function second() {
    controls[i].addEventListener('click', (e) => {
      controls.forEach((btn) => (btn.style.color = 'rgba(219, 151, 3, 0.5)'));
      e.target.style.color = 'rgba(216, 148, 1, 1)';
      slide1.style.transform = 'translateX(-100%)';
      slide2.style.transform = 'translateX(-100%)';
      slide3.style.transform = 'translateX(-100%)';
      slide4.style.transform = 'translateX(-100%)';
    });
  }

  // Third Slide
  function third() {
    controls[i].addEventListener('click', (e) => {
      controls.forEach((btn) => (btn.style.color = 'rgba(219, 151, 3, 0.5)'));
      e.target.style.color = 'rgba(216, 148, 1, 1)';
      slide1.style.transform = 'translateX(-100%)';
      slide2.style.transform = 'translateX(-200%)';
      slide3.style.transform = 'translateX(-200%)';
      slide4.style.transform = 'translateX(-200%)';
    });
  }

  function fourth() {
    controls[i].addEventListener('click', (e) => {
      controls.forEach((btn) => (btn.style.color = 'rgba(219, 151, 3, 0.5)'));
      e.target.style.color = 'rgba(216, 148, 1, 1)';
      slide1.style.transform = 'translateX(-100%)';
      slide2.style.transform = 'translateX(-300%)';
      slide3.style.transform = 'translateX(-300%)';
      slide4.style.transform = 'translateX(-300%)';
    });
  }
}

// ON window reload the first tab will be active
window.onload = () => {
  highLightContent.style.display = 'block';
  descriptionContent.style.display = 'none';
  galleryContent.style.display = 'none';
  // Adding border style
  highLightBtn.style.borderBottom = '3px solid rgba(216, 148, 1, 1)';
  activeControl.style.color = 'rgba(219, 151, 3, 1)';
};