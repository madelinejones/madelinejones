// Changes which link is highlighted as active when clicked
var navLinks = document.getElementsByClassName("nav-link");

function changeActive() {
  for (var i = 0; i < navLinks.length; i++) {
    this.classList.toggle("active");
  }
}

for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", changeActive);
}
