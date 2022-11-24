const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const windowposition = window.scrollY > 0;
  navBar.classList.toggle
  ("scrolling-active", windowposition);


});