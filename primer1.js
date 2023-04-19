
const navMenu = document.querySelector("nav");
const openBtn = document.querySelector(".open-menu");
const closeBtn = document.querySelector(".close-menu");

openBtn.addEventListener("click", function() {
   navMenu.classList.add("open");
});

closeBtn.addEventListener("click", function() {
   navMenu.classList.remove("open");
} );

var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800 // Brzina animacije
  });
  