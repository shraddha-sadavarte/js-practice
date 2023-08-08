const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function circleMouseFollower() {
    window.addEventListener("mousemove", function(dets){
        document.querySelector("#minicircle").style.transform = `transform(${dets.clientX}px, ${dets.clientY}px)`
    })
}

circleMouseFollower();