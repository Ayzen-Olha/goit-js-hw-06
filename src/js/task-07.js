const inputEl = document.querySelector("#font-size-control");
const spanTextEl = document.querySelector("#text");

inputEl.addEventListener("input", onInputElChange);

function onInputElChange(event) {
  spanTextEl.style.fontSize = inputEl.value + "px";
}

