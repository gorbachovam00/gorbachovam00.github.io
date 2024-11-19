const burgerMenu = document.getElementById("burger-menu");
const burgerIcon = document.getElementById("burger-toggle");

burgerIcon.addEventListener("click", function () {
  burgerMenu.classList.toggle("open");
});

const burgerClose = document.getElementById("burger-menu");
const closeButton = document.getElementById("icon-close");

closeButton.addEventListener("click", () => {
  burgerClose.classList.remove("open");
});
