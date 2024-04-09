document.addEventListener("DOMContentLoaded", function () {
  const navbarToggle = document.querySelector(".ham_menu");
  var navbarLinks = document.querySelector(".navbar_links");

  navbarToggle.addEventListener("click", function () {
    navbarLinks.classList.toggle("visible");
  });
});