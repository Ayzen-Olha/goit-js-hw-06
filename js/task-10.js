const refs = {
  createBtn: document.querySelector("[data-create]"),
  destroyeBtn: document.querySelector("[data-destroy]"),
  divBoxes: document.querySelector("#boxes"),
  inputRef: document.querySelector("input"),
};

refs.createBtn.addEventListener("click", createBoxes);
refs.destroyeBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = Number(refs.inputRef.value);
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `20px`;
    box.style.height = `20px`;
    box.style.backgroundColor = `${getRandomHexColor()}`;
    box.style.marginTop = "20px";
    refs.divBoxes.appendChild(box);
  }
}
function destroyBoxes() {
  refs.divBoxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
