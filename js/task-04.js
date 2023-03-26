const value = document.querySelector("#value");

const deCbtn = document.querySelector(
  '#counter button[data-action="decrement"]'
);

const inCbtn = document.querySelector(
  '#counter button[data-action="increment"]'
);

let counterValue = 0;

function decrement(event) {
  counterValue -= 1;
  value.textContent = `${counterValue}`;
}

function increment(event) {
  counterValue += 1;
  value.textContent = `${counterValue}`;
}

deCbtn.addEventListener("click", decrement);
inCbtn.addEventListener("click", increment);
