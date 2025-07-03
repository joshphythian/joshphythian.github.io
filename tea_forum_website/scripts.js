// gsap.registerPlugin(ScrollTrigger);

// const images = gsap.utils.toArray('img'); // Select all images
// const loader = document.querySelector('.loader--text'); // Loader text element

// let loadedImages = 0; // Counter for loaded images

// // Update the loader text based on the loading progress
// const updateProgress = () => {
//   const progress = Math.round((loadedImages / images.length) * 100); // Calculate percentage
//   loader.textContent = `${progress}%`; // Update loader text
//   console.log(`Progress: ${progress}%`); // Debugging log

//   // When all images are loaded, show the demo
//   if (loadedImages === images.length) {
//     showDemo();
//   }
// };

// // Show the demo content and hide the loader
// const showDemo = () => {
//   console.log('All images loaded, starting demo...');
//   document.body.style.overflow = 'auto'; // Re-enable scrolling
//   document.scrollingElement.scrollTo(0, 0); // Scroll to top
//   gsap.to(document.querySelector('.loader'), { autoAlpha: 0 }); // Fade out loader

//   // Set up GSAP animations for each section
//   gsap.utils.toArray('section').forEach((section, index) => {
//     const w = section.querySelector('.wrapper');
//     const [x, xEnd] = (index % 2)
//       ? ['100%', (w.scrollWidth - section.offsetWidth) * -1]
//       : [w.scrollWidth * -1, 0];
//     gsap.fromTo(w, { x }, {
//       x: xEnd,
//       scrollTrigger: { 
//         trigger: section, 
//         scrub: 0.5 
//       }
//     });
//   });
// };

// // Attach event listeners to each image to track when it loads or fails
// images.forEach((img) => {
//   img.onload = () => {
//     loadedImages++; // Increment the counter when an image loads
//     updateProgress(); // Update the loader progress
//   };

//   img.onerror = () => {
//     console.warn(`Image failed to load: ${img.src}`); // Log error for failed images
//     loadedImages++; // Increment the counter even if the image fails
//     updateProgress(); // Update the loader progress
//   };
// });

// // Initialize the loader text and prevent scrolling until images are loaded
// loader.textContent = `0%`;
// document.body.style.overflow = 'hidden'; // Disable scrolling while loading

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault();
//     const targetId = this.getAttribute('href');
//     const targetElement = document.querySelector(targetId);

//     if (targetElement) {
//       targetElement.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start',
//       });
//     }
//   });
// });

gsap.registerPlugin(ScrollTrigger);

const images = gsap.utils.toArray('img'); // Select all images
const loader = document.querySelector('.loader--text'); // Loader text element
let loadedImages = 0; // Counter for loaded images

// Update the loader text based on the loading progress
const updateProgress = () => {
  const progress = Math.round((loadedImages / images.length) * 100); // Calculate percentage
  loader.textContent = `${progress}%`; // Update loader text

  // When all images are loaded, show the demo
  if (loadedImages === images.length) {
    showDemo();
  }
};

// Show the demo content and hide the loader
const showDemo = () => {
  document.body.style.overflow = 'auto'; // Re-enable scrolling
  document.scrollingElement.scrollTo(0, 0); // Scroll to top
  gsap.to(document.querySelector('.loader'), { autoAlpha: 0 }); // Fade out loader

  // GSAP scroll-triggered animations for each section
  gsap.utils.toArray('section').forEach((section, index) => {
    const wrapper = section.querySelector('.wrapper');
    const [xStart, xEnd] = (index % 2)
      ? ['100%', (wrapper.scrollWidth - section.offsetWidth) * -1]
      : [wrapper.scrollWidth * -1, 0];

    gsap.fromTo(wrapper, { x: xStart }, {
      x: xEnd,
      scrollTrigger: {
        trigger: section,
        scrub: 0.5,
      },
    });
  });
};

// Track image load and error events
images.forEach((img) => {
  const onImageEvent = () => {
    loadedImages++;
    updateProgress();
  };

  img.onload = onImageEvent;
  img.onerror = () => {
    console.warn(`Image failed to load: ${img.src}`);
    onImageEvent(); // Increment even if the image fails
  };
});

// Initialize loader text and disable scrolling
loader.textContent = '0%';
document.body.style.overflow = 'hidden'; // Disable scrolling while loading

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});