export const agents = [
  {
    name: "Christopher Skaro",
    image: "assets/img/agent-1.jpg",
    tag: "CEO-Co partner",
    phoneNumber: "773-517-9137",
    email: "C.Skaro.jcres@gmail.com"
  }, {
    name: "Joseph Piko",
    image: "assets/img/agent-2.jpg",
    tag: "CEO-Co partner",
    phoneNumber: "719 357 7692",
    email: "j.piko.jcres@gmail.com"
  }

];

/* For each Agent create the card */
agents.forEach((agent, index) => {
  var card = document.querySelector("#agent-list")
  card.innerHTML = card.innerHTML + `
  <div class="col-md-4 tile fadeIn" id="card-main">
    <div class="card-box-d ">
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
  `
});
