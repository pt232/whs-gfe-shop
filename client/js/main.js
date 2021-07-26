const signLink = document.querySelector("#signLink");
const openNavBtn = document.querySelector("#openNavBtn");
const closeNavBtn = document.querySelector("#closeNavBtn");
const navList = document.querySelector("#navList");

signLink.addEventListener("click", signLinkClick);

openNavBtn.addEventListener("click", () => {
  navList.classList.add("nav__list--active");
});

closeNavBtn.addEventListener("click", () => {
  navList.classList.remove("nav__list--active");
});

changeSignLink();

function changeSignLink() {
  if (localStorage.getItem("token")) {
    signLink.innerText = "Sign out";
  } else {
    signLink.innerText = "Sign in";
  }
}

function signLinkClick(e) {
  if (signLink.innerText === "Sign in") return;

  e.preventDefault();

  localStorage.removeItem("token");
  window.location.href = "index.html";
}
