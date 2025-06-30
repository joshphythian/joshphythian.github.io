
const sections = gsap.utils.toArray("section");
const lastIndex = sections.length - 1;

// Array of local background image file paths
const localImages = [
  "images/fantasy_ruby_red_background.png",
  "images/ultra_black_background.png",
  "images/ultra_blue_background.png",
  "images/ultra_fiesta_mango_background.png",
  "images/ultra_gold_background.png",
  "images/ultra_paradise_background.png",
  "images/ultra_peachy_keen_background.png",
  "images/ultra_red_background.png",
  "images/ultra_rosa_background.png",
  "images/ultra_strawberry_dreams_background.png",
  "images/ultra_sunrise_background.png",
  "images/ultra_vice_guava_background.png",
  "images/ultra_violet_background.png",
  "images/ultra_watermelon_background.png",
  "images/zero_ultra_background.png"
];

// Array of smaller images (e.g., overlay or thumbnails)
const overlayImages = [
  "images/fantasy_ruby_red.png",
  "images/ultra_black.png",
  "images/ultra_blue.png",
  "images/ultra_fiesta_mango.png",
  "images/ultra_gold.png",
  "images/ultra_paradise.png",
  "images/ultra_peachy_keen.png",
  "images/ultra_red.png",
  "images/ultra_rosa.png",
  "images/ultra_strawberry_dreams.png",
  "images/ultra_sunrise.png",
  "images/ultra_vice_guava.png",
  "images/ultra_violet.png",
  "images/ultra_watermelon.png",
  "images/zero_ultra.png"
];
// V4///

sections.forEach((section, i) => {
  section._bg = section.querySelector(".bg");
  section._h1 = section.querySelector("h1");
  
  // Assign background images in descending order
  if (localImages[i]) {
    section._bg.style.backgroundImage = `url(${localImages[i]})`;
  } else {
    console.warn(`No background image found for section ${i}.`);
  }

  // Add overlay images dynamically
  if (overlayImages[i]) {
    const img = document.createElement("img");
    img.src = overlayImages[i];
    img.alt = `Overlay image for section ${i}`;
    img.className = "overlay-image"; // Add a class for styling/animation
    section.appendChild(img);

    // Create ScrollTrigger for the opacity and position animations
    ScrollTrigger.create({
      trigger: section,
      start: "top center", // Trigger when the top of the section hits the center of the viewport
      toggleActions: "play reverse play reverse", // Reverse animation on scroll up
      onEnter: () => {
        // Animate the opacity (fade-in)
        gsap.to(img, {
          duration: 0.5, // Quick fade-in duration
          opacity: 1,   // Fully visible
          ease: "power1.out", // Smooth easing
        });

        // Animate the position (y-axis bounce)
        gsap.fromTo(
          img,
          { y: -300 }, // Start off-screen
          {
            duration: 2.5, // Bounce animation duration
            y: 0, // Slide into view
            ease: "bounce.out", // Bounce effect
          }
        );
      },
    });
  } else {
    console.warn(`No overlay image found for section ${i}.`);
  }

  // Create a standalone ScrollTrigger instance for the section background and text
  ScrollTrigger.create({ 
    trigger: section,
    start: () => i == 0 ? "top top" : "top bottom", // The FIRST section uses a different start value
    end: () => i == lastIndex ? "top top" : "bottom top", // The LAST section uses a different start value    
    onRefresh: self => {
      section._tl = gsap.timeline({ paused: true, defaults: { ease: 'none', overwrite: 'auto' } }) 
        .fromTo(section._h1, { y: () => i == 0 ? 0 : (innerHeight / 2) * 1.5 }, { y: () => i == lastIndex ? 0 : (-innerHeight / 2) * 1.5 }, 0)
        .fromTo(section._bg, { y: () => i == 0 ? -innerHeight / 2 : 0 }, { y: () => i == lastIndex ? -innerHeight / 2 : -innerHeight }, 0)
        .progress(self.progress);      
    },
    onUpdate: self => { gsap.to(section._tl, { duration: 0.75, progress: self.progress }); }
  });
});


