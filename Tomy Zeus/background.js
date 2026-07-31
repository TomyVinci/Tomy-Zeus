const etatsModo = {};

// Écoute les ordres venant du popup ou du content.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  
  if (request.action === "toggleFromPopup") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (!tabs[0]) return;
      const tabId = tabs[0].id;
      
      etatsModo[tabId] = !etatsModo[tabId];
      mettreAJourEtat(tabId, etatsModo[tabId]);
      sendResponse({ status: etatsModo[tabId] });
    });
    return true; 
  }

  if (request.action === "verifierEtatPopup") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (!tabs[0]) {
        sendResponse({ status: false });
        return;
      }
      const isRunning = etatsModo[tabs[0].id] || false;
      sendResponse({ status: isRunning });
    });
    return true;
  }

  if (request.action === "preparerReload") {
    if (sender.tab) etatsModo[sender.tab.id] = true;
  }
  
  if (request.action === "verifierEtat") {
    const isRunning = etatsModo[sender.tab.id] || false;
    sendResponse({ status: isRunning });
    if (isRunning) mettreAJourEtat(sender.tab.id, true);
  }

  if (request.action === "eteindreAutomatiquement") {
    if (sender.tab) {
      etatsModo[sender.tab.id] = false;
      mettreAJourEtat(sender.tab.id, false);
    }
  }
});

function mettreAJourEtat(ongletId, isRunning) {
  const iconPath = isRunning ? "icon_on.png" : "icon_off.png";
  chrome.action.setIcon({ path: iconPath, tabId: ongletId }, () => {
    chrome.tabs.sendMessage(ongletId, { action: "toggle", status: isRunning }).catch(() => {});
  });
}