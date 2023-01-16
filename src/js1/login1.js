console.log("this is login page js");

const loginForm = document.querySelector("#loginForm");
const loginUsername = document.querySelector("#loginUsername");
const loginPassword = document.querySelector("#loginPassword");
const loginBtn = document.querySelector("#loginBtn");
const showSignupBtn = document.querySelector("#showSignupBtn");
const showLoginBtn = document.querySelector("#showLoginBtn");
const signupForm = document.querySelector("#signupForm");
const signupUsername = document.querySelector("#signupUsername");
const signupEmail = document.querySelector("#signupEmail");
const signupPassword = document.querySelector("#signupPassword");
const signupBtn = document.querySelector("#signupBtn");
const authErrMsg = document.querySelector("#authErrMsg");
const succErrMsg = document.querySelector("#succErrMsg");

showSignupBtn.addEventListener("click", () => {
  signupForm.classList.remove("d-none");
  loginForm.classList.add("d-none");
});

showLoginBtn.addEventListener("click", () => {
  loginForm.classList.remove("d-none");

  signupForm.classList.add("d-none");
});

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
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        updateSuccessMsg(data.message);
      })
      .catch((error) => {
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
      username: signupUsername.value,
      password: signupPassword.value,
      email: signupEmail.value,
    };

    fetch(BASE_URL + "/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        // if (data.message.match("invalid")) {
        //   updateAuthErrMsg(data.message);
        // }

        console.log(data);

        if (data.accessToken) {
          localStorage.setItem("username", data.username);
          localStorage.setItem("userId", data.id);
          localStorage.setItem("token", data.accessToken);
          localStorage.setItem("email", data.email);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
});

function updateAuthErrMsg(msg) {
  authErrMsg.innerText = msg;
}

function updateSuccessMsg(msg) {
  succErrMsg.innerText = msg;
}

if (localStorage.getItem("username")) {
  window.location.href = "index.html";
}
