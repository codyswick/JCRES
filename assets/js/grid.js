import {propertiesGrid} from './prop_main.js'


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
              <a href="property_view.html?= ${propertiesGrid[index].id}">${propertiesGrid[index].address.line1}
                <br />${propertiesGrid[index].address.line2}</a>
            </h2>
          </div>
          <div class="card-body-a">
            <div class="price-box d-flex">
              <span class="price-a">${propertiesGrid[index].mix} | $ ${propertiesGrid[index].price}</span>
            </div>
            <a href="property_view.html?= ${propertiesGrid[index].id}"  class="link-a">Click here to view
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

// filter by value
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
