import {propertiesGrid} from './prop_main.js';


let id = document.location.search.replace(/[\W_]/g,'')
let y = parseFloat(id) - 200;
console.log(y)


function test(){


  const address = document.getElementById("address_single")
  const addressTwo = document.getElementById("city_single")
  const price = document.getElementById("prop-price")
  const img1 = document.getElementById("image-in-1")
  const img2 = document.getElementById("image-in-2")
  const img3 = document.getElementById("image-in-3")
  const description = document.getElementById("description")
  const description2 = document.getElementById("description2")
  const beds = document.getElementById("beds")
  const baths = document.getElementById("baths")
  const garage = document.getElementById("garage")
  const area = document.getElementById("area")
  const propId = document.getElementById("id");
  const addressRight = document.getElementById("address_single_right")
  const location = document.getElementById("location")


  address.innerHTML = (`${propertiesGrid[y].address.line1} ${propertiesGrid[y].address.line2} `)
  addressTwo.innerHTML = (`${propertiesGrid[y].address.city}, ${propertiesGrid[y].address.state}, ${propertiesGrid[y].address.zipCode}`)
  addressRight.innerHTML = (`${propertiesGrid[y].address.line1} ${propertiesGrid[y].address.line2} `)
  img1.src = propertiesGrid[y].image
  img2.src = propertiesGrid[y].image2
  img3.src = propertiesGrid[y].image3
  description.innerHTML = (`${propertiesGrid[y].description}`)
  description2.innerHTML = (`${propertiesGrid[y].description2}`)
  beds.innerHTML = (`${propertiesGrid[y].beds}`)
  baths.innerHTML = (`${propertiesGrid[y].baths}`)
  garage.innerHTML = (`${propertiesGrid[y].garage}`)
  area.innerHTML = (`${propertiesGrid[y].size}`)
  propId.innerHTML = (`000${propertiesGrid[y].id}444`)
  price.innerHTML = (`${propertiesGrid[y].price}`)
  location.innerHTML = (`${propertiesGrid[y].address.city}, ${propertiesGrid[y].address.state}, ${propertiesGrid[y].address.zipCode}`)
}

test()
