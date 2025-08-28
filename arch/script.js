// // // script.js
// // document.addEventListener("DOMContentLoaded", () => {
// //   // Remove the navigation preventDefault code that was blocking links
// //   // The HTML links will now work naturally
  
// //   // Debug: Check if textboxes exist before ScrollMagic
// //   var textboxes = ['#textbox1', '#textbox2', '#textbox3'];
// //   console.log("Textboxes found:", textboxes.map(id => {
// //     const element = document.querySelector(id);
// //     if (element) {
// //       console.log(`${id} found at position:`, element.getBoundingClientRect());
// //       return element;
// //     } else {
// //       console.log(`${id} NOT found`);
// //       return null;
// //     }
// //   }));

// //   // Check if ScrollMagic is loaded
// //   if (typeof ScrollMagic === 'undefined') {
// //     console.error('ScrollMagic is not loaded!');
// //     return;
// //   }

// //   // Initialize ScrollMagic controller after DOM is loaded
// //   var controller = new ScrollMagic.Controller();
// //   console.log("ScrollMagic controller initialized:", controller);

// //   // Create scenes for each textbox
// //   textboxes.forEach(function(textbox, index) {
// //     const element = document.querySelector(textbox);
// //     if (!element) {
// //       console.error(`Element ${textbox} not found`);
// //       return;
// //     }

// //     const scene = new ScrollMagic.Scene({
// //         triggerElement: textbox,
// //         triggerHook: 0.8, // Trigger when 80% into viewport
// //         reverse: true // Animation reverses when scrolling back up
// //     })
// //     .setClassToggle(textbox, "visible")
// //     .addTo(controller);

// //     // Debug: Add event listeners to track scene progress
// //     scene.on("enter", function (event) {
// //       console.log(`Scene ${textbox} entered`);
// //     });

// //     scene.on("leave", function (event) {
// //       console.log(`Scene ${textbox} left`);
// //     });

// //     console.log(`Scene created for ${textbox}:`, scene);
// //   });

// //   // Alternative: Add visible class after a delay for testing
// //   setTimeout(() => {
// //     textboxes.forEach(textbox => {
// //       const element = document.querySelector(textbox);
// //       if (element) {
// //         element.classList.add('visible');
// //         console.log(`Added visible class to ${textbox}`);
// //       }
// //     });
// //   }, 2000); // Add visible class after 2 seconds for testing
// // });

// // // Project 
// // /*------------------------------
// // Register plugins
// // ------------------------------*/
// // gsap.registerPlugin(ScrollTrigger, ScrollSmoother)


// // /*------------------------------
// // Init ScrollSmoother
// // ------------------------------*/
// // const scrollerSmoother = ScrollSmoother.create({
// //   content: '#content',
// //   wrapper: '#wrapper',
// //   smooth: true,
// //   effects: false,
// //   normalizeScroll: true
// // })

// // const tl = gsap.timeline({
// //   scrollTrigger: {
// //       trigger: '.accordions',
// //       pin: true,
// //       start: 'top top',
// //       end: 'bottom top',
// //       scrub: 1,
// //       ease: 'linear',
// //     }
// // })

// // tl.to('.accordion .text', {
// //   height: 0,
// //   paddingBottom: 0,
// //   opacity: 0,
// //   stagger: .5,
// // })
// // tl.to('.accordion', {
// //   marginBottom: -15,
// //   stagger: .5,
// // }, '<')

// // Fixed script.js - Working version without ScrollSmoother
// document.addEventListener("DOMContentLoaded", () => {
//   console.log("DOM loaded");
  
//   // Check if GSAP is loaded
//   if (typeof gsap === 'undefined') {
//     console.error('GSAP is not loaded!');
//     return;
//   } else {
//     console.log('GSAP loaded successfully');
//   }
  
//   // Check if ScrollTrigger is loaded
//   if (typeof ScrollTrigger === 'undefined') {
//     console.error('ScrollTrigger is not loaded!');
//     return;
//   } else {
//     console.log('ScrollTrigger loaded successfully');
//   }
  
//   // Register only ScrollTrigger (no ScrollSmoother)
//   try {
//     gsap.registerPlugin(ScrollTrigger);
//     console.log('GSAP plugins registered successfully');
//   } catch (error) {
//     console.error('Error registering GSAP plugins:', error);
//     return;
//   }
  
//   // Check if accordion elements exist
//   const accordions = document.querySelector('.accordions');
//   const accordionElements = document.querySelectorAll('.accordion');
//   console.log('Accordions container found:', accordions);
//   console.log('Number of accordion elements:', accordionElements.length);
  
//   // Create the accordion animation with ScrollTrigger
//   try {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: '.accordions',
//         pin: true,
//         start: 'top center',
//         end: 'bottom top',
//         scrub: 1,
//         markers: true, // Remove this line later for production
//         onEnter: () => console.log('ScrollTrigger entered'),
//         onLeave: () => console.log('ScrollTrigger left'),
//         onUpdate: (self) => console.log('ScrollTrigger progress:', self.progress)
//       }
//     });
    
//     tl.to('.accordion .text', {
//       height: 0,
//       paddingBottom: 0,
//       opacity: 0,
//       stagger: 0.5,
//     });
    
//     tl.to('.accordion', {
//       marginBottom: -15,
//       stagger: 0.5,
//     }, '<');
    
//     console.log('Timeline created successfully:', tl);
//   } catch (error) {
//     console.error('Error creating timeline:', error);
//   }
  
//   // Keep the original ScrollMagic code for textboxes
//   var textboxes = ['#textbox1', '#textbox2', '#textbox3'];
  
//   if (typeof ScrollMagic !== 'undefined') {
//     var controller = new ScrollMagic.Controller();
    
//     textboxes.forEach(function(textbox, index) {
//       const element = document.querySelector(textbox);
//       if (!element) return;

//       const scene = new ScrollMagic.Scene({
//           triggerElement: textbox,
//           triggerHook: 0.8,
//           reverse: true
//       })
//       .setClassToggle(textbox, "visible")
//       .addTo(controller);
//     });
    
//     console.log('ScrollMagic scenes created for textboxes');
//   }
// });

// Complete working solution combining all approaches:
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded");
  
  // GSAP/ScrollTrigger code (unchanged)
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.accordions',
        pin: true,
        start: 'top 50%', // Start earlier as requested
        end: 'bottom top',
        scrub: 1,
        
      }
    });
    
    tl.to('.accordion .text', {
      height: 0,
      paddingBottom: 0,
      opacity: 0,
      stagger: 0.5,
    });
    
    tl.to('.accordion', {
      marginBottom: -15,
      stagger: 0.5,
    }, '<');
  }
  
  // Better textbox visibility handling
  const textboxSelectors = ['#textbox1', '#textbox2', '#textbox3'];
  
  // Method 1: Intersection Observer (most reliable)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
      // Remove 'else' clause to prevent removing class when scrolling up
    });
  }, {
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.1
  });
  
  textboxSelectors.forEach(selector => {
    const element = document.querySelector(selector);
    if (element) {
      observer.observe(element);
    }
  });
  
  // Method 2: Initial visibility check
  setTimeout(() => {
    textboxSelectors.forEach(selector => {
      const element = document.querySelector(selector);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
          element.classList.add('visible');
        }
      }
    });
  }, 100);
});