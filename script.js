function toggleItem(navLink) {
  for (var i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener("click", function() {
      var current = this;
      for (var i = 0; i < navLink.length; i++) {
        if (current != navLink[i]) {
          navLink[i].classList.remove('active');
        } else if (current.classList.contains('active') === true) {
          current.classList.remove('active');
        } else {
          current.classList.add('active')
        }
      }
    });
  };
}
toggleItem(document.querySelectorAll('.nav-link'));
