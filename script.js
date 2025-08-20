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

// Closet Organiser uppladdning
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
  // T-shirt färgval + uppladdning
  // --------------------
  const tshirtImage = document.getElementById("tshirtImage");
  const tshirtColor = document.getElementById("tshirtColor");
  const tshirtUpload = document.getElementById("tshirtUpload");

  // Objekt för att spara uppladdade bilder
  const tshirtImages = {
    white: "images/tshirt.jpg",
    black: "images/tshirt.jpg",
    beige: "images/tshirt.jpg"
  };

  // Byt bild när färg ändras
  if (tshirtColor) {
    tshirtColor.addEventListener("change", () => {
      const color = tshirtColor.value;
      tshirtImage.src = tshirtImages[color];
    });
  }

  // Ladda upp ny bild för vald färg
  if (tshirtUpload) {
    tshirtUpload.addEventListener("change", (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
          const color = tshirtColor.value; // vilken färg är vald
          tshirtImages[color] = e.target.result; // spara bild
          tshirtImage.src = e.target.result; // byt direkt
        };
        reader.readAsDataURL(file);
      }
    });
  }
});


