	
//** HAMBURGER MENU */	
const trigger = document.querySelector('.nav-trigger');
const exit = document.querySelector('.exit-trigger');
const menu = document.querySelector('.menu');
const blockScroll = document.querySelector('body');


let menuReveal = gsap.timeline({ paused: true});

menuReveal.to('.main-navigation', {
    left: 0,
    duration: .4,
    ease: 'sine',
})
.to('nav a', {
    rotation:0,
    marginTop: 0,
    opacity: 1,
    stagger: 0.3,
})

trigger.addEventListener('click' , () => {
    exit.classList.add('open');
    trigger.classList.remove('closed');
    menuReveal.play().timeScale(1);
    
    blockScroll.classList.toggle('block--scroll');

  /* menu.classList.toggle('hide');
   trigger.classList.toggle('open');*/
    /*blockScroll.classList.toggle('block--scroll');*/

   /* gsap.to('nav a', .5, {
        opacity: 1,
        margin:'10px 0 0 0',
        stagger: 0.3,
    });*/


});

exit.addEventListener('click' , () => {
    trigger.classList.add('closed');
    exit.classList.remove('open');
    menuReveal.timeScale(3);
    menuReveal.reverse();
    
    blockScroll.classList.toggle('block--scroll');
});


//*****   FADE IN CLASSES  ****/
   const fader = document.querySelectorAll('.fade-in');
   const appearOptions = {
       threshold:0.6
   };
   
   const appearOnScroll = new IntersectionObserver
   (function(
       entries,
       appearOnScroll	
   ){
       entries.forEach(entry => {
           if (!entry.isIntersecting){
               return;
           } else {
               entry.target.classList.add('appear');
               appearOnScroll.unobserve(entry.target);
           }
       });
   },
   appearOptions);
   
   fader.forEach(fader => {
       appearOnScroll.observe(fader);
   });
   

  

   
   const hero = document.querySelectorAll('.hero h1');
   
   const fish = document.querySelectorAll('.fish');
   
   /*hero.addEventListener("mousemove", (e) => {
   hero.style.backgroundPositionX = -e.offsetX/2 + "px";
   hero.style.backgroundPositionY = -e.offsetY/2 + "px";
 
});*/

hero.forEach((move) => {
   move.addEventListener('mousemove', (e) => {
           move.style.backgroundPositionX = e.offsetX/2 + "px";
           move.style.backgroundPositionY = e.offsetY/2 + "px";
   });
});



// set the starting position of the cursor outside of the screen
let clientX = -100;
let clientY = -100;
const innerCursor = document.querySelector(".cursor--small");
const image = document.querySelectorAll('.gallery-thumb, .archive-img, .hero h1, .logo, a');

const initCursor = () => {
 // add listener to track the current mouse position
 document.addEventListener("mousemove", e => {
   clientX = e.clientX;
   clientY = e.clientY;
 });
 
 // transform the innerCursor to the current mouse position
 // use requestAnimationFrame() for smooth performance
 const render = () => {
   innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
   // if you are already using TweenMax in your project, you might as well
   // use TweenMax.set() instead
   // TweenMax.set(innerCursor, {
   //   x: clientX,
   //   y: clientY
   // });
   
   requestAnimationFrame(render);
 };
 requestAnimationFrame(render);
};

initCursor();


/******** Add class to Hovered element with custom cursor ********/

image.forEach(link => {
   
       link.addEventListener('mouseover', () =>{
           innerCursor.classList.add('greyscale');
       });
       
       link.addEventListener('mouseleave', () =>{
           innerCursor.classList.remove('greyscale');
       });
   })
   
   

image.forEach((hover) => {
   hover.addEventListener('mouseover', () => {
           hover.classList.add('hovered');
   });
   
   hover.addEventListener('mouseleave', () =>{
           hover.classList.remove('hovered');
       });
       
});
/*window.onload = function() {
   
       const textrev = gsap.timeline();
   
   textrev.to(".loader", 1.2,{
       top: "-100%",
       ease: Expo.easeInOut,
       delay: 1.2
   })
   .from(".hero h1", 1.8, {
       y : 800,
       opacity: 0,
       ease: "power4.out",
       delay: 1.4,
       skewY: 15,
       stagger:{
           amount: 0.6,
       }
   }, "-= 3")
       .from('.menu', 1.8, {
           opacity:0,
           delay:2.4
   }, "-= 2")
       .from('.logo a', 1.8, {
           opacity:0,
           delay:2.4
   }, "-= 2")
   .from('.nav-trigger', 1.8, {
           opacity:0,
           delay:2.4
   }, "-= 2");

}
*/

/*sessionStorage.clear();*/



/*var hasPlayed = sessionStorage.getItem("loadingAnimPlayed");

if (!hasPlayed) {*/
        
  


const textrev = gsap.timeline();
   
   textrev.to(".video--container",.1,{
    borderWidth:340,
   })
   .from(".loader span", 1.2,{
    margin: '-50px 0 0 0',
    opacity:0,
    ease: Expo.easeInOut,
})
.to(".loader span", 1.2,{
    opacity:0,
    delay:.5,
})
    .to(".loader", 0.8,{
       borderWidth:500,
       ease: Expo.easeInOut,
        delay: .2,
   })
   .to('.loader', .5,{
   opacity:0,
})
.to('.loader', .1, {
    left: "-120%", 
})
   .to('.video--container',0.8, {
       borderWidth:0,
       ease: Expo.easeInOut,
   }, '-=1')
       .from('.logo a', 1, {
           opacity:0,
   })
   .from('.nav-trigger', 1, {
           opacity:0,
           
   }, '-=1')
   .from('.headline', 1.5,{
       margin: '-100px 0 0 0',
        opacity:0,
        ease: Expo.easeInOut,
        
   } , '-=1.5')
   .from('progress', .5, {
        opacity:0,
        onComplete() {
            sessionStorage.setItem("loadingAnimPlayed", true)
          }
   }, '-=1')
   ;
   

   /*

}


else{
   console.log('Loaded');
   document.querySelector('.loader').classList.add('loaded');
};

*/

console.log('Testing');


let tl = gsap.timeline({
    scrollTrigger:{
        trigger:'.scroll-circle',
        scrub: 0.2,
        start: "center center",
        ease: "sine",
        markers: true,
        toggleActions: "play none none reverse",
    }
});

tl.to('.scroll-circle', {
    y: 250, 
    borderColor: '#1c1c1c',
    duration: .9})
.to('.scroll-circle span',{
    color:'#1c1c1c',
    duration:.4,
    delay:-.9})
.to('.video--container', {
    borderWidth: 100, 
    duration : .9,
    delay: -.9})
.to('.tagline h1',{
    marginLeft: 800, 
    duration:1.5,
    delay: -.9,
    scrollTrigger:{
        trigger: '.tagline h2',
        start: 'top center',
        scrub: true,
        ease: "sine",
        markers: true
    }})
/*.to('.grid-item img',{
    y:-40,
    scrollTrigger:{
        trigger:'.grid-item',
        start:'top center',
        scrub: true,
        markers: true
    }})*/
.to('.marquee div',{
    left:'-100%',
    scrollTrigger:
    {
    trigger:'.marquee',
    start:'top center',
    end:'bottom center',
    scrub:true,
    ease: "sine",
    markers:true
    }})
.to('.marquee',{
    background: 'blue',
    duration:.1,
    scrollTrigger:
    {
    trigger:'.marquee',
    start:'top center',
    end:'center center',
    scrub:true,
    ease: "sine",
    markers:true
}})
/*.to('.video--container', {transform: 'translateY(-60px)', duration : .8, delay: -.8})*/


gsap.to('progress', {
    value: 100,
    ease: 'none',
    scrollTrigger: { 
      trigger: "body",
      scrub: 0.2,
       start: "top top",
       end: "bottom bottom"
    }
  });


   
/******MASONRY******/
var colcade = new Colcade( '.grid', {
    columns: '.grid-col',
    items: '.grid-item'
  });



var carousel = document.querySelector('.carousel');
var flkty = new Flickity( carousel, {
  imagesLoaded: true,
  percentPosition: false,
  wrapAround: true ,
});

var imgs = carousel.querySelectorAll('.carousel-cell img');
// get transform property
var docStyle = document.documentElement.style;
var transformProp = typeof docStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';

flkty.on( 'scroll', function() {
  flkty.slides.forEach( function( slide, i ) {
    var img = imgs[i];
    var x = ( slide.target + flkty.x ) * -1/3;
    img.style[ transformProp ] = 'translateX(' + x  + 'px)';
  });
});