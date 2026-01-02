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
  swal.fire({
        icon: "success",
        title: "Order Success",
        text: "Your Order has been added! ☕",
       confirmButtonColor: '#A0583C',
        timer: 2500,
        timerProgressBar: true
  });
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

       let modeBtn = document.getElementById('modeBtn');//target html btn
       let isDarkMode = false;

       modeBtn.addEventListener("click" , () => {
        if(isDarkMode){
    // switch to light Mode
    document.body.style.backgroundColor = "white";
    document.body.style.color = "Black";
    }
    else {
    //switch to Dark Mode
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}   isDarkMode = !isDarkMode;
})

        //form fill
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent page reload
  // Show SweetAlert2 popup
  alert("Message Sent Successfully!");
  
  // Swal.fire({
  //   icon: 'success',
  //   title: 'Message Sent!',
  //   text: '✅ Your message has been sent successfully!',
  //   confirmButtonColor: '#ec4899', // pink to match your theme
  //   timer: 2500,
  //   timerProgressBar: true
  // });

  contactForm.reset(); // reset form fields
 });