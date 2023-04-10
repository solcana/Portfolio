// Get the scroll-up button element
var scrollUpBtn = document.getElementById("scrollUpBtn");

// Show the scroll-up button when user scrolls down
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
});

// Scroll to top when the button is clicked
scrollUpBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
