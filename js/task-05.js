const textInput = document.querySelector("input#name-input");
const nameOutput = document.querySelector("span#name-output");
console.dir(textInput);
textInput.addEventListener("input", inputEvent);

function inputEvent(event) {
  nameOutput.textContent = `${event.currentTarget.value}`;
  if (nameOutput.textContent === "") {
    return (nameOutput.textContent = "Anonymous");
  }
}
