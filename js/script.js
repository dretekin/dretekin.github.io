let currencyWrapper = document.getElementById("currency-convertor-wrapper");
let selectorBtn = currencyWrapper.querySelector(".selector-btn");
let currencies = currencyWrapper.querySelector("#currencies");
let selectedCurrency = currencyWrapper.querySelector(".selected");
let lMenu = document.getElementById("l-menu");
let search = lMenu.querySelector(".search");
let searchBoxWrapper = lMenu.querySelector(".search-box-wrapper");
let closeSearchBox = lMenu.querySelector(".close-seach-box");

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

search.addEventListener("click", function (e) {
  if (this.contains(e.target)) searchBoxWrapper.classList.add("show");
});

closeSearchBox.addEventListener("click", function () {
  searchBoxWrapper.classList.remove("show");
});
