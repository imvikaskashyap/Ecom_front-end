const categoryList = document.getElementById("categoryList");
const searchInput = document.getElementById("searchInput");
const minPrice = document.getElementById("minPrice");
const maxPrice = document.getElementById("maxPrice");
const productList = document.getElementById("productList");
const clear = document.getElementById("clear");
const userIntro = document.getElementById("userIntro");
const logoutBtn = document.getElementById("logoutBtn");

// Event Listeners

searchInput.addEventListener("keyup", () => {
  const data = {
    name: searchInput.value,
    minCost: minPrice.value,
    maxCost: maxPrice.value,
  };

  let URI = "/products?";
  fetch(BASE_URL + URI + new URLSearchParams(data))
    .then((res) => res.json())
    .then((data) => renderProducts(data));
});

clear.addEventListener("click", () => {
  window.location.reload();
});

function loadCategories() {
  fetch(`${BASE_URL}/categories`)
    .then((res) => res.json())
    .then((data) => renderCategories(data))
    .catch((error) => {
      console.log(error);
    });
}

function loadProducts() {
  let data = {};
  if (window.location.search) {
    data.id = window.location.search.split("=")[1];
  }

  // Uniform Resource Identifire

  let URI = "/products";

  if (data.id) {
    URI = `/categories/${data.id}/products`;
  }

  fetch(`${BASE_URL}${URI}`)
    .then((res) => res.json())
    .then((data) => renderProducts(data))
    .catch((err) => console.log(err));
}

function renderCategories(categories) {
  let categoryListHtml = "";

  for (let i = 0; i < categories.length; i++) {
    categoryListHtml +=
      '<a class="text-decoration-none mx-2 " href="productList.html?categoryId=' +
      categories[i].id +
      '">' +
      categories[i].name +
      "</a>";
  }

  categoryList.innerHTML = categoryListHtml;
}

function renderProducts(products) {
  let productListHtml = "";

  for (let i = 0; i < products.length; i++) {
    productListHtml +=
      '<a class="product-item text-deoration-none d-inline-block" href="productDetails.html?productId=' +
      products[i].id +
      '">' +
      '<div class="product-img">' +
      '<img src="https://img.favpng.com/8/17/0/product-design-clip-art-logo-food-png-favpng-TsCQEsJH2LUYN3d5Q6RzrTsqL.jpg">' +
      "</div>" +
      '<div class="product-name text-center">' +
      products[i].name +
      "</div>" +
      '<div class="product-price text-center"> ₹' +
      products[i].cost +
      "</div>" +
      "</a>";
  }

  productList.innerHTML = productListHtml;
}

loadCategories();
loadProducts();
