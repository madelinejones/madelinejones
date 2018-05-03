var navLink = document.querySelectorAll('.nav-link');

function toggleItem() {
  for (var i = 0; i < navLink.length; i++) {
    if (this != navLink[i]) {
      navLink[i].classList.remove('active');
    } else {
      this.classList.add('active')
    }
  }
}

// toggleItem(document.querySelectorAll('.nav-link'));

for (var i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", toggleItem);
}
