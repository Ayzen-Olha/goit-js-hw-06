const refs = {
  incrBtn: document.querySelector("[data-action=increment]"),
  decrBtn: document.querySelector("[data-action=decrement]"),
  spanEl: document.querySelector("#value"),
};

const counterValue = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

refs.incrBtn.addEventListener("click", function () {
  counterValue.increment();
  refs.spanEl.textContent = counterValue.value;
});

refs.decrBtn.addEventListener("click", function () {
  counterValue.decrement();
  refs.spanEl.textContent = counterValue.value;
});
