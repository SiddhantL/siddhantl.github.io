window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    document.getElementById("navbar").style.background = "#fff";
  }
  
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelectorAll(".nav__link");
  
  navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
  });
  
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      document.body.classList.remove("nav-open");
    });
  });
  /*
  
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
*/
  
  