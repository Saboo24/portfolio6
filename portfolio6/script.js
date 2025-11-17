// Elements
const menu = document.getElementById("menu");
const closeButton = document.getElementById("close-mobile");
const nav = document.getElementById("nav-mobile");
const navLinks = document.querySelectorAll(".nav-link");

// Open mobile menu
menu.addEventListener("click", () => {
  nav.classList.add("show");
  document.body.style.overflow = "hidden"; // منع scroll الخلفية
});

// Close mobile menu
closeButton.addEventListener("click", () => {
  nav.classList.remove("show");
  document.body.style.overflow = "auto";
});

// Close menu on link click
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
    document.body.style.overflow = "auto";
  });
});

// Optional: close menu on click outside links
nav.addEventListener("click", (e) => {
  if (e.target === nav) {
    nav.classList.remove("show");
    document.body.style.overflow = "auto";
  }
});
