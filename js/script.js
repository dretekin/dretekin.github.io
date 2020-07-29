let currency = document.querySelector(".currency");
let currencySelectBtn = document.querySelector(".currency-selectBtn");
let currencyItems = document.querySelector(".currency-items");
let currencySelected = document.querySelector(".currency-selected");
let lMenu = document.getElementById("l-menu");
let search = lMenu.querySelector(".search");
let searchBoxWrapper = lMenu.querySelector(".search-box-wrapper");
let closeSearchBox = lMenu.querySelector(".close-seach-box");
// let mobileNav = document.querySelector(".mobile-nav");

currencySelectBtn.addEventListener("click", (e) => {
  currencyItems.classList.toggle("dropdown");
});

currencyItems.addEventListener("click", (e) => {
  currencySelected.textContent = e.target.dataset.currency;
  currencyItems.classList.remove("dropdown");
});

window.addEventListener("click", (e) => {
  if (
    !currency.contains(e.target) ||
    e.target.classList.contains("currency-selector")
  )
    currencyItems.classList.remove("dropdown");
});

search.addEventListener("click", function (e) {
  if (this.contains(e.target)) searchBoxWrapper.classList.add("show");
});

closeSearchBox.addEventListener("click", function () {
  searchBoxWrapper.classList.remove("show");
});

window.onload = function () {
  let viewPortHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

  // if (mobileNav.clientHeight < viewPortHeight) mobileNav.style.height = "100vh";
};
