const menuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navLinks.classList.toggle("active");
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navLinks.classList.remove("active");
  });
});



