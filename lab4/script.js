let firstElement = document.getElementById("main__hobby-title");
let secondElement = document.querySelector(".main__list>li");
const image = document.querySelector(".main__town-image");

const imageState = document.querySelector(".showImgState");
imageState.innerHTML = "";

firstElement.addEventListener("click", setColor);
secondElement.addEventListener("click", setColor);
document.querySelector(".remove").addEventListener("click", removeImg);
document.querySelector(".add").addEventListener("click", addImg);
document.querySelector(".increase").addEventListener("click", increaseImg);
document.querySelector(".decrease").addEventListener("click", decreaseImg);

function getRandomColor() {
  return Math.round(Math.random() * (256 - 1) + 1).toString();
}

function setColor(event) {
  event.target.style.backgroundColor = `rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()})`;
  event.target.style.color = `rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()})`;
}

function removeImg() {
  if (image.style.display === "none") {
    imageState.innerHTML = "The image is already invisible";
  } else {
    image.style.display = "none";
    imageState.innerHTML = "";
  }
}
function addImg() {
  console.log(image.style.display);
  if (image.style.display === "block") {
    imageState.innerHTML = "The image is already visible";
  } else {
    image.style.display = "block";
    imageState.innerHTML = "";
  }
}

function decreaseImg() {
  if (image.width > 200) {
    imageState.innerHTML = "";
    image.width -= 50;
  } else {
    imageState.innerHTML = "The image is small enough";
  }
}
function increaseImg() {
  if (image.width < 600) {
    imageState.innerHTML = "";
    image.width += 50;
  } else {
    imageState.innerHTML = "The image is big enough";
  }
}
