function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxControl = document.querySelector("#controls");
const inPut = document.querySelector("#controls input");
boxControl.children[1].addEventListener("click", createBoxes);
boxControl.children[2].addEventListener("click", destroyBoxes);
const newBox = document.querySelector("#boxes");

function createBoxes(event) {
  const amount = inPut.value;

  let sizeDefault = 30;
  for (let i = 0; i < amount; i += 1) {
    sizeDefault += 10;
    const newDi = document.createElement("div");
    newDi.style.backgroundColor = `${getRandomHexColor()}`;
    newDi.style.width = `${sizeDefault}px`;
    newDi.style.height = `${sizeDefault}px`;
    newDi.style.marginBottom = "12px";
    newDi.style.marginTop = "12px";

    newBox.prepend(newDi);
  }
}

function destroyBoxes(event) {
  inPut.value = "";
  newBox.innerHTML = "";
}
