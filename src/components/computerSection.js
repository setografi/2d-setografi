export const computerSection = `
    <div class=" bg-pink-100 flex flex-col">
        <div class="flex-grow p-4">
            <div class="w-16 h-16 bg-gray-300 mb-4 flex items-center justify-center cursor-pointer" onclick="togglePopup()">Icon 1</div>
            <div class="w-16 h-16 bg-gray-300 mb-4 flex items-center justify-center cursor-pointer" onclick="togglePopup()">Icon 2</div>
            <div class="w-16 h-16 bg-gray-300 mb-4 flex items-center justify-center cursor-pointer" onclick="togglePopup()">Icon 3</div>
        </div>
        <div class="bg-gray-300 h-8 flex items-center justify-between px-2">
            <button class="bg-gray-400 px-2 py-1">Start</button>
            <div id="clock" class="bg-white px-2"></div>
        </div>
        <div id="popcomputer" class="hidden absolute bg-white border-2 border-gray-400 w-64 shadow-lg" style="top: 50px; left: 50px;">
            <div id="popup-header" class="bg-blue-600 text-white p-1 flex justify-between items-center cursor-move">
                <span>Shortcut</span>
                <span class="cursor-pointer">✕</span>
            </div>
            <div class="p-4">Hello World</div>
        </div>
    </div>

`;
