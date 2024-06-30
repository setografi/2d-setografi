// popup.js
export function createPopup(id, content) {
  return `
      <div
        id="${id}"
        class="absolute inset-0 bg-deepAubergine bg-opacity-80 w-full h-full hidden flex-col items-center justify-center"
      >
        <div class="relative w-full h-full bg-white p-8 border-2 border-black rounded-t-md">
          ${content}

          <div class="bg-gray-300 w-full h-12 flex items-center justify-between px-2 border-b-2 border-x-2 border-black rounded-b-md">
              <button
                id="close${id.charAt(0).toUpperCase() + id.slice(1)}"
                class="bg-white px-2 md:px-4 text-base md:text-xl border-2 border-black transition duration-300 cursor-pointer hover:bg-paleGoldenrod rounded-sm"
              >
                Close
              </button>
              <div id="win98-clock" class="bg-white px-2 text-base md:text-xl border-2 border-black rounded-sm"></div>
          </div>
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
