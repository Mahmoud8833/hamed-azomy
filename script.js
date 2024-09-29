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

const container = document.querySelector('.mainContainerCarouselFinal');
const slide = document.querySelector('.slideTemplate');
const prevBtn = document.querySelector(
  '.controlerFinalCarousel div:nth-child(1)'
);
const nextBtn = document.querySelector(
  '.controlerFinalCarousel div:nth-child(2)'
);
let nbclick = 0;
const nbSlide = 10;
const { style: containerStyle, getComputedStyle: getCS } = window;
nextBtn.addEventListener('click', () => {
  if (nbclick < nbSlide - 1) {
    nbclick++;
    updateScroll();
  }
});
prevBtn.addEventListener('click', () => {
  if (nbclick > 0) {
    nbclick--;
    updateScroll();
  }
});
function updateScroll() {
  const screenWidth = parseInt(
    getCS(container).getPropertyValue('--screenWidth').replace('px', '')
  );
  const slideHeight = parseInt(
    getCS(slide).getPropertyValue('--slideHeight').replace('px', '')
  );
  const scrollAmount = ((screenWidth - (slideHeight + 40)) / 2) * nbclick;
  container.scroll({ left: scrollAmount, behavior: 'smooth' });
}
