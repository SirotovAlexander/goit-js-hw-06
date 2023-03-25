const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

for (let i = 0; i < ingredients.length; i += 1) {
  const newIngredient = document.createElement("li");
  newIngredient.textContent = `${ingredients[i]}`;
  newIngredient.classList.add("item");
  ingredientsList.append(newIngredient);
}
