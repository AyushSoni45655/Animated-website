const scroll = new LocomotiveScroll({
    // el: document.body,
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

// const cursor = document.querySelector('.custom-cursor');

// document.addEventListener('mousemove', (e) => {
//   cursor.style.top = `${e.clientY}px`;
//   cursor.style.left = `${e.clientX}px`;
// });

const cursor = document.querySelector('.custom-cursor');

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;
const speed = 0.1;

document.addEventListener('mousemove', (e) => {
    // document.querySelector(".custom-cursor").style.transform = `translate(${e.clientX}px,${e.clientY}px)` //first method this

    //second method this

  mouseX = e.clientX;
  mouseY = e.clientY;
  
});

function animate() {
  currentX += (mouseX - currentX) * speed;
  currentY += (mouseY - currentY) * speed;

  cursor.style.transform = `translate(${currentX}px, ${currentY}px)`;

  requestAnimationFrame(animate);
}


animate();

function firstPageAnimation() {
  let timeline = gsap.timeline();

  timeline.from(".navbar", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: "expo.inOut"
  }).to(".boundingele", {
    y: "0",
    
    duration: 1.5,
    ease: "expo.easeInOut",
    stagger: .5
  }).from(".footericontext",{
    y: "-10",
    opacity:0,
    duration:1,
    delay :.3,
    ease:"expo.easeInOut",
  });
}

firstPageAnimation();


// document.querySelectorAll(".animationBoxChild").forEach((animationBoxChild)=>{
//   elem.addEventListener("mousemove",(dets)=>{
//     var diff = dets.clientY - elem.getBoundingClientRect().top;
//     gsap.to(elem.querySelector("img"),{
//       opacity: 1,
//       ease:Power1,
//       top:diff,
//       left:dets.clientX
//     });
   
    
    
//   });
// })
document.querySelectorAll(".animationBoxChild").forEach((animationBoxChild) => {
  animationBoxChild.addEventListener("mousemove", (dets) => {
    let diff = dets.clientY - animationBoxChild.getBoundingClientRect().top;

    gsap.to(animationBoxChild.querySelector("img"), {
      opacity: 1,
      ease: "power1.out",
      top: diff,
      left: dets.clientX,
    });
  });

  // Optional: Mouse बाहर जाने पर image गायब हो जाए
  animationBoxChild.addEventListener("mouseleave", () => {
    gsap.to(animationBoxChild.querySelector("img"), {
      opacity: 0,
    });
  });
});
