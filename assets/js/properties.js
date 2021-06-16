/* for each property you want to show case */
export const propertiesFront = [
  {
    image: "assets/img/slide-3.jpg",
    price: "1.4M",
    beds: 4,
    baths: 3,
    size: "2300sqft",
    garage: 1,
    address: {
      line1: "1643",
      line2: "Olive Road",
      city: "Black Forrest",
      state: "Colorado",
      zipCode: "87745"
    }

  }, {
    image: "assets/img/slide-4.jpg",
    price: "350,000.00",
    beds: 3,
    baths: 2,
    size: "1800sqft",
    garage: "1",
    address: {
      line1: "1588",
      line2: "Loan Star Road",
      city: "Black Forrest",
      state: "Colorado",
      zipCode: "87745"
    }

  }, {
    image: "assets/img/slide-2.jpg",
    price: "1.2M",
    beds: "3",
    baths: "2",
    size: "1600sqft",
    garage: "1",
    address: {
      line1: "1888",
      line2: "Bright Star Road",
      city: "Black Forrest",
      state: "Colorado",
      zipCode: "87745"
    }

  }
]

/* loop through and create the hero details for the featured property */
propertiesFront.forEach((property, index) => {
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
              <a href="property_view.html"><span class="price-a">List Price | $ ${property.price}</span></a>
            </p>
          </div>
        </div>
      </div>`
});

var active = document.getElementsByClassName("carousel-item");
active[0].classList.toggle("active");

function getRecentProp() {
  let propOne = document.getElementById("prop1address")
  let propTwo = document.getElementById("prop2address")
  let propThree = document.getElementById("prop3address")
  propOne.innerHTML = (` ${propertiesFront[0].address.line1} <br> ${propertiesFront[0].address.line2}`)
  propTwo.innerHTML = (` ${propertiesFront[1].address.line1} <br> ${propertiesFront[1].address.line2}`)
  propThree.innerHTML = (` ${propertiesFront[2].address.line1} <br> ${propertiesFront[2].address.line2}`)
}

function getRecentPrice() {
  let priceOne = document.getElementById("priceOne")
  let priceTwo = document.getElementById("priceTwo")
  let priceThree = document.getElementById("priceThree")
  priceOne.innerHTML = (`List Price | $ ${propertiesFront[0].price}`)
  priceTwo.innerHTML = (`List Price | $ ${propertiesFront[1].price}`)
  priceThree.innerHTML = (`List Price | $ ${propertiesFront[2].price}`)

}

getRecentProp();
getRecentPrice();