document.addEventListener("DOMContentLoaded", function () {
  const galleryItems = document.querySelectorAll(".gallery-items a"); // Assurez-vous que cette sélection correspond à votre HTML
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-image");
  const captionText = document.getElementById("caption");
  const closeButton = document.querySelector(".close");

  galleryItems.forEach((item) => {
    const img = item.querySelector("img");
    item.addEventListener("click", function (e) {
      e.preventDefault(); // Prévenir le comportement par défaut si l'élément est un lien
      modal.style.display = "block";
      modalImg.src = img.src; // Ou img.getAttribute('data-image') si vous utilisez un attribut data-image
      captionText.textContent = img.alt;
    });
  });

  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Optionnel: Fermer la modale en cliquant en dehors de l'image
  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
