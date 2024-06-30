export const computerSection = `
    <div class="h-full bg-pink-100 flex flex-col border-t-2 border-x-2 border-black rounded-t-md">
        <div class="h-full flex-grow p-4">
            <div class="w-16 h-16 hover:bg-gray-300 hover:opacity-80 mb-4 flex flex-col items-center justify-center rounded-sm cursor-pointer" onclick="toggleWin98Popup()">
                <img class="w-8 h-8" src="/folder.png" alt="My Folder"><p class="text-xs">My Documents</p>
            </div>
            <div class="w-16 h-16 hover:bg-gray-300 hover:opacity-80 mb-4 flex flex-col items-center justify-center rounded-sm cursor-pointer">
                <img class="w-8 h-8" src="/mail.png" alt="Email"><p class="text-xs">Email</p>
            </div>
            <div class="w-16 h-16 hover:bg-gray-300 hover:opacity-80 mb-4 flex flex-col items-center justify-center rounded-sm cursor-pointer">
                <img class="w-8 h-8" src="/document.png" alt="My CV"><p class="text-xs">read.cs</p></div>
            </div>
            
            <div id="win98-popup" class="hidden absolute bg-white w-64 border-2 border-black rounded-sm" style="top: 50px; left: 50px;">
                <div id="win98-popup-header" class="bg-cornflowerBlue text-white p-1 flex justify-between items-center border-b-2 border-black">
                    <span class="px-3 text-base">My Documents</span>
                    <span id="win98-close-btn" class="px-3 text-base cursor-pointer">✕</span>
                </div>
                
                <div class="p-4">
                    <h3 class="text-base">Hello World!</h3>
                    <p class="text-sm">
                        Hi, I'm Wahyu Seto Pranata or usually called Seto, 
                        a unique creative designer and developer who spends much of his free time drinking coffee and traveling. 
                        I like learning new things and trying to apply them.
                    </p>
                </div>
            </div>
        </div>
    </div>
`;
