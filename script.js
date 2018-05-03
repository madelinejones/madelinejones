// Changes which link is highlighted as active when clicked
var navLinks = document.getElementsByClassName("nav-link");

function changeActive() {
  if (this.classList.contains("active")) {
    this.classList.remove("active");
  } else {
    this.classList.add("active");
}

for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", changeActive);
}
