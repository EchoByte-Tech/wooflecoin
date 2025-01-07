document.getElementById('dark-mode-toggler').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const icon = document.getElementById('dark-mode-icon');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('nav');
    if (window.scrollY > 10) {
      navbar.classList.add('fixed-top');
    } else {
      navbar.classList.remove('fixed-top');
    }
  });