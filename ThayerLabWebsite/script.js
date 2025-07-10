// Improved scroll animation with better performance and mobile compatibility
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.textbox, .bubble');
    
    // Create intersection observer for better performance
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add a small delay to ensure smooth animation
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, 100);
            } else {
                // Remove visible class when element leaves viewport
                // This allows re-animation when scrolling back up
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element enters viewport
    });

    // Observe all animated elements
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Fallback for older browsers or if intersection observer fails
    function fallbackScrollHandler() {
        const windowHeight = window.innerHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top + scrollTop;
            const elementHeight = element.offsetHeight;
            
            // Check if element is in viewport
            if (scrollTop + windowHeight > elementTop + elementHeight * 0.1 && 
                scrollTop < elementTop + elementHeight * 0.9) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    }

    // Use fallback for browsers that don't support intersection observer
    if (!('IntersectionObserver' in window)) {
        window.addEventListener('scroll', fallbackScrollHandler);
        fallbackScrollHandler(); // Check initial state
    }
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', initScrollAnimations);

// No need to reinitialize on resize since we want persistent behavior
// Just recheck visibility on resize
window.addEventListener('resize', () => {
    // Recheck visibility after resize
    setTimeout(() => {
        const event = new Event('scroll');
        window.dispatchEvent(event);
    }, 100);
});

// Smooth scrolling for navigation links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute('href'));
//         if (target) {
//             target.scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start'
//             });
//         }
//     });
// });