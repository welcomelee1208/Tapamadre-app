import SmoothScroll from 'smooth-scroll'
var easeInOutCubic = new SmoothScroll('[data-scroll]',
    {
        easing: 'easeInOutCubic',
        topOnEmptyHash: false
    });