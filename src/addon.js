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

  // computer
  function setupQuestionDialog(dialogElement) {
    const yesButton = dialogElement.querySelector("#yes-button");
    const noButton = dialogElement.querySelector("#no-button");
    const yesPopup = document.getElementById("yes-popup");
    const closeYesPopupButton = document.getElementById("closeYesPopup");

    if (yesButton) {
      yesButton.addEventListener("click", () => {
        if (yesPopup) {
          yesPopup.classList.remove("hidden");
          yesPopup.style.display = "flex";
        }
      });
    }

    if (noButton) {
      noButton.addEventListener("click", () => {
        dialogElement.style.display = "none";
      });
    }

    if (closeYesPopupButton && yesPopup) {
      closeYesPopupButton.addEventListener("click", () => {
        yesPopup.classList.add("hidden");
        yesPopup.style.display = "none";
      });

      yesPopup.addEventListener("click", (event) => {
        if (event.target === yesPopup) {
          yesPopup.classList.add("hidden");
          yesPopup.style.display = "none";
        }
      });
    }
  }

  // Menggunakan MutationObserver untuk mendeteksi perubahan DOM
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "childList") {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            if (node.id === "question-dialog") {
              setupQuestionDialog(node);
            }
          }
        });
      }
    });
  });

  // Konfigurasi observer
  const config = { childList: true, subtree: true };

  // Mulai observing the document dengan konfigurasi yang ditentukan
  observer.observe(document.body, config);
});

// Computer
