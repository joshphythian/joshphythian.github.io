// // script.js
// document.addEventListener("DOMContentLoaded", () => {
//     // Navigation functionality
//     const navItems = document.querySelectorAll(".nav-list li a");
//     navItems.forEach((item) => {
//         item.addEventListener("click", (e) => {
//             e.preventDefault();
//             alert(`You clicked on ${item.textContent}`);
//         });
//     });
  
//     // Debug: Check if textboxes exist before ScrollMagic
//     var textboxes = ['#textbox1', '#textbox2', '#textbox3'];
//     console.log("Textboxes found:", textboxes.map(id => {
//       const element = document.querySelector(id);
//       if (element) {
//         console.log(`${id} found at position:`, element.getBoundingClientRect());
//         return element;
//       } else {
//         console.log(`${id} NOT found`);
//         return null;
//       }
//     }));
  
//     // Check if ScrollMagic is loaded
//     if (typeof ScrollMagic === 'undefined') {
//       console.error('ScrollMagic is not loaded!');
//       return;
//     }
  
//     // Initialize ScrollMagic controller after DOM is loaded
//     var controller = new ScrollMagic.Controller();
//     console.log("ScrollMagic controller initialized:", controller);
  
//     // Create scenes for each textbox
//     textboxes.forEach(function(textbox, index) {
//       const element = document.querySelector(textbox);
//       if (!element) {
//         console.error(`Element ${textbox} not found`);
//         return;
//       }
  
//       const scene = new ScrollMagic.Scene({
//           triggerElement: textbox,
//           triggerHook: 0.8, // Trigger when 80% into viewport
//           reverse: true // Animation reverses when scrolling back up
//       })
//       .setClassToggle(textbox, "visible")
//       .addTo(controller);
  
//       // Debug: Add event listeners to track scene progress
//       scene.on("enter", function (event) {
//         console.log(`Scene ${textbox} entered`);
//       });
  
//       scene.on("leave", function (event) {
//         console.log(`Scene ${textbox} left`);
//       });
  
//       console.log(`Scene created for ${textbox}:`, scene);
//     });
  
//     // Alternative: Add visible class after a delay for testing
//     setTimeout(() => {
//       textboxes.forEach(textbox => {
//         const element = document.querySelector(textbox);
//         if (element) {
//           element.classList.add('visible');
//           console.log(`Added visible class to ${textbox}`);
//         }
//       });
//     }, 2000); // Add visible class after 2 seconds for testing
//   });

// script.js
document.addEventListener("DOMContentLoaded", () => {
  // Remove the navigation preventDefault code that was blocking links
  // The HTML links will now work naturally
  
  // Debug: Check if textboxes exist before ScrollMagic
  var textboxes = ['#textbox1', '#textbox2', '#textbox3'];
  console.log("Textboxes found:", textboxes.map(id => {
    const element = document.querySelector(id);
    if (element) {
      console.log(`${id} found at position:`, element.getBoundingClientRect());
      return element;
    } else {
      console.log(`${id} NOT found`);
      return null;
    }
  }));

  // Check if ScrollMagic is loaded
  if (typeof ScrollMagic === 'undefined') {
    console.error('ScrollMagic is not loaded!');
    return;
  }

  // Initialize ScrollMagic controller after DOM is loaded
  var controller = new ScrollMagic.Controller();
  console.log("ScrollMagic controller initialized:", controller);

  // Create scenes for each textbox
  textboxes.forEach(function(textbox, index) {
    const element = document.querySelector(textbox);
    if (!element) {
      console.error(`Element ${textbox} not found`);
      return;
    }

    const scene = new ScrollMagic.Scene({
        triggerElement: textbox,
        triggerHook: 0.8, // Trigger when 80% into viewport
        reverse: true // Animation reverses when scrolling back up
    })
    .setClassToggle(textbox, "visible")
    .addTo(controller);

    // Debug: Add event listeners to track scene progress
    scene.on("enter", function (event) {
      console.log(`Scene ${textbox} entered`);
    });

    scene.on("leave", function (event) {
      console.log(`Scene ${textbox} left`);
    });

    console.log(`Scene created for ${textbox}:`, scene);
  });

  // Alternative: Add visible class after a delay for testing
  setTimeout(() => {
    textboxes.forEach(textbox => {
      const element = document.querySelector(textbox);
      if (element) {
        element.classList.add('visible');
        console.log(`Added visible class to ${textbox}`);
      }
    });
  }, 2000); // Add visible class after 2 seconds for testing
});