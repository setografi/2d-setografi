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

// Computer
import { createPopup, addPopupToDOM, setupPopup } from "./components/popup.js";
import { computerSection } from "./components/computerSection.js";

export function setupQuestionDialog(dialogElement) {
  const yesButton = dialogElement.querySelector("#yes-button");
  const noButton = dialogElement.querySelector("#no-button");
  const yesPopup = document.getElementById("yes-popup");

  if (yesButton && yesPopup) {
    yesButton.addEventListener("click", () => {
      yesPopup.classList.remove("hidden");
      yesPopup.style.display = "flex";
    });
  }

  if (noButton) {
    noButton.addEventListener("click", () => {
      dialogElement.style.display = "none";
    });
  }
}

export function createAndSetupPopup() {
  const popupContent = `

    <div>${computerSection}</div>
  `;
  const popupHTML = createPopup("yes-popup", popupContent);
  addPopupToDOM(popupHTML);
  setupPopup("yes-popup");
}

export function initializePage() {
  createAndSetupPopup();

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "childList") {
        mutation.addedNodes.forEach((node) => {
          if (
            node.nodeType === Node.ELEMENT_NODE &&
            node.id === "question-dialog"
          ) {
            setupQuestionDialog(node);
          }
        });
      }
    });
  });

  const config = { childList: true, subtree: true };
  observer.observe(document.body, config);
}

//Computer View
document.addEventListener("DOMContentLoaded", function () {
  const win98Clock = document.getElementById("win98-clock");
  const win98Popup = document.getElementById("win98-popup");
  const win98CloseBtn = document.getElementById("win98-close-btn");

  // Update clock
  function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    if (win98Clock) {
      win98Clock.textContent = time;
    }
  }
  setInterval(updateClock, 1000);
  updateClock();

  // Toggle popup
  window.toggleWin98Popup = function () {
    if (win98Popup) {
      win98Popup.classList.remove("hidden");
    }
  };

  // Close popup
  if (win98CloseBtn) {
    win98CloseBtn.addEventListener("click", function () {
      if (win98Popup) {
        win98Popup.classList.add("hidden");
      }
    });
  }
});
