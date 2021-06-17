export const propertiesGrid = [
  {
    image: "assets/img/slide-3.jpg",
    price: "1.4M",
    beds: 4,
    baths: 3,
    size: "2300sqft",
    garage: 3,
    mix: "new",
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
    garage: 1,
    mix: "new",
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
    beds: 3,
    baths: 2,
    size: "1600sqft",
    garage: 1,
    mix: "new",
    address: {
      line1: "1888",
      line2: "Bright Star Road",
      city: "Black Forrest",
      state: "Colorado",
      zipCode: "87745"
    }

  }, {
    image: "assets/img/property-10.jpg",
    price: "360,000",
    beds: 3,
    baths: 2,
    size: "1900sqft",
    garage: 1,
    mix: "old",
    address: {
      line1: "1892",
      line2: "Old Fort Lane",
      city: "Colorado Springs",
      state: "Colorado",
      zipCode: "87745"
    }

  }, {
    image: "assets/img/property-4.jpg",
    price: "1,650",
    beds: 3,
    baths: 2,
    size: "1600sqft",
    garage: 1,
    mix: "rent",
    address: {
      line1: "1234",
      line2: "Vista La Renovated",
      city: "Black Forrest",
      state: "Colorado",
      zipCode: "87745"
    }

  }, {
    image: "assets/img/property-9.jpg",
    price: "260,000",
    beds: 3,
    baths: 2,
    size: "1600sqft",
    garage: 1,
    mix: "buy",
    address: {
      line1: "8679",
      line2: "Buy Me RD.",
      city: "Black Forrest",
      state: "Colorado",
      zipCode: "87745"
    }

  }
]

/* loop through and create the hero details for the featured property */
propertiesGrid.forEach((property, index) => {
  var prop = document.querySelector("#prop-grid");
  prop.innerHTML = prop.innerHTML + `
  <div class="col-md-4 mix" data-rating="${propertiesGrid[index].mix}" >
    <div class="card-box-a card-shadow">
      <div class="img-box-a">
        <img src="${propertiesGrid[index].image}" alt="" class="img-a " style="background:no-repeat center center fixed;height:550px;background-size:100%;">
      </div>
      <div class="card-overlay">
        <div class="card-overlay-a-content">
          <div class="card-header-a">
            <h2 class="card-title-a">
              <a href="#">${propertiesGrid[index].address.line1}
                <br />${propertiesGrid[index].address.line2}</a>
            </h2>
          </div>
          <div class="card-body-a">
            <div class="price-box d-flex">
              <span class="price-a">${propertiesGrid[index].mix} | $ ${propertiesGrid[index].price}</span>
            </div>
            <a href="property-single.html" class="link-a">Click here to view
              <span class="bi bi-chevron-right"></span>
            </a>
          </div>
          <div class="card-footer-a">
            <ul class="card-info d-flex justify-content-around">
              <li>
                <h4 class="card-info-title">Area</h4>
                <span>${propertiesGrid[index].size}
                  <sup>2</sup>
                </span>
              </li>
              <li>
                <h4 class="card-info-title">Beds</h4>
                <span>${propertiesGrid[index].beds}</span>
              </li>
              <li>
                <h4 class="card-info-title">Baths</h4>
                <span>${propertiesGrid[index].baths}</span>
              </li>
              <li>
                <h4 class="card-info-title">Garages</h4>
                <span>${propertiesGrid[index].garage}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>`
});


const rating = document.getElementById("rating");
const elements = document.querySelectorAll(".mix");

rating.addEventListener("change", function () {
  let value = rating.value;
  [...elements].forEach((element) => {
    if (value === "") {
      element.classList.remove("hidden");
    } else {
      const rating = element.dataset.rating;
      if (rating != value) {
        element.classList.add("hidden");
      } else {
        element.classList.remove("hidden");
      }
    }
  });
});



// var active = document.getElementsByClassName("carousel-item");
// active[0].classList.toggle("active");
//
// function getRecentProp() {
//   let propOne = document.getElementById("prop1address")
//   let propTwo = document.getElementById("prop2address")
//   let propThree = document.getElementById("prop3address")
//   propOne.innerHTML = (` ${propertiesFront[0].address.line1} <br> ${propertiesFront[0].address.line2}`)
//   propTwo.innerHTML = (` ${propertiesFront[1].address.line1} <br> ${propertiesFront[1].address.line2}`)
//   propThree.innerHTML = (` ${propertiesFront[2].address.line1} <br> ${propertiesFront[2].address.line2}`)
// }
//
// function getRecentPrice() {
//   let priceOne = document.getElementById("priceOne")
//   let priceTwo = document.getElementById("priceTwo")
//   let priceThree = document.getElementById("priceThree")
//   priceOne.innerHTML = (`List Price | $ ${propertiesFront[0].price}`)
//   priceTwo.innerHTML = (`List Price | $ ${propertiesFront[1].price}`)
//   priceThree.innerHTML = (`List Price | $ ${propertiesFront[2].price}`)
//
// }
//
// getRecentProp();
// getRecentPrice();
