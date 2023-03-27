function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyTag = document.querySelector("body");
const buttonColor = document.querySelector("button");
const text = document.querySelector("span.color")
const colorGenerate = bodyTag.style.background = `${getRandomHexColor()}`

buttonColor.addEventListener("click", changeColor)

function changeColor (event) {
  
text.textContent = (bodyTag.style.background = `${getRandomHexColor()}`).toString(16)
  return (bodyTag.style.background = `${getRandomHexColor()}`).toString(16)
}