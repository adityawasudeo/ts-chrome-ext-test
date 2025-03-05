import BgColor from "./bgColor";

let active = false;
let colorObject = new BgColor();

function makeOrange(color: string): void {
    document.body.style.backgroundColor = color;
}


chrome.action.onClicked.addListener(async (tab) => {
    active = !active;
    const color = colorObject.getColor(active);
    
    if (tab.id === undefined) {
        console.error("Tab ID is undefined");
        return;
    }
    
    try {
        await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: makeOrange,
            args: [color]
        });
    } catch (error) {
        console.error("Error executing script:", error);
    }
});

console.log("Background service worker initialized");
