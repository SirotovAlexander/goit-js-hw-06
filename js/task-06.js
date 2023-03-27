const inputText = document.querySelector("#validation-input");
const lengthCounter = Number(inputText.dataset.length);


// inputText.addEventListener("input", onInput);

// function onInput (event) {
//     console.dir(event.currentTarget)
// }

inputText.addEventListener("blur", onBlur);


function onBlur (event) {
        if(event.currentTarget.value.length >= 1 && event.currentTarget.value.length < lengthCounter) {
            return inputText.classList.add("invalid")
        } else if (event.currentTarget.value.length >= lengthCounter) {
            return inputText.classList.add("valid");
        }
return inputText.classList.remove("invalid") || inputText.classList.remove("valid");

}