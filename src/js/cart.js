const orderDetails = document.querySelector("#orderDetails");
const priceDetails = document.querySelector("#priceDetails");

function loadOrederDetails() {
  const cartId = localStorage.getItem("cartId");
  const URI = `/carts/${cartId}`;
  const token = localStorage.getItem("token");

  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
  };

  fetch(`${BASE_URL}${URI}`, {
    method: "GET",
    headers: headers,
  })
    .then(res => res.json())
    .then(data => renderOrderDetails(data))
    .catch(err => console.log(err));
}

function renderOrderDetails(data) {
  let orderDetailsHtml = '<div class="order_details';
}

loadOrederDetails();
