function showPage(pageId) {
  const pages = document.querySelectorAll('.content');
  pages.forEach(page => page.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');

  // stäng menyn på mobil
  document.querySelector("nav ul").classList.remove("show");
}

function toggleMenu() {
  document.querySelector("nav ul").classList.toggle("show");
}
