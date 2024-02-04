let tl = gsap.timeline();

tl.from("#in", {
    y : -50,
    duration : 0.8,
    // delay : 1,
    stagger : 0.8
})

tl.from("h3", {
    y : -50,
    duration : 0.5,
    
})

tl.from("h1", {
    x : -90 + "%",
    duration : 0.8,
    // delay : 1,
    stagger : 1,
    opacity : 0,
    
})

tl.from("img", {
    y : 50 + "%",
    duration : 0.5,
    rotate : 45,
    // delay : 1,
    stagger : 0.8,
    opacity : 0
})

tl.from("p", {
    x : -90 + "%",
    duration : 0.8,
    // delay : 1,
    stagger : 1,
    opacity : 0,
})
tl.from("h4", {
    x : -90 + "%",
    duration : 0.8,
    // delay : 1,
    stagger : 1,
    opacity : 0,
})