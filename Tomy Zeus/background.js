function cleEtat(tabId) {
    return `modo_${tabId}`;
}

async function lireEtat(tabId) {
    const key = cleEtat(tabId);
    const data = await chrome.storage.session.get(key);
    return data[key] === true;
}

async function enregistrerEtat(tabId, actif) {
    await chrome.storage.session.set({
        [cleEtat(tabId)]: actif
    });
}

async function mettreAJourEtat(tabId, actif, envoyerMessage = true) {
    const iconPath = actif ? "icon_on.png" : "icon_off.png";

    try {
        await chrome.action.setIcon({
            path: iconPath,
            tabId
        });
    } catch (error) {
        console.error("[Tomy] Erreur changement icône :", error);
    }

    if (envoyerMessage) {
        try {
            await chrome.tabs.sendMessage(tabId, {
                action: "toggle",
                status: actif
            });
        } catch (error) {
            // Aucun content script dans cet onglet
        }
    }
}

chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        const actionsConnues = [
            "toggleFromPopup",
            "verifierEtatPopup",
            "preparerReload",
            "verifierEtat",
            "eteindreAutomatiquement"
        ];

        if (!actionsConnues.includes(request.action)) {
            return;
        }

        (async () => {
            if (request.action === "toggleFromPopup") {
                const tabs = await chrome.tabs.query({
                    active: true,
                    currentWindow: true
                });

                if (!tabs[0]?.id) {
                    sendResponse({ status: false });
                    return;
                }

                const tabId = tabs[0].id;
                const nouvelEtat = !(await lireEtat(tabId));

                await enregistrerEtat(tabId, nouvelEtat);
                await mettreAJourEtat(tabId, nouvelEtat, true);

                sendResponse({ status: nouvelEtat });
                return;
            }

            if (request.action === "verifierEtatPopup") {
                const tabs = await chrome.tabs.query({
                    active: true,
                    currentWindow: true
                });

                if (!tabs[0]?.id) {
                    sendResponse({ status: false });
                    return;
                }

                sendResponse({
                    status: await lireEtat(tabs[0].id)
                });
                return;
            }

            if (request.action === "preparerReload") {
                if (sender.tab?.id) {
                    await enregistrerEtat(sender.tab.id, true);
                }

                sendResponse({ status: true });
                return;
            }

            if (request.action === "verifierEtat") {
                if (!sender.tab?.id) {
                    sendResponse({ status: false });
                    return;
                }

                const actif = await lireEtat(sender.tab.id);

                // Seulement remettre l’icône, sans envoyer toggle
                await mettreAJourEtat(sender.tab.id, actif, false);

                sendResponse({ status: actif });
                return;
            }

            if (request.action === "eteindreAutomatiquement") {
                if (sender.tab?.id) {
                    await enregistrerEtat(sender.tab.id, false);
                    await mettreAJourEtat(sender.tab.id, false, true);
                }

                sendResponse({ status: false });
            }
        })().catch(error => {
            console.error("[Tomy] Erreur background :", error);
            sendResponse({
                status: false,
                error: error.message
            });
        });

        return true;
    }
);

chrome.tabs.onRemoved.addListener(tabId => {
    chrome.storage.session.remove(cleEtat(tabId));
});