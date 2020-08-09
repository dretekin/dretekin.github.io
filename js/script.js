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

// window.onload = function () {
//   let viewPortHeight =
//     window.innerHeight ||
//     document.documentElement.clientHeight ||
//     document.body.clientHeight;

//   if (mobileNav.clientHeight < viewPortHeight) mobileNav.style.height = "100vh";
// };

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
// document.addEventListener("click", function (e) {
//   console.log(e.target);
// });

let container = document.querySelector(".container"),
  containerWrapper = document.querySelector(".container-wrapper"),
  containerWrapperDark = document.querySelector(".container-wrapperCover"),
  showNav = document.querySelector(".menu-navBtnIcon"),
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
let navClicked = true;

showNav.addEventListener("click", function () {
  navClicked = true;
  translateXNav += moveAmt;
  gsap.to(".nav", { duration: 0.4, ease: "power1.out", x: translateXNav });
  gsap.to(".container-wrapper", {
    duration: 0.4,
    ease: "power1.out",
    x: moveAmt,
    onComplete: function () {
      containerWrapperDark.style.display = "block";
    },
  });
});

containerWrapperDark.addEventListener("click", function () {
  navClicked ? (translateXNav -= moveAmt) : null;
  gsap.to(".nav", { duration: 0.4, ease: "power1.out", x: translateXNav });
  gsap.to(".container-wrapper, .cart", {
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

let cartBtn = document.querySelector(".cartBtn");

cartBtn.addEventListener("click", function () {
  navClicked = false;
  // translateXNav += moveAmt;
  // gsap.to(".cart", { duration: 0.4, ease: "power1.out", x: translateXNav });
  gsap.to(".container-wrapper,.cart", {
    duration: 0.4,
    ease: "power1.out",
    x: -moveAmt,
    onComplete: function () {
      containerWrapperDark.style.display = "block";
    },
  });
});

// ////////////////////////////////////
// ////////////////////////////////////
let qtySelector = document.querySelector(".qtySelector"),
  increase = document.querySelector(".qtySelector-increase"),
  decrease = document.querySelector(".qtySelector-decrease"),
  qtySelectorInput = document.querySelector(".qtySelector-input");

let quantity = 1;

// let inputValue = qtySelectorInput.value;
// qtySelectorInput.addEventListener("input", function (e) {
//   // let newVal;
//   this.value = quantity;
//   console.log(e.target.value);
//   if (!/[^1-9]/.test(e.target.value)) {
//     quantity = e.target.value;
//     console.log(quantity);
//     this.value = quantity;
//     console.log(e.target.value);
//   }
// });
// qtySelector.addEventListener("click", function (e) {
//   if (/\d/.test(quantity)) {
//     quantity = Number(quantity);
//     if (e.target.classList.contains("qtySelector-increase")) {
//       quantity++;
//       qtySelectorInput.value = quantity;
//     }
//     if (e.target.classList.contains("qtySelector-decrease")) {
//       quantity ? quantity-- : 0;
//       qtySelectorInput.value = quantity;
//     }
//   }z
// });
// ////////////////////////////////////
// ////////////////////////////////////
function wcqib_refresh_quantity_increments() {
  jQuery(
    "div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)"
  ).each(function (a, b) {
    var c = jQuery(b);
    c.addClass("buttons_added"),
      c
        .children()
        .first()
        .before('<input type="button" value="-" class="minus" />'),
      c
        .children()
        .last()
        .after('<input type="button" value="+" class="plus" />');
  });
}
String.prototype.getDecimals ||
  (String.prototype.getDecimals = function () {
    var a = this,
      b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0;
  }),
  jQuery(document).ready(function () {
    wcqib_refresh_quantity_increments();
  }),
  jQuery(document).on("updated_wc_div", function () {
    wcqib_refresh_quantity_increments();
  }),
  jQuery(document).on("click", ".plus, .minus", function () {
    var a = jQuery(this).closest(".quantity").find(".qty"),
      b = parseFloat(a.val()),
      c = parseFloat(a.attr("max")),
      d = parseFloat(a.attr("min")),
      e = a.attr("step");
    (b && "" !== b && "NaN" !== b) || (b = 0),
      ("" !== c && "NaN" !== c) || (c = ""),
      ("" !== d && "NaN" !== d) || (d = 0),
      ("any" !== e && "" !== e && void 0 !== e && "NaN" !== parseFloat(e)) ||
        (e = 1),
      jQuery(this).is(".plus")
        ? c && b >= c
          ? a.val(c)
          : a.val((b + parseFloat(e)).toFixed(e.getDecimals()))
        : d && b <= d
        ? a.val(d)
        : b > 0 && a.val((b - parseFloat(e)).toFixed(e.getDecimals())),
      a.trigger("change");
  });
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
