const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", onFocusInputEl);

function onFocusInputEl(event) {
  console.dir(event.currentTarget.value);
  inputEl.classList.remove("valid");
  inputEl.classList.remove("invalid");
  if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
  }
  return inputEl;
}
