document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".menu-icon");
    const mobileNavlist = document.querySelector(".mobile-navlist");
    const navLinks = document.querySelectorAll(".navlist a");
  
    menuIcon.addEventListener("click", () => {
      mobileNavlist.classList.toggle("open");
      menuIcon.classList.toggle("open");
    });
  
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileNavlist.classList.remove("open");
        menuIcon.classList.remove("open");
      });
    });
  });