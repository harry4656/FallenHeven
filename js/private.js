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

//**** Hamburger End *****/

// Modal Open
const modalBtn = document.getElementById('modalOpen');
const modal = document.getElementById('modal')

// Modal Open if btn clicked
modalBtn.addEventListener('click', openModal)

// Modal close if outside clicked.
window.addEventListener('click', closeModal)

// CallBack Function
function openModal(e) {
    // console.log(e)
    modal.style.display = 'block';

    e.preventDefault()
}

// Modal close callBack function if outside clicked.
function closeModal(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}