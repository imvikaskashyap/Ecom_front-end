const categoryList = document.querySelector("#categoryList");

// const BASE_URL = "https://relevel-ecomm-be.herokuapp.com/ecomm/api/v1";

function loadCategories() {
  fetch(`${BASE_URL}/categories`)
    .then((res) => res.json())
    .then((data) => renderCategories(data))
    .catch((error) => {
      console.log(error);
    });
}

function renderCategories(categories) {
  let categoryListHtml =
    '<div class="category-item rounded-3 d-flex justify-content-center align-item-center"> ' +
    '<a class="text-decoration-none text-white" href="productList.html"> All Products</a>' +
    "</div>";

  for (let i = 0; i < categories.length; i++) {
    categoryListHtml +=
      '<div class="category-item rounded-3 d-flex justify-content-center align-item-center"> ' +
      '<a class="text-decoration-none text-white" href="productList.html?categoryId=' +
      categories[i].id +
      '">' +
      categories[i].name +
      "</a>" +
      "</div>";
  }

  categoryList.innerHTML = categoryListHtml;
}

loadCategories();
