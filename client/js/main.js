const openNavBtn = document.querySelector("#openNavBtn");
const closeNavBtn = document.querySelector("#closeNavBtn");
const navList = document.querySelector("#navList");

openNavBtn.addEventListener("click", () => {
  navList.classList.add("nav__list--active");
});

closeNavBtn.addEventListener("click", () => {
  navList.classList.remove("nav__list--active");
});
