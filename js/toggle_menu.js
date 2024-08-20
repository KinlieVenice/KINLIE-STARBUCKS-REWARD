const headerNav = document.querySelector(".header__nav");
const headerRight = document.querySelector(".header__right");
const toggleMenu = document.querySelector(".toggle__menu");
const backDrop = document.querySelector(".backdrop");

toggleMenu.addEventListener("click", () => {
  headerNav.classList.toggle("open");
  headerRight.classList.toggle("open");
  toggleMenu.classList.toggle("open");
  backDrop.classList.toggle("open");
});
