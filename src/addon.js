document.addEventListener("DOMContentLoaded", function () {
  const infoButton = document.getElementById("infoButton");
  const popup = document.getElementById("popup");
  const closePopup = document.getElementById("closePopup");

  infoButton.addEventListener("click", function () {
    popup.classList.remove("hidden");
  });

  closePopup.addEventListener("click", function () {
    popup.classList.add("hidden");
  });

  // Menutup popup jika mengklik di luar area popup
  popup.addEventListener("click", function (event) {
    if (event.target === popup) {
      popup.classList.add("hidden");
    }
  });
});
