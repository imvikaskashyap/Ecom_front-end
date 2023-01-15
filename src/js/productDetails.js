// const productDetails = document.getElementById("productDetails");
// const addToCartBtn = document.getElementById("addToCartBtn");
// const goToCartBtn = document.getElementById("goToCartBtn");

// function loadProductDetails() {
//   const productId = window.location.search.split("=")[1];

//   fetch(`${BASE_URL}/products/${productId}`)
//     .then((res) => res.json())
//     .then((data) => renderProductDetails(data))
//     .catch((error) => console.log(error));
// }

// function renderProductDetails(data) {
//   let productDetailsHtml =
//     '<div class="product_name">' +
//     data.name +
//     "</div>" +
//     '<div class="product_price fw-bold">₹' +
//     data.cost +
//     "</div>" +
//     '<div class="product_description">' +
//     '<div class="product_description_title fw-bold">Description</div>' +
//     '<div class="product_description_data">' +
//     data.description +
//     "</div>";

//   productDetails.innerHTML = productDetailsHtml;
// }

// loadProductDetails();
