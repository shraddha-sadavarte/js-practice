// gsap.to(".box", {
//     x: 900,
//     y:300,
//     duration: 2,
//     delay: 1,
//     backgroundColor: "red",
//     rotate: 180,
//     scale: 0.5
// })

gsap.from(".box", {
    x: 900,
    //y:300,
    duration: 2,
    delay: 1,
    backgroundColor: "red",
    rotate: 180,
    scale: 0.5,
    repeat: Infinity,
    yoyo: true//unlimited rotation and rounds,

})

//different elements ko synchronous order mein chalane ke liye timeline ka use hota hain
//stagger ka use ek ke bad ek element ko chalane ke liye hota hain
var tl = gsap.timeline();

tl.to("h1", {
    x: 600,
    duration: 1,
    //stagger: 1 itne second bad chalega
    // repeat: Infinity,
    // yoyo: true

})

tl.to("h2", {
    x: 500,
    duration: 1,
    // repeat: Infinity,
    // yoyo: true
})

tl.to("h3", {
    x: 400,
    duration: 1,
    // repeat: Infinity,
    // yoyo: true
})
