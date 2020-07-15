let currencyWrapper = document.querySelector(".currency-convertor-wrapper");

let selectorBtn = currencyWrapper.querySelector(".selector-btn");

let currencies = currencyWrapper.querySelector("#currencies");

let selectedCurrency = currencyWrapper.querySelector(".selected");

selectorBtn.addEventListener("click", (e) => {
  currencies.classList.toggle("dropdown");
});

currencies.addEventListener("click", (e) => {
  selectedCurrency.textContent = e.target.dataset.currency;
  currencies.classList.remove("dropdown");
});

window.addEventListener("click", (e) => {
  if (
    !currencyWrapper.contains(e.target) ||
    e.target.classList.contains("currency-selector")
  )
    currencies.classList.remove("dropdown");
});
