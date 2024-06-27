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
document.addEventListener("DOMContentLoaded", () => {
  // Update clock
  // function updateClock() {
  //   const now = new Date();
  //   const time = now.toLocaleTimeString([], {
  //     hour: "2-digit",
  //     minute: "2-digit",
  //   });
  //   const clockElement = document.getElementById("clock");
  //   if (clockElement) {
  //     clockElement.textContent = time;
  //   } else {
  //     console.error("Element with id 'clock' not found.");
  //   }
  // }

  // setInterval(updateClock, 1000);
  // updateClock();

  // Toggle popup
  window.togglePopup = function () {
    const popcomputer = document.getElementById("popcomputer");
    if (popcomputer) {
      popcomputer.classList.toggle("hidden");
    } else {
      console.error("Element with id 'popcomputer' not found.");
    }
  };

  // Drag functionality
  const popcomputer = document.getElementById("popcomputer");
  const popupHeader = document.getElementById("popup-header");

  if (popcomputer && popupHeader) {
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;

    popupHeader.addEventListener("mousedown", dragStart);
    document.addEventListener("mousemove", drag);
    document.addEventListener("mouseup", dragEnd);

    function dragStart(e) {
      initialX = e.clientX - xOffset;
      initialY = e.clientY - yOffset;
      isDragging = true;
    }

    function drag(e) {
      if (isDragging) {
        e.preventDefault();
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
        xOffset = currentX;
        yOffset = currentY;
        setTranslate(currentX, currentY, popcomputer);
      }
    }

    function dragEnd(e) {
      initialX = currentX;
      initialY = currentY;
      isDragging = false;
    }

    function setTranslate(xPos, yPos, el) {
      el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
    }

    // Always enable drag when cursor is over the "x" button
    const closeButton = popupHeader.querySelector("span:last-child");
    if (closeButton) {
      closeButton.addEventListener("mouseover", () => {
        isDragging = true;
      });
      closeButton.addEventListener("mouseout", () => {
        isDragging = false;
      });
    } else {
      console.error("Close button not found.");
    }
  } else {
    console.error(
      "Elements with id 'popcomputer' or 'popup-header' not found."
    );
  }
});
