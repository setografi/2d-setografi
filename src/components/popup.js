// popup.js
export function createPopup(id, content) {
  return `
      <div
        id="${id}"
        class="absolute inset-0 bg-black bg-opacity-50 w-full h-full hidden items-center justify-center"
      >
        <div class="relative bg-white w-full h-full p-6 rounded shadow-md">
          ${content}
          <button
            id="close${id.charAt(0).toUpperCase() + id.slice(1)}"
            class="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          >
            Close
          </button>
        </div>
      </div>
    `;
}

// Fungsi untuk menambahkan popup ke DOM
export function addPopupToDOM(popupHTML) {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = popupHTML;
  document.body.appendChild(tempDiv.firstElementChild);
}

// Fungsi untuk mengatur event listener pada popup
export function setupPopup(popupId) {
  const popup = document.getElementById(popupId);
  const closeButton = document.getElementById(
    `close${popupId.charAt(0).toUpperCase() + popupId.slice(1)}`
  );

  if (closeButton && popup) {
    closeButton.addEventListener("click", () => {
      popup.classList.add("hidden");
      popup.style.display = "none";
    });

    popup.addEventListener("click", (event) => {
      if (event.target === popup) {
        popup.classList.add("hidden");
        popup.style.display = "none";
      }
    });
  }
}
