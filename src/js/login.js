// Variable declariation

const loginForm = document.querySelector("#loginForm");
const loginUsername = document.querySelector("#loginUsername");
const loginPassword = document.querySelector("#loginPassword");
const loginBtn = document.querySelector("#loginBtn");
const showSignupBtn = document.querySelector("#showSignupBtn");
const authErrMsg = document.querySelector("#authErrMsg");
const succErrMsg = document.querySelector("#succErrMsg");
const signupForm = document.querySelector("#signupForm");
const signupUsername = document.querySelector("#signupUsername");
const signupPassword = document.querySelector("#signupPassword");
const signupEmail = document.querySelector("#signupEmail");
const signupBtn = document.querySelector("#signupBtn");
const showLoginBtn = document.querySelector("#showLoginBtn");

// const BASE_URL = "https://relevel-ecomm-be.herokuapp.com/ecomm/api/v1";

// event listeners

showSignupBtn.addEventListener("click", () => {
  signupForm.classList.remove("d-none");
  loginForm.classList.add("d-none");
});

showLoginBtn.addEventListener("click", () => {
  signupForm.classList.add("d-none");
  loginForm.classList.remove("d-none");
});

function createCart() {
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  console.log(userId, token, "33");
  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
  };
  fetch(BASE_URL + "/carts", {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ userId }),
  })
    .then(response => response.json())
    .then(data => {
      localStorage.setItem("cartId", data.id);
      window.location.href = "index.html";
    })
    .catch(error => {
      console.error("Error:", error);
    });
}

signupBtn.addEventListener("click", () => {
  if (signupUsername.value == "") {
    updateAuthErrorMsg("Username should not be empty");
  } else if (signupPassword.value == "") {
    updateAuthErrorMsg("Password should not be empty");
  } else {
    const data = {
      username: signupUsername.value,
      password: signupPassword.value,
      email: signupEmail.value,
    };

    fetch(BASE_URL + "/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        updateSuccessMsg(data.message);
      })
      .catch(error => {
        console.log(error);
      });
  }
});

loginBtn.addEventListener("click", () => {
  if (loginUsername.value == "") {
    updateAuthErrorMsg("Username should not be empty");
  } else if (loginPassword.value == "") {
    updateAuthErrorMsg("Password should not be empty");
  } else {
    const data = {
      username: loginUsername.value,
      password: loginPassword.value,
    };

    fetch(BASE_URL + "/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.accessToken) {
          localStorage.setItem("username", data.username);
          localStorage.setItem("userId", data.id);
          localStorage.setItem("token", data.accessToken);
          localStorage.setItem("email", data.email);
          createCart();
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
});

function updateAuthErrorMsg(msg) {
  authErrMsg.innerText = msg;
}

function updateSuccessMsg(msg) {
  succErrMsg.innerText = msg;
}

if (localStorage.getItem("username")) {
  window.location.href = "index.html";
}
