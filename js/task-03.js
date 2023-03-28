const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryOperation = document.querySelector(".gallery");
galleryOperation.classList.add("galleryFlex", "fix-list-style");

let imgArr = "";

for (let i = 0; i < images.length; i += 1) {
  let newImg = `<li><img src="${images[i].url}" alt="${images[i].alt}" width="300" height="300"></li>`;
  imgArr += newImg;
}

galleryOperation.insertAdjacentHTML("afterbegin", imgArr);
