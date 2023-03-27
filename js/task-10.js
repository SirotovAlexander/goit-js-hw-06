function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxControl = document.querySelector("#controls");

boxControl.children[0].addEventListener("input", createBoxes);
boxControl.children[1].addEventListener("click", pushBoxes);
boxControl.children[2].addEventListener("click", destroyBoxes);
const newBox = document.querySelector("#boxes");

function createBoxes(event) {
  event.currentTarget.valueAsNumber;
}

function pushBoxes(event) {
  const newDi = document.createElement("div");
  newDi.style.backgroundColor = `${getRandomHexColor()}`;
  newDi.style.width = `30px`;
  newDi.style.height = `30px`;
  newDi.style.marginBottom = "12px";
  newDi.style.marginTop = "12px";
  newBox.prepend(newDi) * `${createBoxes(event)}`;
}

function destroyBoxes(event) {
  newBox.innerHTML = "";
}
