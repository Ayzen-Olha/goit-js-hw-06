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

const galleryEl = document.querySelector(".gallery");

let listEl = [];

images.forEach((image) => {
  const itemEl = document.createElement("li");
  const imageEl = document.createElement("img");

  galleryEl.style.listStyleType = "none";
  itemEl.appendChild(imageEl);
  listEl.push(image);
});

const markup = listEl
  .map(
    (img) =>
      `<li class = gallery__item> <img class = gallery__img src = ${img.url} width = 300 alt = ${img.alt}> </li>`
  )
  .join("");

galleryEl.insertAdjacentHTML("beforeend", markup);
