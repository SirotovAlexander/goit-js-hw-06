const textInput = document.querySelector("input#name-input");
const nameOutput = document.querySelector("span#name-output");
console.dir(textInput);
textInput.addEventListener("input", inputEvent);

function inputEvent(event) {
  if ((nameOutput.textContent = "")) {
    nameOutput.textContent = "Anonymous";
  } else nameOutput.textContent = `${event.currentTarget.value}`;
}
