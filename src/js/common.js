const userIntro = document.querySelector("#userIntro");
const logoutBtn = document.querySelector("#logoutBtn");

const BASE_URL = "https://relevel-ecomm-be.herokuapp.com/ecomm/api/v1";

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("username");
  window.location.href = "login.html";
});

if (!localStorage.getItem("username")) {
  window.location.href = "login.html";
} else {
  userIntro.innerText = `Hi ${localStorage.getItem("username")}`;
}
