// Global variables
let productsData = [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Fetch products from JSON and init page
async function fetchProducts() {
  try {
    const res = await fetch("data/products.json");
    productsData = await res.json();

    if (document.getElementById("productsGrid")) {
      renderProducts();
    }
    if (document.getElementById("productName")) {
      loadProductDetails();
    }
    if (document.getElementById("cartItems")) {
      renderCart();
    }
    if (document.getElementById("orderSummary")) {
      loadCheckoutSummary();
    }
  } catch (error) {
    console.error("Failed to load products:", error);
  }
}

// Render product cards (home + products page)
function renderProducts() {
  const container = document.getElementById("productsGrid");
  container.innerHTML = "";

  productsData.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    productCard.innerHTML = `
      <img src="${
