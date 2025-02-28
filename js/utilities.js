const colorsBtns = document.querySelectorAll(".ring-button");

const colorBtnContainer = document.querySelector("#color-btn-container");
const quantityBtns = document.querySelectorAll(".quantity-button");
const quantity = document.getElementById("quantity");
const addToCart = document.getElementById("add-to-cart");
const checkOutContainer = document.getElementById("checkout-container");
const cartCount = document.getElementById("cart-count");
const checkOutBtn = document.getElementById("checkout-btn");
const cartModal = document.getElementById("cart-modal");
const continueBtn = document.getElementById("continue-shopping");
const productTitle = document.getElementById("product-title");
const productImage = document.getElementById("product-image");
const cartItemsContainer = document.getElementById("cart-items");

function addClass(element, className) {
  element.classList.add(className);
}
function removeClass(element, className) {
  element.classList.remove(className);
}
