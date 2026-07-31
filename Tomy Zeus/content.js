// ==========================================
// Developed By: @Tomy_seus
// With the help of @new_world_order_agency
// ==========================================
// ==========================================
// 1. CONFIGURATION DES MOTS DANGEREUX
// ==========================================

let messageAutoChaque = 30;
let nbrRepeat = 200;
let timeReapeat = 10;
const configor = {
    acceptInsult: 0, 
    seuilSpamDangereux: 10, 
    messageAuto: [""], 
    removeAfter: false, 
    motsNiveau2: [
        "𒌧𒈙𒈙ဪဪV𒀱𒈓𒈙꧅", "﷽𒈙ဪဪV𒀱𒈓𒈙꧅𒈙𒈙ဪzဪ𒈙𒈙𒈙﷽ဪ♗ဪ", 
        "𒈙ဪဪ", "﷽", "﷽⦿꧅꧅𒈙𒈙ဪဪ", "💣", "💊", "💥", "☣", "☢", "🗡", "⚔", "☠", 
        "pédophile", "pedophile", "pédofile", "pedofile", "pédophil", "pedophil", "pédofil", "pedofil", "مخدرات",
        "térroriste", "téroriste", "terroriste", "teroriste", "térrorist", "térorist", "terrorist", "terorist",
        "௵", "꧄", "බොහෝ අය", "viol", "viole", "إرهاب", "إغتصاب", "ارهاب", "اغتصاب", "تعذيب", "زواف", 
        'انسخ', "إنسخ", "اخرب", "خرب", "عنف", "شرطة", "bengo3ra", "ben go3ra", "بنقعرة", "بن قعرة", 
        "قنبلة", "تفجير", "ذبح", "porn", "porno", "pornographie", "pornography", "إغتصب", "اغتصب", 
        "egorger", "égorger"
    ], 
    motsNiveau3: [
        "🍓", "💀", "☠", "🐷", "👽", "🖕", "nik", "nyk", "nicm", "نيك", 
        "qhab", "qhaab", "qahab", "khab", "kahab", "k7ab", "ka7ab", "q7ab", "q7aab", "qa7ab", "qahba", "qahaba", 
        "kahaba", "qa7ba", "qa7aba", "قحاب", "قحبة", "rkhis", "rakhis", "rkhas", "rakhas", "رخيس", "رخاس", 
        "hachon", "hatchon", "7achon", "7atchon", "hachoun", "hatchoun", "7achoun", "7atchoun", "hachun", "hatchun", 
        "7achun", "7achun", "حشون", "حتشون", "طبون", "sowa", "sowwa", "سوة", "souwa", "3ahir", "عاهر", "106", 
        "tizmok", "tizmoc", "tizmek", "tizmak", "tizmmok", "tizmmoc", "tizmmek", "tizmmak", "طزمك", "طيزمك", 
        "zab", "زبي", "tramtak", "tremtak", "tremtek", "tramtek", "ترمتك", "tarma", "terma", "ترمة", "طيزامك", 
        "thakhna", "thakhena", "takhna", "takhena", "abouch", "aboch", "nbol", "nboul", "نبول", "رنديلة", "vetto", 
        "naqch", "nakch", "nkocha", "nkucha", "nqocha", "nqucha", "nqoucha", "nkoucha", "نقش", "نقوشة", "gwina", 
        "guina", "قوينة", "atay", "attay", "3atay", "3attay", "عطاي", "makkak", "makkac", "makac", "مكاك", "zeb", 
        "kalb", "klab", "kelb", "kleb", "kalba", "kaleba", "hmar", "hmara", "كلب", "كلاب", "حمار", "makak", "zbi", 
        "aqjoun", "aqjun", "a9joun", "a9jun", "akjoun", "akjun", "aghyoul", "aghyol", "na3na", "na3lat", "رونديلة", 
        "harki", "7arki", "harka", "7arka", "حركي", "حركة", "جمال بنسماعيل", "جمال بن سماعيل", "بغل", "pute", 
        "شوهاظة", "شوهاظا", "عتروس", "فراولة", "فيلاج اللفت", "بوزعيتر", "بوسبير", "bghel", "بغال", "vitto", 
        "كرغولي", "كراغلة", "سنغولي", "سناغلة", "bghal", "bighal", "beghal", "beghla", "baghla", "sewa", 
        "nadrabh", "nadrebh", "nedrabh", "nedrebh", "نضربه", "نظربه", "فراقش", "بقر", "لقيط", "لقطاء", "sewwa", 
        "nadhrabh", "nadhrebh", "nedhrabh", "nedhrebh", "rondila", "rendila", "rondela", "rendela", "khtok", "kahba", 
        "khtak", "ختك", "يماك", "باباك", "wlid", "wlad", "وليد", "ولاد", "ولاد القاف", "حرق", "نفرغه", "قود", 
        "signalez", "سينيالو", "راهو لايف", "راهي لايف", "putasse", "بيتاس", "puta", "suka", "suck", 
        "dick", "cock", "مثقوبة", "مقعورة", "ثقبة", "قعرة", "نمي", "nami", "nemi", "nammi", "nemmi", "ahtit", 
        "a7tit", "أحطيط", "احطيط", "تيكعولت", "ثيكعولت", "fuck", "bitch", "joder", "حل لايف", "حلت لايف", 
        "زايلة", "مقران", "مقحب", "صهيوني", "صهاينة", "sioniste", "zioniste", "sionniste", "zionniste", "thoqba", 
        "thouqba", "thou9ba", "شرموط", "شراميط", "marochien", "stkhnk", "زب", "سوّة", "سوتمك", "سوّتمك", 
        "9lawi", "qlawi", "qlwi", "9elwa", "qelwa", "qlwa", "termet", "termat", "trmtymk", "trmtk",
        "طرمة", "طيز", "ذبيح", "أشلاء", "اشلاء", "تعطي", "زّب", "dba7", "dbe7", "dbah", "dbeh", "dhba7", "dhbe7", 
        "dhbah", "dhbeh"
    ],
    motsNiveau1: ["فداج", "feddaj", "feddadj", "faddaj", "faddadj"]
};

// ==========================================
// 2. CHARGEMENT DES PARAMÈTRES
// ==========================================
function nettoyerListe(valeur, mettreEnMinuscules = false) {
    const liste = Array.isArray(valeur)
        ? valeur
        : String(valeur ?? "").split(",");

    return [...new Set(
        liste
            .map(element => String(element).trim())
            .filter(element => element.length > 0)
            .map(element => mettreEnMinuscules ? element.toLowerCase() : element)
    )];
}
function chargerParametres(callback) {
    var localostomios = [
        'nbrRepeat', 'timeReapeat', 'messageAutoChaque', 'seuilSpamDangereux', 'messageAuto', 'motsNiveau1', 
        'acceptInsult', 'motsNiveau3'
    ];
    chrome.storage.local.get(localostomios, (data) => {
        if (!chrome.runtime.lastError) {
            if (data.nbrRepeat !== undefined) nbrRepeat = Number(data.nbrRepeat);
            if (data.timeReapeat !== undefined) timeReapeat = Number(data.timeReapeat);
            if (data.messageAutoChaque !== undefined) messageAutoChaque = Number(data.messageAutoChaque);
            if (data.seuilSpamDangereux !== undefined) configor.seuilSpamDangereux = Number(data.seuilSpamDangereux);
            if (data.acceptInsult !== undefined) configor.acceptInsult = Number(data.acceptInsult) === 1;
            if (data.messageAuto !== undefined) {configor.messageAuto = nettoyerListe(data.messageAuto);}
            if (data.motsNiveau1 !== undefined) {configor.motsNiveau1 = nettoyerListe(data.motsNiveau1, true);}
            if (data.motsNiveau3 !== undefined) {configor.motsNiveau3 = nettoyerListe(data.motsNiveau3, true);}
        }
        configor.messageAuto = nettoyerListe(configor.messageAuto);
        configor.motsNiveau1 = nettoyerListe(configor.motsNiveau1, true);
        configor.motsNiveau2 = nettoyerListe(configor.motsNiveau2, true);
        configor.motsNiveau3 = nettoyerListe(configor.motsNiveau3, true);
        if (callback) callback();
    });
}

let interval_1 = null;
let interval_2 = null;
let interval_3 = null;
let surveillanceTimeout = null;
let isModoActive = false;
let mutednbr = 0, blockednbr = 0, livedone = false; 
let dernierCommentaireTimestamp = Date.now();
let derniereSignatureChatExterne = "";
let incidentNiveau4Actif = false;
let rechargementEnCours = false;
let nombreVerificationsChatAbsent = 0;
const CLE_REPRISE_AUTOMATIQUE = "tomyModoRepriseApresReload";
const trackerCompteurSpam = new Map();

// File d'attente asynchrone pour encaisser les pics de 100 msg/sec sans rater ni bloquer le DOM
let moderationQueue = [];
let isProcessingQueue = false;
const MAX_QUEUE_SIZE = 40;

let repriseAutomatiqueDemandee = false;

try {
    repriseAutomatiqueDemandee =
        localStorage.getItem(CLE_REPRISE_AUTOMATIQUE) === "1";

    if (repriseAutomatiqueDemandee) {
        localStorage.removeItem(CLE_REPRISE_AUTOMATIQUE);
    }
} catch (error) {
    console.warn(
        "[Tomy] Impossible de lire le drapeau local de reprise :",
        error.message
    );
}

chrome.runtime.sendMessage(
    { action: "verifierEtat" },
    (response) => {
        if (
            repriseAutomatiqueDemandee ||
            (response && response.status)
        ) {
            if (repriseAutomatiqueDemandee) {
                console.warn(
                    "[Tomy] 🔄 Reprise automatique après rechargement."
                );

                // Resynchroniser aussi l'état conservé par le background.
                chrome.runtime.sendMessage({ action: "preparerReload" });
            }

            activerModo();
        }
    }
);

// Secours : la reprise locale ne doit pas dépendre de la réponse
// du service worker.
if (repriseAutomatiqueDemandee) {
    setTimeout(() => {
        if (!isModoActive) activerModo();
    }, 500);
}

function activerModo() {
    if (isModoActive) {
        console.warn("[Tomy] Le modérateur est déjà actif.");
        return;
    }

    isModoActive = true;
    livedone = false;
    mutednbr = 0;
    blockednbr = 0;
    dernierCommentaireTimestamp = Date.now();
    derniereSignatureChatExterne = "";
    incidentNiveau4Actif = false;
    rechargementEnCours = false;
    nombreVerificationsChatAbsent = 0;

    chargerParametres(() => {
        console.warn("🛡️ [Tomy] Modérateur ACTIVÉ.");

        demarrerSurveillance();

        interval_2 = setInterval(
            postAutomatedComment,
            messageAutoChaque * 1000
        );

        interval_1 = setInterval(() => {
            trackerCompteurSpam.clear();
        }, timeReapeat * 1000);

        // Surveillance indépendante des commentaires automatiques.
        interval_3 = setInterval(verifierEtatChat, 5000);
    });
}
chrome.runtime.onMessage.addListener((request) => {
    if (request.action === "toggle") {
        if (request.status) {
            activerModo();
        } else {
            console.warn("🛑 [Tomy] Modérateur ARRÊTÉ.");
            arreterModoComplet();
        }
    }
});

// ==========================================
// 3. FONCTIONS D'ANALYSE
// ==========================================

function isAsianOrIndicLanguage(text) {
    if (!text) return false;
    const regexBlocsAsiatiquesIndiens = /[\u4E00-\u9FAF\u3040-\u30FF\uAC00-\uD7AF\u0900-\u0DFF\u0E00-\u0EFF]/;   
    return regexBlocsAsiatiquesIndiens.test(text);
}

function getDangerLevel(text) {
    if (!text) return 0;
    if (isAsianOrIndicLanguage(text)) return 4;
    
    const textLower = text.toLowerCase().trim();

    if (configor.motsNiveau1.some(mot => mot && textLower.includes(mot))) return 4;
    if (!configor.acceptInsult && configor.motsNiveau3.some(mot => mot && textLower.includes(mot))) return 3;
    if (configor.motsNiveau2.some(mot => mot && textLower.includes(mot))) return 2;

    if (textLower !== "3" && textLower !== "2" && textLower !== "1" && textLower !== "up") {
        let count = trackerCompteurSpam.get(textLower) || 0;
        count++;
        trackerCompteurSpam.set(textLower, count);
        
        if (count > nbrRepeat) {
            return 2;
        }
    }
    return 0; 
}

// ==========================================
// 4. ACTIONS ET UTILITAIRES
// ==========================================

function randomIntFromInterval(min, max) { return Math.floor(Math.random() * (max - min + 1) + min); }

function demanderRechargement(raison) {
    if (rechargementEnCours || !isModoActive || livedone) return;

    rechargementEnCours = true;
    console.warn(`[Tomy] 🔄 ${raison} Sauvegarde de l’état puis rechargement.`);

    // Ce drapeau garantit la reprise même si le service worker Chrome
    // est endormi ou ne répond pas avant le rechargement.
    try {
        localStorage.setItem(CLE_REPRISE_AUTOMATIQUE, "1");
    } catch (error) {
        console.error(
            "[Tomy] Impossible d'enregistrer le drapeau local de reprise :",
            error.message
        );
    }

    chrome.runtime.sendMessage(
        { action: "preparerReload" },
        () => location.reload()
    );

    // Secours si la réponse du service worker n'arrive pas.
    setTimeout(() => {
        if (rechargementEnCours) location.reload();
    }, 1500);
}

function verifierEtatChat() {
    if (!isModoActive || livedone || rechargementEnCours) return;

    const chatContainer = document.querySelector(
        '[data-e2e="live-chat-container"]'
    );
    const inputChat = document.querySelector(
        '[data-e2e="room-chat-input-field"]'
    );

    if (!chatContainer || !inputChat) {
        nombreVerificationsChatAbsent++;
    } else {
        nombreVerificationsChatAbsent = 0;
    }

    if (nombreVerificationsChatAbsent >= 3) {
        demanderRechargement(
            "Interface du chat absente pendant 15 secondes."
        );
        return;
    }

    const chatFige =
        Date.now() - dernierCommentaireTimestamp > 45000;

    if (chatFige) {
        demanderRechargement(
            "Chat probablement figé : aucun nouveau commentaire externe distinct depuis 45 secondes."
        );
    }
}

function enregistrerActiviteChat(contenu) {
    const texte = String(contenu || "").trim();
    if (!texte) return;

    const estCommentaireAutomatique = configor.messageAuto.some(
        message => String(message).trim() === texte
    );

    // Les commentaires automatiques locaux et la répétition du même
    // commentaire bloquant ne doivent pas faire croire que le chat avance.
    if (
        !estCommentaireAutomatique &&
        texte !== derniereSignatureChatExterne
    ) {
        derniereSignatureChatExterne = texte;
        dernierCommentaireTimestamp = Date.now();
    }
}

function postAutomatedComment() {
    const chatContainer = document.querySelector(
        '[data-e2e="live-chat-container"]'
    );

    const inputChat = document.querySelector(
        '[data-e2e="room-chat-input-field"]'
    );

    const sendBtn = document.querySelector(
        '[data-e2e="room-chat-send-btn"]'
    );

    if (
        !chatContainer ||
        !inputChat ||
        !sendBtn ||
        configor.messageAuto.length === 0
    ) {
        return;
    }

    let commentaire = configor.messageAuto[0];

    if (configor.messageAuto.length > 1) {
        commentaire = configor.messageAuto[
            randomIntFromInterval(
                0,
                configor.messageAuto.length - 1
            )
        ];
    }

    if (!commentaire) return;

    inputChat.focus();

    document.execCommand(
        "insertText",
        false,
        commentaire
    );

    if (inputChat.textContent !== commentaire) {
        inputChat.textContent = commentaire;

        inputChat.dispatchEvent(
            new InputEvent("input", {
                bubbles: true,
                inputType: "insertText",
                data: commentaire
            })
        );
    }

    setTimeout(() => {
        sendBtn.removeAttribute("disabled");
        sendBtn.click();

        console.log(
            "[Tomy] Commentaire envoyé : " + commentaire
        );

        console.log(
            "[Tomy] Mutes : " +
            mutednbr +
            " -- Blocks : " +
            blockednbr
        );
    }, 400);
}

function attenteElementStable(timeoutMax = 2000) {
    return new Promise((resolve, reject) => {
        const debut = Date.now();
        const interval = setInterval(() => {
            const menuEl = document.querySelector('div[role="dialog"], [data-testid*="menu"], .tux-popover__inner-QJ4Cdu');
            if (menuEl) {
                clearInterval(interval);
                resolve(menuEl);
            } else if (Date.now() - debut > timeoutMax) {
                clearInterval(interval);
                reject(new Error("Menu popover introuvable"));
            }
        }, 30);
    });
}

let automatisationFenetreInstallee = false;
let desactivationCommentairesEnCours = false;
let commentairesDesactivesParExtension = false;
function attendreDansFenetre(
    nouvelleFenetre,
    selecteur,
    timeoutMax = 10000
) {
    return new Promise((resolve, reject) => {
        const debut = Date.now();

        const interval = setInterval(() => {
            try {
                if (
                    !nouvelleFenetre ||
                    nouvelleFenetre.closed
                ) {
                    clearInterval(interval);
                    reject(
                        new Error("La fenêtre a été fermée")
                    );
                    return;
                }

                const element =
                    nouvelleFenetre.document.querySelector(
                        selecteur
                    );

                if (element) {
                    clearInterval(interval);
                    resolve(element);
                    return;
                }

                if (Date.now() - debut > timeoutMax) {
                    clearInterval(interval);
                    reject(
                        new Error(
                            `Élément introuvable : ${selecteur}`
                        )
                    );
                }
            } catch (error) {
                if (Date.now() - debut > timeoutMax) {
                    clearInterval(interval);
                    reject(error);
                }
            }
        }, 100);
    });
}
async function auChargementFenetre(event) {
    const nouvelleFenetre = event.target.defaultView;

    try {
        console.log(
            "[Tomy] Fenêtre de configuration chargée."
        );

        const cible = await attendreDansFenetre(
            nouvelleFenetre,
            "#app li",
            10000
        );

        cible.click();

        console.log(
            "[Tomy] Première option de configuration cliquée."
        );

        const beta = await attendreDansFenetre(
            nouvelleFenetre,
            'button[role="switch"]',
            5000
        );

        const etatAvant =
            beta.getAttribute("aria-checked");

        console.log(
            "[Tomy] État du switch avant le clic :",
            etatAvant
        );

        if (commentairesDesactivesParExtension) {
            console.log(
                "[Tomy] Commentaires déjà désactivés."
            );
            return;
        }
        beta.click();

        commentairesDesactivesParExtension = true;

        console.log(
            "[Tomy] Switch des commentaires cliqué."
        );
    } catch (error) {
        console.error(
            "[Tomy] Impossible de désactiver les commentaires :",
            error.message
        );
    } finally {
        desactivationCommentairesEnCours = false;
    }
}

function automatiserNouvelleFenetre() {
    if (automatisationFenetreInstallee) {
        return;
    }

    automatisationFenetreInstallee = true;

    const originalOpen = window.open;

    window.open = function(...args) {
        const nouvelleFenetre =
            originalOpen.apply(this, args);

        if (nouvelleFenetre) {
            nouvelleFenetre.removeEventListener(
                "load",
                auChargementFenetre
            );

            nouvelleFenetre.addEventListener(
                "load",
                auChargementFenetre
            );
        }

        return nouvelleFenetre;
    };

    console.log(
        "[Tomy] Automatisation de la fenêtre installée."
    );
}

async function disableAllComments() {
    if (
        desactivationCommentairesEnCours ||
        commentairesDesactivesParExtension
    ) {
        console.warn(
            "[Tomy] Désactivation déjà faite ou en cours."
        );
        return;
    }

    desactivationCommentairesEnCours = true;
    console.warn(
        "[Tomy] 🚨 disableAllComments() lancée : ouverture des réglages du chat."
    );
    try {
        automatiserNouvelleFenetre();
        const toggleBtn = document.querySelector('[data-e2e="live-chat-container"]');
        if (!toggleBtn) {
            throw new Error(
                "Conteneur du chat TikTok introuvable"
            );
        }
        const lav_a = toggleBtn.children;

        if (!lav_a[1]) {
            throw new Error(
                "Étape lav_a[1] introuvable dans le chat"
            );
        }

        const lav_b = lav_a[1].children;

        if (!lav_b[0]) {
            throw new Error(
                "Étape lav_b[0] introuvable dans le chat"
            );
        }

        const lav_c = lav_b[0].children;

        if (!lav_c[1]) {
            throw new Error(
                "Bouton lav_c[1] introuvable dans le chat"
            );
        }

        lav_c[1].click();

        console.log(
            "[Tomy] Premier bouton de modération cliqué."
        );

        const toggleBtnB = await new Promise((resolve, reject) => {
            const debut = Date.now();
            const interval = setInterval(() => {
                const el = document.querySelector('[data-testid="tux-config-provider"] .cursor-pointer.px-16');
                if (el) {
                    clearInterval(interval);
                    resolve(el);
                } else if (Date.now() - debut > 2000) {
                    clearInterval(interval);
                    reject(new Error("Bouton de configuration introuvable"));
                }
            }, 30);
        });

        if (!toggleBtnB) {
            throw new Error(
                "Bouton ouvrant la configuration introuvable"
            );
        }

        toggleBtnB.click();

        // Si la fenêtre ne s’ouvre pas, autoriser une autre
        // tentative après 15 secondes.
        setTimeout(() => {
            if (!commentairesDesactivesParExtension) {
                desactivationCommentairesEnCours = false;
            }
        }, 15000);
    } catch(error) {
        desactivationCommentairesEnCours = false;
        console.error(
            "[Tomy] Échec de la désactivation des commentaires :",
            error
        );
    }
}

// ==========================================
// 5. GESTION DE LA FILE D'ATTENTE DE MODÉRATION (QUEUE)
// ==========================================
async function executerFileModeration() {
    if (moderationQueue.length === 0) {
        isProcessingQueue = false;
        return;
    }

    isProcessingQueue = true;
    const item = moderationQueue.shift();
    const commentNode = item.node;
    const dangerLevel = item.danger;

    try {
        if (document.body.contains(commentNode) && !commentNode.dataset.modere) {

            const moreBtn = commentNode.querySelector('.moreActionButton, [data-e2e*="more"], button');
            if (moreBtn) {
                moreBtn.click();

                await attenteElementStable(1500);
                await new Promise(r => setTimeout(r, 40));

                const menuItems = document.querySelectorAll('div[role="dialog"] div, [data-testid*="menu"] div, .tux-menu-item');
                let muteLiveBtn = null;
                let blockBtn = null;

                menuItems.forEach(menuItem => {
                    const txt = menuItem.textContent.trim().toLowerCase();
                    if (txt.includes('mettre en sourdine - live entier') || txt.includes('mute entire live') || txt.includes('sourdine')) {
                        muteLiveBtn = menuItem;
                    }
                    if (txt.includes('bloquer') || txt.includes('block')) {
                        blockBtn = menuItem;
                    }
                });
                if (dangerLevel === 4) {
                    // Niveau 4 : muter d'abord, puis bloquer si possible.
                    if (!muteLiveBtn && !blockBtn) {
                        throw new Error(
                            "Boutons de sourdine et de blocage introuvables pour le niveau 4"
                        );
                    }

                    if (muteLiveBtn) {
                        muteLiveBtn.click();
                        mutednbr++;
                        console.log("[Tomy] Action réussie : niveau 4 mis en sourdine.");

                        // Laisser à TikTok le temps de traiter la sourdine.
                        await new Promise(r => setTimeout(r, 75));
                    } else {
                        console.warn(
                            "[Tomy] Niveau 4 : sourdine indisponible, tentative de blocage direct."
                        );
                    }

                    if (blockBtn) {
                        blockBtn.click();
                        blockednbr++;
                        console.log("[Tomy] Action tentée : niveau 4 bloqué.");
                    } else {
                        console.warn(
                            "[Tomy] Niveau 4 mis en sourdine, mais bouton de blocage introuvable."
                        );
                    }

                    commentNode.dataset.modere = "true";
                }
                else if (dangerLevel === 2 || dangerLevel === 3) {
                    // Niveau 2 : toujours muter
                    // Niveau 3 : produit seulement si les insultes sont interdites
                    if (!muteLiveBtn) {
                        throw new Error("Bouton de sourdine introuvable");
                    }

                    muteLiveBtn.click();
                    mutednbr++;

                    commentNode.dataset.modere = "true";
                }

                if (configor.removeAfter) {
                    commentNode.remove();
                } else {
                    commentNode.style.background = dangerLevel === 4 ? 'crimson' : 'gold';
                }
            } else {
                throw new Error(
                    "Bouton d’action du commentaire introuvable"
                );
            }
        }
    } catch (error) {
        commentNode.removeAttribute("data-mod-checked");
        commentNode.removeAttribute("data-modere");

        console.warn(
            "[Tomy] Modération échouée, nouvelle tentative possible :",
            error.message
        );
    } finally {
        // Cadencement stable entre chaque action de modération (50ms) pour absorber les gros volumes
        setTimeout(executerFileModeration, 50);
    }
}

// ==========================================
// 6. BOUCLE DE SURVEILLANCE
// ==========================================
let compteurNiveau4Rafale = 0;
let dernierNiveau4Timestamp = 0;
let resetNiveau4Timeout = null;
let commentairesNiveau4Comptes = new WeakSet();
function enregistrerNiveau4() {
    const maintenant = Date.now();
    const fenetreMs = timeReapeat * 1000;

    // Une nouvelle rafale commence après une période sans niveau 4.
    if (
        dernierNiveau4Timestamp === 0 ||
        maintenant - dernierNiveau4Timestamp > fenetreMs
    ) {
        compteurNiveau4Rafale = 0;
    }

    dernierNiveau4Timestamp = maintenant;
    compteurNiveau4Rafale++;
    incidentNiveau4Actif = true;

    clearTimeout(resetNiveau4Timeout);
    resetNiveau4Timeout = setTimeout(() => {
        compteurNiveau4Rafale = 0;
        dernierNiveau4Timestamp = 0;
        console.log(
            `[Tomy] Compteur niveau 4 remis à zéro après ${timeReapeat} secondes sans nouvelle détection.`
        );
    }, fenetreMs);

    console.warn(
        `[Tomy] Compteur raid niveau 4 : ${compteurNiveau4Rafale}/${configor.seuilSpamDangereux}.`
    );

    if (compteurNiveau4Rafale >= configor.seuilSpamDangereux) {
        console.warn(
            `[Tomy] 🚨 Seuil atteint : tentative immédiate de désactivation des commentaires.`
        );

        compteurNiveau4Rafale = 0;
        dernierNiveau4Timestamp = 0;
        clearTimeout(resetNiveau4Timeout);
        resetNiveau4Timeout = null;
        void disableAllComments();
    }
}
function demarrerSurveillance() {
     if (!isModoActive || livedone) return;

    const termino = document.querySelector('[data-e2e="live-content-container"] .H2-Medium');
    if (termino && termino.textContent === 'Le LIVE est terminé') {
        chrome.runtime.sendMessage({ action: "eteindreAutomatiquement" });
        arreterModoComplet();
        console.log("[Tomy] 🛑 Live terminé. Mutes: " + mutednbr + " | Blocks: " + blockednbr);
        return;
    }

    const commentaires = document.querySelectorAll('div[data-e2e="chat-message"]:not([data-mod-checked="true"])');
    
    if (commentaires && commentaires.length > 0) {
        commentaires.forEach(node => {
            try {
                var sonfils_1 = node.getElementsByTagName('div');
                if (sonfils_1 && sonfils_1[2]) {
                    var sonfils_2 = sonfils_1[2].getElementsByTagName('div');
                    if (sonfils_2 && sonfils_2[3]) {
                        const contenu = sonfils_2[3].textContent;
                        enregistrerActiviteChat(contenu);
                        const danger = getDangerLevel(contenu);

                        if (danger == 2 || danger == 3) {
                            console.log('[Tomy] mute com: ' + contenu);
                        }
                        if (danger == 4) {
                            console.log('[Tomy] mute+BLOCK com: ' + contenu);
                        }

                        if (
                            danger === 4 &&
                            !commentairesNiveau4Comptes.has(node)
                        ) {
                            commentairesNiveau4Comptes.add(node);
                            enregistrerNiveau4();
                        }

                        if (danger < 2) {
                            // Couleur greenyellow garantie pour les commentaires propres
                            node.setAttribute("data-mod-checked", "true");
                            node.style.background = 'greenyellow';
                            if (configor.removeAfter) {
                                setTimeout(() => {
                                    if (node && node.parentNode) node.remove();
                                }, 200);
                            }
                        } else {
                            if (moderationQueue.length >= MAX_QUEUE_SIZE) {
                                node.removeAttribute("data-mod-checked");
                                return;
                            }

                            node.setAttribute("data-mod-checked", "true");
                            node.style.background = danger === 4 ? "crimson" : "gold";
                            moderationQueue.push({ node, danger });

                            if (!isProcessingQueue) {
                                executerFileModeration();
                            }
                        }
                    }
                }
            } catch(err) {}
        });
    }

    if (isModoActive && !livedone) {
        surveillanceTimeout = setTimeout(() => {
            surveillanceTimeout = null;
            demarrerSurveillance();
        }, 200);
    }
}

function arreterModoComplet() {
    clearInterval(interval_1);
    clearInterval(interval_2);
    clearInterval(interval_3);
    clearTimeout(surveillanceTimeout);
    clearTimeout(resetNiveau4Timeout);

    interval_1 = null;
    interval_2 = null;
    interval_3 = null;
    surveillanceTimeout = null;
    resetNiveau4Timeout = null;

    isModoActive = false;
    livedone = true;

    moderationQueue = [];
    isProcessingQueue = false;
    trackerCompteurSpam.clear();
    compteurNiveau4Rafale = 0;
    dernierNiveau4Timestamp = 0;
    commentairesNiveau4Comptes = new WeakSet();

    desactivationCommentairesEnCours = false;
    commentairesDesactivesParExtension = false;
    nombreVerificationsChatAbsent = 0;
    derniereSignatureChatExterne = "";
    incidentNiveau4Actif = false;
    rechargementEnCours = false;
}
console.warn("[Tomy] 🛡️ Modérateur TikTok anti-trolls prêt avec file d'attente optimisée !");
