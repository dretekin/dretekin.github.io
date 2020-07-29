let currency = document.querySelector(".currency");
let currencySelectBtn = document.querySelector(".currency-selectBtn");
let currencyItems = document.querySelector(".currency-items");
let currencySelected = document.querySelector(".currency-selected");
let qLinks = document.querySelector(".qLinks");
let lgSearchOpenBtn = qLinks.querySelector(".lgSearch-openBtn");
let lgSearch = qLinks.querySelector(".lgSearch");
let lgSearchCloseBtn = qLinks.querySelector(".lgSearch-closeBtn");
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

lgSearchOpenBtn.addEventListener("click", function (e) {
  if (this.contains(e.target)) lgSearch.classList.add("show");
});

lgSearchCloseBtn.addEventListener("click", function () {
  lgSearch.classList.remove("show");
});

window.onload = function () {
  let viewPortHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

  // if (mobileNav.clientHeight < viewPortHeight) mobileNav.style.height = "100vh";
};
