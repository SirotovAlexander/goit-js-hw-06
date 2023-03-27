const fontInput = document.querySelector("#font-size-control");
const textStyle = document.querySelector ("#text")


fontInput.addEventListener("input", onInput);
 
function onInput (event) {
textStyle.style.fontSize = event.currentTarget.valueAsNumber;
}


