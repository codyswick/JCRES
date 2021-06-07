





/* sets an array of Agents*/
const agents = [
  {
  name: "Christopher Skaro",
  image:"assets/img/agent-1.jpg",
  tag:"CEO-Co partner",
  phoneNumber: "773-517-9137",
  email: "C.Skaro.jcres@gmail.com"
  },
  {
    name:"Joseph Piko",
    image:"assets/img/agent-2.jpg",
    tag:"CEO-Co partner",
    phoneNumber: "719 357 7692",
    email: "j.piko.jcres@gmail.com",
  }

];

/* For each Agent create the card */
agents.forEach((agent,index) =>{
  var card = document.querySelector("#agent-list")
  card.innerHTML = card.innerHTML + `
  <div class="col-md-4" id="card-main">
    <div class="card-box-d">
      <div class="card-img-d">
        <img id="agent-image"src="${agents[index].image}" alt="" class="img-d img-fluid">
      </div>
      <div class="card-overlay card-overlay-hover">
        <div class="card-header-d">
          <div class="card-title-d align-self-center">
            <h3 class="title-d">
              <a href="agent-single.html" class="link-two" id="agent-name">${agents[index].name}
                <br> </a>
            </h3>
          </div>
        </div>
        <div class="card-body-d">
          <p class="content-d color-text-a" id="agent-tag">
            <strong>${agents[index].tag}</strong>
          </p>
          <div class="info-agents color-a">
            <p id="agent-phone">
              <strong>Phone: </strong> ${agents[index].phoneNumber}
            </p>
            <p id="agent-email">
              <strong>Email: </strong> ${agents[index].email}
            </p>
          </div>
        </div>
        <div class="card-footer-d">
          <div class="socials-footer d-flex justify-content-center">
            <ul class="list-inline">
              <li class="list-inline-item">
                <a href="#" class="link-one">
                  <i class="bi bi-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#" class="link-one">
                  <i class="bi bi-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#" class="link-one">
                  <i class="bi bi-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#" class="link-one">
                  <i class="bi bi-linkedin" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  </div>
  `});








/* for each property you want to show case */
const propertiesFront = [
  {
    image:"assets/img/slide-3.jpg",
    price:"1.4M",
    beds: 4,
    baths: 3,
    size:"2300sqft",
    garage:1,
    address:{
      line1:"1643",
      line2:"Olive Road",
      city:"Black Forrest",
      state:"Colorado",
      zipCode:"87745",
    }


  },
  {
  image:"assets/img/slide-4.jpg",
  price:"350,000.00",
  beds:3,
  baths:2,
  size:"1800sqft",
  garage:"1",
  address:{
    line1:"1588",
    line2:"Loan Star Road",
    city:"Black Forrest",
    state:"Colorado",
    zipCode:"87745",
  }


},
{
image:"assets/img/slide-2.jpg",
price:"1.8M",
beds:"3",
baths:"2",
size:"1600sqft",
garage:"1",
address:{
  line1:"1888",
  line2:"Bright Star Road",
  city:"Black Forrest",
  state:"Colorado",
  zipCode:"87745",
}


},


]



/* loop through and create the hero details for the featured property*/
propertiesFront.forEach((property,index) =>{
  var prop = document.querySelector("#prop-head");
  prop.innerHTML = prop.innerHTML +`
  <div class="carousel-item" >
    <div class="overlay-img"style="background: url(${property.image});"
    <div class="container-carousel">
      <div class="carousel-caption text-start">
        <p class="intro-title-top">${property.address.city}, ${property.address.state} <br>${property.address.zipCode}</p>
          <h1 class="intro-title mb-4">
            <span class="color-b">${property.address.line1}</span>
            <br> ${property.address.line2}</h1>
            <p class="intro-subtitle intro-price">
              <a href="property_view.html"><span class="price-a">List Price | $ ${property.price}</span></a>
            </p>
          </div>
        </div>
      </div>`}
    );

var active = document.getElementsByClassName("carousel-item");
active[0].classList.toggle("active");





function getRecentProp(){
  let propOne = document.getElementById("prop1address")
  let propTwo = document.getElementById("prop2address")
  let propThree = document.getElementById("prop3address")
  propOne.innerHTML = (` ${propertiesFront[0].address.line1} <br> ${propertiesFront[0].address.line2}`)
  propTwo.innerHTML = (` ${propertiesFront[1].address.line1} <br> ${propertiesFront[1].address.line2}`)
  propThree.innerHTML = (` ${propertiesFront[2].address.line1} <br> ${propertiesFront[2].address.line2}`)
}




function getRecentPrice(){
  let priceOne = document.getElementById("priceOne")
  let priceTwo = document.getElementById("priceTwo")
  let priceThree = document.getElementById("priceThree")
  priceOne.innerHTML = (`List Price | $ ${propertiesFront[0].price}`)
  priceTwo.innerHTML = (`List Price | $ ${propertiesFront[1].price}`)
  priceThree.innerHTML = (`List Price | $ ${propertiesFront[2].price}`)

}

getRecentProp();
getRecentPrice();




(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Toggle .navbar-reduce
   */
  let selectHNavbar = select('.navbar-default')
  if (selectHNavbar) {
    onscroll(document, () => {
      if (window.scrollY > 100) {
        selectHNavbar.classList.add('navbar-reduce')
        selectHNavbar.classList.remove('navbar-trans')
      } else {
        selectHNavbar.classList.remove('navbar-reduce')
        selectHNavbar.classList.add('navbar-trans')
      }
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Search window open/close
   */
  let body = select('body');
  on('click', '.navbar-toggle-box', function(e) {
    e.preventDefault()
    body.classList.add('box-collapse-open')
    body.classList.remove('box-collapse-closed')
  })

  on('click', '.close-box-collapse', function(e) {
    e.preventDefault()
    body.classList.remove('box-collapse-open')
    body.classList.add('box-collapse-closed')
  })









})()
