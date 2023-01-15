console.log("this is login page js");

const loginForm = document.querySelector("#loginForm");
const loginUsername = document.querySelector("#loginUsername");
const loginPassword = document.querySelector("#loginPassword");
const loginBtn = document.querySelector("#loginBtn");
const showSignupBtn = document.querySelector("#showSignupBtn");
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
