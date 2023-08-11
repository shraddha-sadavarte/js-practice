gsap.from(".page1 .box", {
    scale: 0,
    delay: 1,
    duration: 1,
    rotate: 360,
    scrollTrigger: {
        trigger: ".page1 .box",
        scroller: "body",
        scrub:2
    }
})

gsap.from(".page2 .box", {
    scale: 0,
    duration: 1,
    rotate: 360,
    //jb bhi hum is second page pr scroll karenge sirf tabhi hamara is page ka animation chalge
    scrollTrigger: {
        trigger: ".page2 .box",
        scroller: "body",
        //markers: true, //markers of start and end of scroller and also element
        scrub:2, //jaise hum scroll karenge animation dheere se chalge aur vaise hi dheere se khatam bhi hoga
        //start: "top 60%",
        //end: "top 70%"   //start and end specifies the scroller where to start and end
    }
})

gsap.from(".page3 .box", {
    scale: 0,
    duration: 1,
    rotate: 360,
    scrollTrigger: {
        trigger: ".page3 .box",
        scroller: "body",
        scrub:2
    }
})