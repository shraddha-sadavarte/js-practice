const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

// function circleMouseFollower(xscale, yscale) {
//     window.addEventListener("mousemove", function (dets) {
//       document.querySelector(
//         "#minicircle"
//       ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
//     });
//   }

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

//circleMouseFollower();

firstPageAnim();

// teeno element ko sleect karo, uske baad teeno par ek mousemove lagao, jab mousemove ho to ye pata karo ki mouse kaha par hai, jiska matlab hai mouse ki x 
//and y position pata karo, ab mouse ki x y position ke badle us image ko show karo and us image ko move karo, move karte 
//waqt rotate karo, and jaise jaise mouse tez chale waise waise rotation bhi tez ho jaye

// document.querySelectorAll(".elem").forEach(function (elem) {
//     var rotate = 0;
//     var diffrot = 0;
  
//     elem.addEventListener("mouseleave", function (dets) {
//       gsap.to(elem.querySelector("img"), {
//         opacity: 0,
//         ease: Power3,
//         duration: 0.5,
//       });
//     });
  
//     elem.addEventListener("mousemove", function (dets) {
//       var diff = dets.clientY - elem.getBoundingClientRect().top;
//       diffrot = dets.clientX - rotate;
//       rotate = dets.clientX;
//       gsap.to(elem.querySelector("img"), {
//         opacity: 1,
//         ease: Power3,
//         top: diff,
//         left: dets.clientX,
//         rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
//       });
//     });
//   });