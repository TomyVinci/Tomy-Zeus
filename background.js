// On garde en mémoire l'état par onglet
const etatsModo = {};

chrome.action.onClicked.addListener(async (tab) => {
  if (!tab.url || !tab.url.includes("tiktok.com")) return;

  const ongletId = tab.id;
  etatsModo[ongletId] = !etatsModo[ongletId];

  mettreAJourEtat(ongletId, etatsModo[ongletId]);
});

function mettreAJourEtat(ongletId, isRunning) {
  const iconPath = isRunning ? "icon_on.png" : "icon_off.png";
  chrome.action.setIcon({ path: iconPath, tabId: ongletId });
  chrome.tabs.sendMessage(ongletId, { action: "toggle", status: isRunning }).catch(() => {});
}

// Écoute si le content.js demande un rechargement anti-freeze
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "preparerReload") {
    if (sender.tab) {
      etatsModo[sender.tab.id] = true; // On mémorise qu'il doit repartir en ON
    }
  }
  
  // Si le script s'injecte sur une nouvelle page, il demande s'il doit s'allumer
  if (request.action === "verifierEtat") {
    const isRunning = etatsModo[sender.tab.id] || false;
    sendResponse({ status: isRunning });
    if (isRunning) {
      mettreAJourEtat(sender.tab.id, true);
    }
  }

  // Si le content.js demande l'extinction automatique (Live terminé)
  if (request.action === "eteindreAutomatiquement") {
    if (sender.tab) {
      etatsModo[sender.tab.id] = false;
      mettreAJourEtat(sender.tab.id, false);
      console.log("🛑 [Tomy] Extension éteinte automatiquement car le live est terminé.");
    }
  }
});