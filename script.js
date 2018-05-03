// Changes which link is highlighted as active when clicked
var navLinks = document.getElementsByClassName("nav-link");

function changeActive() {
  for (var i = 0; i < navLinks.length; i++) {
    if (!navLinks[i].classList.contains("active")) {
      navLinks[i].classList.add("active");
    } else if (navLinks[i].classList.contains("active")) {
        navLinks[i].classList.remove("active");
    }
  }
}

for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", changeActive);
}
