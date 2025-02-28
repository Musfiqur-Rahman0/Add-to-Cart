let selectedColor = "gray";
let selectedWristSize = "S";
let seletedQuantity;
let price;
const title = productTitle.innerText;
let totalPrice = 0;

colorBtnContainer.addEventListener("click", function (e) {
  const targetedElement = e.target;
  const imageBaseUrl = "./images/";
  selectedColor = targetedElement.id.split("-")[0];

  console.log(selectedColor);
  if (targetedElement.id.includes("color")) {
    for (let colorBtn of colorsBtns) {
      removeClass(colorBtn, "border-purple-500");
    }
    addClass(targetedElement, "border-purple-500");
  }
  productImage.src = imageBaseUrl + selectedColor + ".png";
});

function selectWristSize(size) {
  selectedWristSize = size;
  const sizes = ["S", "M", "L", "XL"];
  for (let s of sizes) {
    const button = document.getElementById(`size-${s}`);
    const element = s;
    if (size === element) {
      addClass(button, "border-purple-500");
      const convertedPrice = parseInt(button.innerText.split("$")[1]);
      price = convertedPrice;
    } else {
      removeClass(button, "border-purple-500");
    }
  }
}

quantityBtns.forEach((button) => {
  button.addEventListener("click", function (e) {
    const targetedButton = e.target.innerText;
    const amount = targetedButton === "+" ? 1 : -1;
    const currentQuantity = parseInt(quantity.innerText);
    const newQuantity = Math.max(0, currentQuantity + amount);
    seletedQuantity = newQuantity;
    quantity.innerText = newQuantity;
  });
});

let cartItems = localStorage.getItem("cart-items") || [];
addToCart.addEventListener("click", function () {
  const convertedQuantity = parseInt(quantity.innerText);
  const currentCartCount = parseInt(cartCount.innerText);

  const newCount = currentCartCount + convertedQuantity;
  cartCount.innerText = newCount;
  if (convertedQuantity > 0) {
    removeClass(checkOutContainer, "hidden");
    JSON.stringify(
      cartItems.push({
        img: "./images/" + selectedColor + ".png",
        title: title,
        size: selectedWristSize,
        color: selectedColor,
        quantity: seletedQuantity,
        price: price * convertedQuantity,
      })
    );
    localStorage.setItem("cart-items", JSON.stringify(cartItems));
  } else {
    alert("pleasae add some quantity");
  }
});

checkOutBtn.addEventListener("click", () => {
  removeClass(cartModal, "hidden");
});
function createDynamicCartList() {
  const row = document.createElement("tr");
  // console.log(typeof cartItems);
  const localCartItems = JSON.parse(cartItems);
  localCartItems.map((item) => {
    row.classList.add("border-b");
    row.innerHTML = `
      <td class="py-2 px-4">
      <div class="flex items-center space-x-2">
        <img class="h-12 w-12 object-cover rounded-md" src="${item.img}" alt="${item.title}">
        <span class="font-semibold">${item.title}</span>
      </div>
    </td>
    <td class="py-2 px-4">${item.color}</td>
    <td class="py-2 px-4">${item.size}</td>
    <td class="py-2 px-4">${item.quantity}</td>
    <td class="py-2 px-4">$${item.price}</td>
    `;
  });
  // cartItems.forEach((item) => {});
  cartItemsContainer.appendChild(row);
}

continueBtn.addEventListener("click", function () {
  addClass(cartModal, "hidden");
});
window.addEventListener("load", createDynamicCartList);
