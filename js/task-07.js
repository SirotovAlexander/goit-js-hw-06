const fontInput = document.querySelector("#font-size-control");
const textStyle = document.querySelector ("#text")

fontInput.addEventListener("input", changeStyle)

function changeStyle (event) {

    textStyle.style.fontSize = `${event.currentTarget.valueAsNumber}px`;
}

 
