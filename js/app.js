// // alert("hi");
// // console.log(5454545454);

// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting")

// const HIDDEN_CLASSNAME = "hidden";
// const USERNAME_KEY = "username";
// // const link = document.querySelector("a");

// function onLoginSubmit(event) {
//     event.preventDefault();
//     const username = loginInput.value;
//     loginForm.classList.add(HIDDEN_CLASSNAME);
//     localStorage.setItem("username", username);
//     paintGreetings(username);
// }

// // function handleLinkClick(event){
// //     event.preventDefault();
// // }
// // link.addEventListener("click", handleLinkClick);

// function paintGreetings(username) {
//     greeting.innerText = `Hello ${username}`;
//     greeting.classList.remove(HIDDEN_CLASSNAME);
// }

// const savdUsername = localStorage.getItem("USERNAME_KEY");

// if(savdUsername === null) {
//     loginForm.classList.remove(HIDDEN_CLASSNAME);
//     loginForm.addEventListener("submit", onLoginSubmit);
// } else {
//     paintGreetings(savdUsername);
// }

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem("username", username);
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
