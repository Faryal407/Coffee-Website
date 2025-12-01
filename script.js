//mobilebutton
const menuBtn = document.getElementById("menuBtn"); 
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Add to Cart Functions

let orderBtns = document.querySelectorAll("#orderBtn");

orderBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Your order has been added! ☕");
  });
});

// Navbar Shadow on Scroll
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("shadow-lg", "bg-brown/80", "backdrop-blur-md");
  } else {
    navbar.classList.remove("shadow-lg", "bg-brown/80", "backdrop-blur-md");
  }
});




// Dark / Light Mode Toggle (Optional)

let modeBtn = document.querySelector("#modeBtn");
        modeBtn.addEventListener("click", () => {
            document.body.style.backgroundColor = "lightpink"; // Dark background
        });