document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.getElementById('navbar');
  navbar.classList.remove('navbarGo');
});


function toggleNavbar() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('navbarGo');
  }