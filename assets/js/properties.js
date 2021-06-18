// import properties
import {propertiesGrid} from './prop_main.js'


/* loop through and create the hero details for the featured property */
propertiesGrid.forEach((property, index) => {
  if(property.id <= 2){

    var prop = document.querySelector("#prop-head");
    prop.innerHTML = prop.innerHTML + `
    <div class="carousel-item " >
      <div class="overlay-img"style="background: url(${property.image});"
      <div class="container-carousel">
        <div class="carousel-caption text-start">
          <p class="intro-title-top">${property.address.city}, ${property.address.state} <br>${property.address.zipCode}</p>
            <h1 class="intro-title mb-4">
              <span class="color-b">${property.address.line1}</span>
              <br> ${property.address.line2}</h1>
              <p class="intro-subtitle intro-price">
                <a href="property_view.html?= ${propertiesGrid[index].id}"><span class="price-a">List Price | $ ${property.price}</span></a>
              </p>
            </div>
          </div>
        </div>`
  }else {
    return;
  }

});

var active = document.getElementsByClassName("carousel-item");
active[0].classList.toggle("active");

function getRecentProp() {
  let propOne = document.getElementById("prop1address")
  let propTwo = document.getElementById("prop2address")
  let propThree = document.getElementById("prop3address")
  propOne.innerHTML = (` ${propertiesGrid[0].address.line1} <br> ${propertiesGrid[0].address.line2}`)
  propTwo.innerHTML = (` ${propertiesGrid[1].address.line1} <br> ${propertiesGrid[1].address.line2}`)
  propThree.innerHTML = (` ${propertiesGrid[2].address.line1} <br> ${propertiesGrid[2].address.line2}`)
}

function getRecentPrice() {
  let priceOne = document.getElementById("priceOne")
  let priceTwo = document.getElementById("priceTwo")
  let priceThree = document.getElementById("priceThree")
  priceOne.innerHTML = (`List Price | $ ${propertiesGrid[0].price}`)
  priceTwo.innerHTML = (`List Price | $ ${propertiesGrid[1].price}`)
  priceThree.innerHTML = (`List Price | $ ${propertiesGrid[2].price}`)

}

getRecentProp();
getRecentPrice();
