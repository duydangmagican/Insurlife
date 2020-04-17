const bugger = document.querySelector(".header__toggle");
const navSub = document.querySelector(".nav-sub");

bugger.addEventListener("click", function (e) {
  console.log(this);
  navSub.classList.toggle("active");
});
