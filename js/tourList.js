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

//******************** Nav End************************/

const info = document.querySelectorAll('#info');
const overlay = document.querySelector('.overlay');
const expand = document.querySelectorAll('#card-expand-block');

// Convert nodeList to array.
const cardInfo = Array.from(info);
const cardExpand = Array.from(expand);

cardInfo.forEach((info, idx) => {
  info.addEventListener('click', () => {
    // By Default all expand has be to display none.
    cardExpand.forEach((exp) => {
      exp.style.display = 'none';
    });
    // Block - get the index from info and access cardExpand based on that index and style block.
    cardExpand[idx].style.display = 'block';
    overlay.style.display = 'block';
  });

  // Close Info
  window.addEventListener('click', (e) => {
    if (e.target == overlay) {
      overlay.style.display = 'none';
      cardExpand[idx].style.display = 'none';
    }
  });
});

// ViewMore Btn Collapse.
const viewMoreBtn = document.querySelector('.viewBtn');
const viewContent = document.querySelectorAll('.viewMore');
//** Event Listener for cards ViewMore**//
viewMoreBtn.addEventListener('click', (e) => {
  viewContent.forEach((viewCont) => {
    viewCont.classList.toggle('block');
    if (viewCont.classList.contains('block')) {
      viewMoreBtn.innerText = 'View Less';
    } else {
      viewMoreBtn.innerText = 'View More';
    }
  });
  e.preventDefault();
});

// Grid Gallery.
const loadMoreBtn = document.querySelector('.loadBtn');
const loadContent = document.querySelector('.tour-travel-grid-2');

// Grdi Gallery Event Listener
loadMoreBtn.addEventListener('click', (e) => {
  loadContent.classList.toggle('d-none')
  if (loadContent.classList.contains('d-none')) {
    loadMoreBtn.innerText = 'Load More'
  } else {
    loadMoreBtn.innerText = 'Load less'
  }
  e.preventDefault()
})


// Categories Filter
const categoryAll = document.querySelector('.category-all');
const categoryDay = document.querySelector('.category-day');
const categoryMulti = document.querySelector('.category-multi');
const categoryPrivate = document.querySelector('.category-private');

// Array Destructuring.
const [day, multi, private] = [document.querySelectorAll('.day'), document.querySelectorAll('.multi'), document.querySelectorAll('.private')]
//** Event Listener for filters**//
// All Categories
categoryAll.addEventListener('click', (e) => {
  day.forEach((day) => {
    day.style.display = 'block';
  })
  multi.forEach((multi) => {
    multi.style.display = 'block';
  })
  private.forEach((private) => {
    private.style.display = 'block';
  })

  viewMoreBtn.style.display = 'none';
  // Default
  categoryDay.style.backgroundColor = 'rgba(77, 77, 77, 0.1)'
  categoryMulti.style.backgroundColor = 'rgba(77, 77, 77, 0.1)'
  categoryPrivate.style.backgroundColor = 'rgba(77, 77, 77, 0.1)'
})

// Day Filter
categoryDay.addEventListener('click', (e) => {
  day.forEach((day) => {
    day.style.display = 'block';
  })
  multi.forEach((multi) => {
    multi.style.display = 'none';
  })
  private.forEach((private) => {
    private.style.display = 'none';
  })
  viewMoreBtn.style.display = 'none';
  // Active Tab HighLight
  categoryDay.style.backgroundColor = 'rgba(75, 33, 26, 0.15)'
  // Default
  categoryMulti.style.backgroundColor = 'rgba(77, 77, 77, 0.1)'
  categoryPrivate.style.backgroundColor = 'rgba(77, 77, 77, 0.1)'
})

//rgba(77, 77, 77, 0.1)
// Multi Filter
categoryMulti.addEventListener('click', (e) => {
  day.forEach((day) => {
    day.style.display = 'none';
  })
  multi.forEach((multi) => {
    multi.style.display = 'block';
  })
  private.forEach((private) => {
    private.style.display = 'none';
  })
  viewMoreBtn.style.display = 'none';
  // Active Tab HighLight
  categoryMulti.style.backgroundColor = 'rgba(75, 33, 26, 0.15)'
  // Dafault
  categoryDay.style.backgroundColor = 'rgba(77, 77, 77, 0.1)'
  categoryPrivate.style.backgroundColor = 'rgba(77, 77, 77, 0.1)'
})

// Private Filter
categoryPrivate.addEventListener('click', (e) => {
  day.forEach((day) => {
    day.style.display = 'none';
  })
  multi.forEach((multi) => {
    multi.style.display = 'none';
  })
  private.forEach((private) => {
    private.style.display = 'block';
  })
  viewMoreBtn.style.display = 'none';
  // Active Tab HighLight
  categoryPrivate.style.backgroundColor = 'rgba(75, 33, 26, 0.15)'
  // Default
  categoryDay.style.backgroundColor = 'rgba(77, 77, 77, 0.1)'
  categoryMulti.style.backgroundColor = 'rgba(77, 77, 77, 0.1)'
})