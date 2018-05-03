function toggleItem(navLink) {
  for (var i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener("click", function() {
      for (var i = 0; i < navLink.length; i++) {
        if (this != navLink[i]) {
          navLink[i].classList.remove('active');
        } else {
          this.classList.add('active')
        }
      }
    });
  };
}
toggleItem(document.querySelectorAll('.nav-link'));
