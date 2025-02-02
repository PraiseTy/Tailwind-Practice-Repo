document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menuButton");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMenu = document.getElementById("closeMenu");

  menuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });

  closeMenu.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });
});
