const header = document.querySelector(".navbar")
const sectionThree = document.querySelector(".section3");

const faders =document.querySelectorAll(".fadeIn");
const slidersL = document.querySelectorAll(".slide-left")
const slidersR = document.querySelectorAll(".slide-right")
const slidersB = document.querySelectorAll(".slide-bottom")

const sectionThreeOptions = {
  rootMargin:"-200px 0px 0px 0px"
};

const sectionThreeObserver = new IntersectionObserver(function(
  entries,
  sectionThreeObserver
){
  entries.forEach(entry =>{

    if(!entry.IsIntersecting){

      header.classList.add("inView");
    }else {
      header.classList.remove("inView");
    }
  });

},
sectionThreeOptions);

sectionThreeObserver.observe(sectionThree);


const appearOptions ={
  threshold:1,
  rootMargin:"0px 0px 200px 0px"
}

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
){
  entries.forEach(entry=> {
    if(!entry.isIntersecting){
      return;
    }else {
      entry.target.classList.add("inView")
      appearOnScroll.unobserve(entry.target);
    }

  });

},appearOptions)

faders.forEach(fader =>{
  appearOnScroll.observe(fader);
})

slidersL.forEach(slider => {
  appearOnScroll.observe(slider)

});
slidersR.forEach(slider => {
  appearOnScroll.observe(slider)

});
slidersB.forEach(slider => {
  appearOnScroll.observe(slider)

});
