var tl = gsap.timeline();


tl.from("nav", {
    opacity: 0,
    delay: 0.3
})

tl.from("nav h1, nav h4, nav h3",{
    y: -80,
    opacity: 0,
    duration: 0.8,
    delay: 0.5,
    stagger:0.5
})

tl.from(".text h1, .bottom",{
    x: -50,
    opacity: 0,
    delay: 0.5,
    duration:0.5,
    stagger: 0.4
})

tl.from(".img", {
    scale: 0.5,
    opacity: 0,
    duration: 0.5,
    rotate: 360
})

tl.from(".page2 .part1", {
    x: -50,
    duration: 0.2,
    scrollTrigger: {
        trigger: ".page2 part1",
        scroller: "body",
        scrub: 2
    }
})

tl.from(".part2 .box", {
    scale: 0,
    opacity: 0,
    duration: 1,
    stagger: 1,
    scrollTrigger: {
        trigger: ".part2 .box",
        scroller: "body",
        scrub: 1,
        end: "bottom 40%"
    }
})
