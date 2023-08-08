const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function firstPageAnim(){
    var tl = gsap.timeline();

    tl.from(".nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })

      .to(".boundinglem", {
        y: 0,
        duration: 1.3,
        ease: Expo.easeInOut,
        delay: -.1,
        stagger: .2
    })

    .from(".herofooter", {
        y: -10,
        opacity: 0,
        duration: 1.2,
        delay: -.1,
        ease: Expo.easeInOut
    })

    

}

firstPageAnim();