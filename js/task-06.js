const textInput = document.querySelector("input#validation-input");
textInput.addEventListener("input", onInput);

function onInput(event) {
  console.log(event.currentTarget.value);
}
