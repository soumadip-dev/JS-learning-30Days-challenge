document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    productCard.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">₹${product.price.toLocaleString()}</p>
            <button onclick="addToCart('${product.name}', ${
      product.price
    })">Add to Cart</button>
        `;

    productList.appendChild(productCard);
  });
});

let cart = [];

function addToCart(name, price) {
  const existingItem = cart.find((item) => item.name === name);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  cartItems.innerHTML = ""; // Clear the cart display

  let total = 0;
  cart.forEach((item) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";

    cartItem.innerHTML = `
            <p>${item.name} (₹${item.price.toLocaleString()} x ${
      item.quantity
    })</p>
            <button onclick="increaseQuantity('${item.name}')">+</button>
            <button onclick="decreaseQuantity('${item.name}')">-</button>
            <button onclick="removeFromCart('${item.name}')">Remove</button>
        `;

    cartItems.appendChild(cartItem);
  });

  cartTotal.textContent = `Total: ₹${total.toLocaleString()}`;
}

function increaseQuantity(name) {
  const item = cart.find((item) => item.name === name);
  if (item) {
    item.quantity++;
  }
  updateCartDisplay();
}

function decreaseQuantity(name) {
  const item = cart.find((item) => item.name === name);
  if (item && item.quantity > 1) {
    item.quantity--;
  } else if (item && item.quantity === 1) {
    cart = cart.filter((item) => item.name !== name);
  }
  updateCartDisplay();
}

function removeFromCart(name) {
  cart = cart.filter((item) => item.name !== name);
  updateCartDisplay();
}

function handleCheckout(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const payment = document.getElementById("payment").value;

  if (cart.length === 0) {
    alert("Your cart is empty. Add some products before checking out.");
    return;
  }

  const orderDetails = {
    customerName: name,
    customerAddress: address,
    paymentDetails: payment,
    items: cart,
    totalAmount: cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    ),
  };

  console.log("Order Placed:", orderDetails);
  alert(
    `Thank you for your order, ${name}! Your total is ₹${orderDetails.totalAmount.toLocaleString()}.`
  );

  // Reset the cart
  cart = [];
  updateCartDisplay();

  // Reset the form
  event.target.reset();
}
