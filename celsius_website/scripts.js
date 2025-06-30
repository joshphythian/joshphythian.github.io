// init controller
var controller = new ScrollMagic.Controller();

// build scenes for each trigger/reveal pair
document.querySelectorAll('.reveal').forEach(function (revealElement, index) {
    new ScrollMagic.Scene({
            triggerElement: "#trigger" + (index + 1),
            triggerHook: 0.1, // show when scrolled 20% into view (higher up on the screen)
            duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
            offset: 50 // move trigger to center of element
        })
        .setClassToggle(revealElement, "visible") // add class to reveal
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller);
});