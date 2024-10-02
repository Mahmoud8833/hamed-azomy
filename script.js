// // Intro Animation
// const images = document.querySelectorAll('.intro-image');
// let index = 0;

// function showNextImage() {
//   images[index].classList.remove('active');
//   index = (index + 1) % images.length;
//   images[index].classList.add('active');

//   // Show main content after the last image
//   if (index === 0) {
//     setTimeout(() => {
//       const introSection = document.querySelector('.intro');
//       introSection.style.display = 'none';

//       const mainContent = document.getElementById('main-content');
//       mainContent.classList.remove('hidden'); // Remove hidden class
//       mainContent.classList.add('visible'); // Add visible class
//     }, 0); // Delay before showing main content
//   }
// }

// Initial setup for images
// setTimeout(() => {
//   images[0].classList.add('active');
//   setInterval(showNextImage, 3000); // Change images every 3 seconds
// }, 100);

// Modal Logic
document.querySelectorAll('.modal-trigger').forEach((button) => {
  button.addEventListener('click', () => {
    const modalId = button.getAttribute('data-modal');
    document.getElementById(modalId).style.display = 'flex';
    setTimeout(() => {
      document.getElementById(modalId).classList.add('show');
    }, 100); // Slight delay to enable smooth animation
  });
});

document.querySelectorAll('.close-modal').forEach((button) => {
  button.addEventListener('click', (e) => {
    const modal = e.target.closest('.modal');
    modal.classList.remove('show');
    setTimeout(() => {
      modal.style.display = 'none';
    }, 500); // Wait for the animation to finish
  });
});

const digital = document.querySelector('.digital');
const topLeft = document.getElementById('typogrphy');

function whenClicked() {
  topLeft.addEventListener('click', (event) => {
    digital.classList.add('animate-divs');
  });
}

// Carousel Start
(function () {
  'use strict';

  var carousel = document.getElementsByClassName('carousel')[0],
    slider = carousel.getElementsByClassName('carousel__slider')[0],
    items = carousel.getElementsByClassName('carousel__slider__item'),
    prevBtn = carousel.getElementsByClassName('carousel__prev')[0],
    nextBtn = carousel.getElementsByClassName('carousel__next')[0];

  var width,
    height,
    totalWidth,
    margin = 20,
    currIndex = 0,
    interval,
    intervalTime = 4000;

  function init() {
    resize();
    move(Math.floor(items.length / 2));
    bindEvents();

    timer();
  }

  function resize() {
    (width = Math.max(window.innerWidth * 0.25, 275)),
      (height = window.innerHeight * 0.5),
      (totalWidth = width * items.length);

    slider.style.width = totalWidth + 'px';

    for (var i = 0; i < items.length; i++) {
      let item = items[i];
      item.style.width = width - margin * 2 + 'px';
      item.style.height = height + 'px';
    }
  }

  function move(index) {
    if (index < 1) index = items.length;
    if (index > items.length) index = 1;
    currIndex = index;

    for (var i = 0; i < items.length; i++) {
      let item = items[i],
        box = item.getElementsByClassName('item__3d-frame')[0];
      if (i == index - 1) {
        item.classList.add('carousel__slider__item--active');
        box.style.transform = 'perspective(1200px)';
      } else {
        item.classList.remove('carousel__slider__item--active');
        box.style.transform =
          'perspective(1200px) rotateY(' + (i < index - 1 ? 40 : -40) + 'deg)';
      }
    }

    slider.style.transform =
      'translate3d(' +
      (index * -width + width / 2 + window.innerWidth / 2) +
      'px, 0, 0)';
  }

  function timer() {
    clearInterval(interval);
    interval = setInterval(() => {
      move(++currIndex);
    }, intervalTime);
  }

  function prev() {
    move(--currIndex);
    timer();
  }

  function next() {
    move(++currIndex);
    timer();
  }

  function bindEvents() {
    window.onresize = resize;
    prevBtn.addEventListener('click', () => {
      prev();
    });
    nextBtn.addEventListener('click', () => {
      next();
    });
  }

  init();
})();
