// Changes which link is highlighted as active when clicked
function changeActive() {
  let selected = this;
  let navLinks = document.getElementsByClassName("nav-link");
  for (let i = 0; i < navLinks.length; i++) {
    if (selected === navLinks[i]) {
      navLinks[i].classList.add("active");
    } else if (selected.classList.contains("active")) {
        selected.classList.remove("active");
    }
  }
}

let navLinks = document.getElementsByClassName("nav-link");
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", changeActive);
}
