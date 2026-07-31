document.addEventListener('DOMContentLoaded', () => {
    const btnToggle = document.getElementById('btnToggle');
    const btnEdit = document.getElementById('btnEdit');

    const nbrRepeat = document.getElementById('nbrRepeat');
    const timeReapeat = document.getElementById('timeReapeat');
    const messageAutoChaque = document.getElementById('messageAutoChaque');
    const seuilSpamDangereux = document.getElementById('seuilSpamDangereux');
    const messageAuto = document.getElementById('messageAuto');
    const motsNiveau1 = document.getElementById('motsNiveau1');
    const acceptInsult = document.getElementById('acceptInsult');
    const motsNiveau3 = document.getElementById('motsNiveau3');

    // 1. Charger les valeurs
    var localostomios = [
        'nbrRepeat', 'timeReapeat', 'messageAutoChaque', 'seuilSpamDangereux', 
        'messageAuto', 'motsNiveau1', 'acceptInsult', 'motsNiveau3'
    ];
    
    chrome.storage.local.get(localostomios, (data) => {
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError);
            return;
        }
        if (data.nbrRepeat !== undefined) nbrRepeat.value = data.nbrRepeat;
        if (data.timeReapeat !== undefined) timeReapeat.value = data.timeReapeat;
        if (data.messageAutoChaque !== undefined) messageAutoChaque.value = data.messageAutoChaque;
        if (data.seuilSpamDangereux !== undefined) seuilSpamDangereux.value = data.seuilSpamDangereux;
        if (data.messageAuto !== undefined) messageAuto.value = data.messageAuto;
        if (data.motsNiveau1 !== undefined) motsNiveau1.value = data.motsNiveau1;
        if (data.acceptInsult !== undefined) acceptInsult.value = data.acceptInsult;
        if (data.motsNiveau3 !== undefined) motsNiveau3.value = data.motsNiveau3;

        if (btnEdit) btnEdit.style.background = "#ff3b5c";
    });

    // Vérifier l'état actuel pour afficher le bon texte sur le bouton
    chrome.runtime.sendMessage({ action: "verifierEtatPopup" }, (response) => {
        if (response && response.status) {
            updateButtonState(true);
        } else {
            updateButtonState(false);
        }
    });

    // 2. Clic sur le bouton Activer / Désactiver (Lance/Arrête le modo sans toucher au formulaire ni fermer le popup)
    if (btnToggle) {
        btnToggle.addEventListener('click', () => {
            chrome.runtime.sendMessage({ action: "toggleFromPopup" }, (response) => {
                if (response) {
                    updateButtonState(response.status);
                }
            });
        });
    }

    // 3. Clic sur le bouton Modifier (Sauvegarde uniquement le formulaire sans toucher au modo ni fermer le popup)
    if (btnEdit) {
        btnEdit.addEventListener('click', () => {
            const configData = {

                nbrRepeat: nombreValide(nbrRepeat, 200, 1, 10000),
                timeReapeat: nombreValide(timeReapeat, 10, 1, 3600),
                messageAutoChaque: nombreValide(messageAutoChaque, 30, 5, 86400),
                seuilSpamDangereux: nombreValide(seuilSpamDangereux,10,1,10000),

                messageAuto: messageAuto.value || "",
                motsNiveau1: motsNiveau1.value || "",
                acceptInsult: Number(acceptInsult.value) || 0,
                motsNiveau3: motsNiveau3.value || ""
            };

            chrome.storage.local.set(configData, () => {
                const oldText = btnEdit.textContent;
                btnEdit.textContent = "✅ Modifié avec succès !";
                btnEdit.style.background = "#28a745";
                setTimeout(() => {
                    btnEdit.textContent = oldText;
                    btnEdit.style.background = "#ff3b5c";
                }, 1500);
            });
        });
    }

    function nombreValide(element, valeurDefaut, minimum, maximum) {
        const valeur = Number(element.value);

        if (!Number.isFinite(valeur)) {
            return valeurDefaut;
        }

        return Math.min(maximum, Math.max(minimum, valeur));
    }

    function updateButtonState(isActive) {
        if (!btnToggle) return;
        if (isActive) {
            btnToggle.textContent = "🛑 Désactiver le Modérateur";
            btnToggle.style.background = "#333";
        } else {
            btnToggle.textContent = "🛡️ Activer le Modérateur";
            btnToggle.style.background = "#ff3b5c";
        }
    }
});