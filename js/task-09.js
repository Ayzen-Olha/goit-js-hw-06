const refs = {
  body: document.querySelector("body"),
  btnChaneColor: document.querySelector(".change-color"),
  bgColor: document.querySelector(".color"),
};

refs.btnChaneColor.addEventListener("click", onClickChangeColor);

function onClickChangeColor() {
  refs.body.style.backgroundColor = refs.bgColor.textContent;
  refs.bgColor.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
