console.log("this is productLis1");

const userIntro = document.querySelector("#userIntro");
const logoutBtn = document.querySelector("#logoutBtn");
const searchInput = document.querySelector("#searchInput");
const categoryList = document.querySelector("#categoryList");
const minPrice = document.querySelector("#minPrice");
const maxPrice = document.querySelector("#maxPrice");
const clear = document.querySelector("#clear");
const productList = document.querySelector("#productList");

function loadCategories() {
  fetch(`${BASE_URL}/categories`)
    .then((res) => res.json())
    .then((data) => renderCategories(data))
    .catch((error) => console.log(error));
}

function renderCategories(categories) {
  let categoryListHtml = "";

  for (let i = 0; i < categories.length; i++) {
    categoryListHtml +=
      '<a class="text-decoration-none mx-2" href="productList.html?categoryId=' +
      categories[i].id +
      '">' +
      categories[i].name +
      "</a>";
  }

  categoryList.innerHTML = categoryListHtml;
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

function renderProducts(products) {
  let productListHtml = "";

  for (let i = 0; i < products.length; i++) {
    productListHtml +=
      '<a class="text-decoration-none d-inline-block" href="productDetails.html?productId=' +
      products[i].id +
      '">' +
      '<div class="product-img">' +
      '<img src="https://img.favpng.com/8/17/0/product-design-clip-art-logo-food-png-favpng-TsCQEsJH2LUYN3d5Q6RzrTsqL.jpg">' +
      "</div>" +
      '<div class="product-name text-center">₹' +
      products[i].cost +
      "</div>" +
      "</a>";
  }

  productList.innerHTML = productListHtml;
}

loadCategories();
loadProducts();
