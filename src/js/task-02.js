const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const listIngredientsEl = [];

ingredients.forEach((element) => {
  const newEl = document.createElement("li");
  newEl.classList.add("item");
  newEl.textContent = element;
  listIngredientsEl.push(newEl);
  console.log(newEl);
});
ingredientsEl.append(...listIngredientsEl);
