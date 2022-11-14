let apiURL = "https://randomuser.me/api";
let addUserBtn = document.querySelector(".add-btn");
let checkStatus = document.createElement("p");
addUserBtn.addEventListener("click", handleClick);

function handleClick() {
  getData();
  checkStatus.classList.add("request");
  document.querySelector(".cards").appendChild(checkStatus);
}

function getData() {
  fetch(apiURL)
    .then((response) => response.json())
    .then((response) => getPersonData(response.results[0]))
    .catch((error) => {
      checkStatus.innerHTML = `Ops! Something went wrong :/ ${error}`;
    });
}

function getPersonData(data) {
  console.log(data);
  let personData = {
    picture: data.picture.large,
    cell: data.cell,
    city: data.location.city,
    country: data.location.country,
    email: data.email,
  };

  createPersonCard(personData);
}

function createPersonCard(data) {
  let cards = document.querySelector(".cards");
  let row = document.createElement("div");
  let card = addPerson(data);

  cards.appendChild(card);
}

function addPerson(data) {
  let card = document.createElement("div");
  card.classList.add("card");

  let img = document.createElement("img");
  img.classList.add("picture");
  img.src = `${data.picture}`;
  img.alt = "Person photo";

  let dataDiv = document.createElement("div");
  dataDiv.classList.add("person-data");

  dataDiv.innerHTML = `
  <p class="person-info"><b>Phone:</b> ${data.cell}</p>
  <p class="person-info"><b>City:</b> ${data.city}</p>
  <p class="person-info"><b>Counry:</b> ${data.country}</p>
  <p class="person-info"><b>Email:</b> ${data.email}</p>
  `;
  card.appendChild(img);
  card.appendChild(dataDiv);

  let buttonX = document.createElement("button");
  buttonX.classList.add("remove-button");
  buttonX.innerHTML = "x";
  card.prepend(buttonX);

  buttonX.addEventListener("click", () => {
    buttonX.parentNode.remove();
  });

  return card;
}

function appendChildren(parent, children) {
  children.forEach((child) => {
    parent.appendChild(child);
  });
}
