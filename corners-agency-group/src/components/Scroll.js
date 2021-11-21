import ScrollMagic from 'scrollmagic';

const intro = document.querySelector(".intro");
const controller = ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
    duration:1000,
    triggerElement : intro,
    triggerHook: 0
})
.addIndicators()
.addTo(controller);