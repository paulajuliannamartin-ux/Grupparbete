function showPage(pageId) {
  const pages = document.querySelectorAll('.content');
  pages.forEach(page => page.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');

  // Stänger menyn på mobil efter klick
  document.querySelector("nav ul").classList.remove("show");
}

function toggleMenu() {
  document.querySelector("nav ul").classList.toggle("show");
}


