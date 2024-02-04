
function locoScrolling(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



}

function page2Text(){
    let text = document.querySelectorAll("#page2 h1");
    // console.log(text);
    text.forEach((elem) => {
        let h1text = elem.textContent.split("");
        // console.log(h1text);
        let container = "";
        h1text.forEach((e) => {
        container += `<span>${e}</span>`
            
        })
       elem.innerHTML = container;
    
    })



    
// gsap Code
    gsap.to("#page2 h1 span",{
        color : "white",
        duration : 1,
        stagger : 0.8,
        scrollTrigger : {
            trigger : "#page2 h1",
            scroller : "#main",
            start : "top 80%",
            end : "top 0%",
            // markers: true,
            scrub : 2,
        }
    })
 
}


locoScrolling();
page2Text();



