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

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
// document.addEventListener("click", function (e) {
//   console.log(e.target);
// });

let container = document.querySelector(".container"),
  containerCover = document.querySelector(".container-wrapper"),
  containerCoverDark = document.querySelector(".container-wrapperCover"),
  showNav = document.querySelector(".menu-navBtn"),
  showSubNav = document.querySelectorAll(".nav-link_toSubNav"),
  subNav = document.querySelector(".sub-nav"),
  goBack = document.querySelectorAll(".nav-link_goBack");

// let viewPortWidth =
//   window.innerWidth ||
//   document.documentElement.clientWidth ||
//   document.body.clientWidth;
// // let moveAmt = (80 / 100) * viewPortWidth original;
let translateXNav = 0;
let moveAmt = 300;
let time = 0.8;

showNav.addEventListener("click", function () {
  translateXNav += moveAmt;
  gsap.to(".nav", { duration: 0.4, ease: "power1.out", x: translateXNav });
  gsap.to(".container-wrapper", {
    duration: 0.4,
    ease: "power1.out",
    x: moveAmt,
    onComplete: function () {
      containerCoverDark.style.display = "block";
    },
  });
});

containerCoverDark.addEventListener("click", function () {
  translateXNav -= moveAmt;
  gsap.to(".nav", { duration: 0.4, ease: "power1.out", x: translateXNav });
  gsap.to(".container-wrapper", {
    duration: 0.4,
    ease: "power1.out",
    x: 0,
    onComplete: () => {
      this.style.display = "none";
    },
  });
});

showSubNav.forEach(function (subNav) {
  subNav.addEventListener("click", function () {
    this.nextElementSibling.style.display = "block";
    translateXNav += moveAmt;
    gsap.to(".nav", { duration: 0.6, ease: "power1.out", x: translateXNav });
  });
});

goBack.forEach(function (el) {
  el.addEventListener("click", function () {
    translateXNav -= moveAmt;
    gsap.to(".nav", {
      duration: 0.6,
      ease: "power1.out",
      x: translateXNav,
      onComplete: function () {
        el.parentElement.parentElement.style.display = "none";
      },
    });
  });
});
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
