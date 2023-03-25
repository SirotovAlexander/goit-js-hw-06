const categories = document.querySelector("#categories");
console.dir(`Number of categories: ${categories.children.length}`);

[...categories.children].forEach((element) => {
  console.log(`Category: ${element.querySelector("h2").textContent}`);
  console.log(`Elements: ${element.querySelectorAll("li").length}`);
});

// const categories = document.querySelector("#categories");
// console.dir(`Number of categories: ${categories.children.length}`);

// [...categories.children].forEach((element) => {
//   console.log(`Category: ${element.querySelector("h2").textContent}`);
//   console.log(`Elements: ${element.querySelectorAll("li").length}`);
// });
// const categories = document.querySelector("#categories");
// console.dir(`Number of categories: ${categories.children.length}`);

// [...categories.children].forEach((element) => {
//   console.log(`Category: ${element.querySelector("h2").textContent}`);
//   console.log(`Elements: ${element.querySelectorAll("li").length}`);
// });
