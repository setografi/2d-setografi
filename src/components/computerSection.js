export const computerSection = `
    <div class="h-full bg-pink-100 flex flex-col border-t-2 border-x-2 border-black rounded-t-md">
        <div class="flex-grow p-4">
            <div class="w-16 h-16 hover:bg-gray-300 hover:opacity-80 mb-4 flex flex-col items-center justify-center rounded-sm cursor-pointer" onclick="toggleWin98Popup()">
                <img class="w-8 h-8" src="/folder.png" alt="My Folder"><p class="text-xs">My Documents</p>
            </div>
            <div class="w-16 h-16 hover:bg-gray-300 hover:opacity-80 mb-4 flex flex-col items-center justify-center rounded-sm cursor-pointer">
                <img class="w-8 h-8" src="/mail.png" alt="Email"><p class="text-xs">Email</p></div>
            <div class="w-16 h-16 hover:bg-gray-300 hover:opacity-80 mb-4 flex flex-col items-center justify-center rounded-sm cursor-pointer">
                <img class="w-8 h-8" src="/document.png" alt="My CV"><p class="text-xs">read.cs</p></div>
            </div>
            
            <div id="win98-popup" class="hidden absolute bg-white border-2 border-gray-400 w-64 shadow-lg" style="top: 50px; left: 50px;">
            <div id="win98-popup-header" class="bg-blue-600 text-white p-1 flex justify-between items-center">
                <span>Shortcut</span>
                <span id="win98-close-btn" class="cursor-pointer">✕</span>
            </div>
            <div class="p-4">Hello World 1</div>
        </div>
    </div>

`;
