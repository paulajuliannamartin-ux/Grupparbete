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

// Closet Organiser uppladdning (max 3 bilder)
document.addEventListener("DOMContentLoaded", () => {
  const fileInput = document.getElementById("fileInput");
  const closetProducts = document.getElementById("closetProducts");

  if (fileInput) {
    fileInput.addEventListener("change", (event) => {
      closetProducts.innerHTML = "";
      const files = Array.from(event.target.files).slice(0, 3);

      files.forEach(file => {
        const reader = new FileReader();
        reader.onload = function(e) {
          const div = document.createElement("div");
          div.classList.add("product");
          div.innerHTML = `
            <img src="${e.target.result}" alt="${file.name}">
            <h3>${file.name}</h3>
          `;
          closetProducts.appendChild(div);
        };
        reader.readAsDataURL(file);
      });
    });
  }

  // --------------------
  // T-shirt färgval (fasta bilder)
  // --------------------
  const tshirtImage = document.getElementById("tshirtImage");
  const tshirtColor = document.getElementById("tshirtColor");

  // Lägg in 3 färgvarianter i images-mappen
  const tshirtImages = {
    white: "images/tshirt_white.jpg",
    black: "images/tshirt_black.jpg",
    beige: "images/tshirt_beige.jpg"
  };

  if (tshirtColor) {
    tshirtColor.addEventListener("change", () => {
      const color = tshirtColor.value;
      tshirtImage.src = tshirtImages[color];
    });
  }
});




