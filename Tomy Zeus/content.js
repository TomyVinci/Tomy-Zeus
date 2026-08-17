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
    messageAuto: ["🎉كبسو 👉🏻بارطاجيو➡️دعمو البث"], 
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
        "🍓", "💀", "☠", "🐷", "👽", "🖕", "nik", "nyk", "nicm", "نيك", "ܦ߳ߺܒߺࡅٜߺܘ߳", 
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
        "dhbah", "dhbeh", "⡎⠀⠀⠀⠀⢀⠀⠉⠒⠤⣀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠇⠀⠀⠀⠀⠀⢂⠀⠀⠀⠀⠉⠲⡴⠋⢢⠀⠀⠀ ⠀⠘⢄⠀⠀⠀⠀⢸⢲⠤⠤⣀⡀⠀⡇⠀⠀⠳⡄⠀ ⠀⠀⠈⠳⢤⣀⣤⣊⠌⠀⠀⠀⠈⠑⠺⣄⠀⠀⣸"
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

// File d'attente asynchrone.
// Tous les commentaires dangereux détectés sont ajoutés à la file.
// Ils sont traités séquentiellement.
let moderationQueue = [];
let isProcessingQueue = false;
let moderationRetryTimer = null;

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
                console.info(
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
        console.log("[Tomy] Le modérateur est déjà actif.");
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
        console.info("🛡️ [Tomy] Modérateur ACTIVÉ.");

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
            console.info("🛑 [Tomy] Modérateur ARRÊTÉ.");
            arreterModoComplet();
        }
    }
});

// ==========================================
// 3. FONCTIONS D'ANALYSE
// ==========================================

function retirerTagReponsePourAnalyseLangue(messageElement) {
    const texteComplet = String(
        messageElement.textContent || ""
    ).trim();

    // Si le commentaire ne commence pas par @,
    // il n'y a pas de tag de réponse à retirer.
    if (!texteComplet.startsWith("@")) {
        return texteComplet;
    }

    const copie = messageElement.cloneNode(true);

    // Cherche n'importe quel élément enfant contenant
    // le @pseudo au tout début du commentaire.
    const candidats = [...copie.querySelectorAll("*")]
        .filter(element => {
            const texteElement = String(
                element.textContent || ""
            ).trim();

            return (
                texteElement.startsWith("@") &&
                texteComplet.startsWith(texteElement)
            );
        })
        .sort((a, b) =>
            a.textContent.length - b.textContent.length
        );

    // On prend le plus petit élément correspondant.
    // Cela peut être <a>, <span>, <div>, etc.
    const tagReponse = candidats[0];

    if (tagReponse) {
        tagReponse.remove();
    }

    return String(
        copie.textContent || ""
    ).trim();
}
function isAsianOrIndicLanguage(text) {
    if (!text) return false;
    const regexBlocsAsiatiquesIndiens = /[\u4E00-\u9FAF\u3040-\u30FF\uAC00-\uD7AF\u0900-\u0DFF\u0E00-\u0EFF]/;   
    return regexBlocsAsiatiquesIndiens.test(text);
}
const cacheRegexMotsInterdits = new Map();
function echapperRegExp(texte) {return texte.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}
function contientMotInterdit(texte, mot) {
    const terme = String(mot || "")
        .trim()
        .normalize("NFC");

    if (!terme) return false;

    let regex = cacheRegexMotsInterdits.get(terme);

    if (!regex) {
        // Lettres, chiffres, accents/diacritiques et underscore.
        const caractereDeMot = /[\p{L}\p{N}\p{M}_]/u;

        const caracteres = Array.from(terme);
        const commenceParMot = caractereDeMot.test(caracteres[0]);
        const finitParMot =
            caractereDeMot.test(caracteres[caracteres.length - 1]);

        const limiteDebut = commenceParMot
            ? "(^|[^\\p{L}\\p{N}\\p{M}_])"
            : "";

        const limiteFin = finitParMot
            ? "(?=$|[^\\p{L}\\p{N}\\p{M}_])"
            : "";

        regex = new RegExp(
            limiteDebut +
            echapperRegExp(terme) +
            limiteFin,
            "iu"
        );

        cacheRegexMotsInterdits.set(terme, regex);
    }

    return regex.test(
        String(texte || "").normalize("NFC")
    );
}
function getDangerLevel(text, textePourAnalyseLangue = text) {
    if (!text) return 0;
    if (isAsianOrIndicLanguage(textePourAnalyseLangue)) return 4;
    
    const textLower = text.toLowerCase().trim();

    if (
        configor.motsNiveau1.some(
            mot => contientMotInterdit(textLower, mot)
        )
    ) return 4;

    if (
        !configor.acceptInsult &&
        configor.motsNiveau3.some(
            mot => contientMotInterdit(textLower, mot)
        )
    ) return 3;

    if (
        configor.motsNiveau2.some(
            mot => contientMotInterdit(textLower, mot)
        )
    ) return 2;

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
    console.info(`[Tomy] 🔄 ${raison} Sauvegarde de l’état puis rechargement.`);

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
    }, 5000);
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

    if (nombreVerificationsChatAbsent >= 6) {
        demanderRechargement(
            "Interface du chat absente pendant 15 secondes."
        );
        return;
    }

    const chatFige =
        Date.now() - dernierCommentaireTimestamp > 120000;

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

function attenteElementStable(timeoutMax = 5000) {
    return new Promise((resolve, reject) => {

        const debut = Date.now();

        const verifier = () => {

            const candidats = document.querySelectorAll(
                'div[role="dialog"], ' +
                '[data-testid*="menu"], ' +
                '[class*="tux-popover__inner"], ' +
                '[class*="tux-menu"]'
            );

            const menuEl = [...candidats].find(element => {

                if (
                    !element.isConnected ||
                    element.getClientRects().length === 0
                ) {
                    return false;
                }

                // On ne regarde PLUS le texte.
                // Le menu peut être en français, finnois,
                // anglais, etc.
                return !!element.querySelector(
                    ".tux-menu-item"
                );
            });

            if (menuEl) {

                console.log(
                    "[Tomy] ✅ Menu de modération réellement détecté."
                );

                return resolve(menuEl);
            }

            if (Date.now() - debut >= timeoutMax) {

                reject(
                    new Error(
                        "Menu de modération introuvable après 5 secondes."
                    )
                );

                return;
            }

            setTimeout(verifier, 100);
        };

        verifier();
    });
}

let commentairesDesactivesParExtension = false;

async function disableAllComments() {
    if (commentairesDesactivesParExtension) {
        console.info(
            "[Tomy] Désactivation déjà faite ou en cours."
        );
        return;
    }

    console.error(
        "[Tomy] 🚨 disableAllComments() lancée : ouverture des réglages du chat."
    );
    try {
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

        const debutConfiguration = Date.now();

        const intervalConfiguration = setInterval(() => {
            const el = document.querySelector(
                '[data-testid="tux-config-provider"] .cursor-pointer.px-16'
            );

            if (el) {
                clearInterval(intervalConfiguration);
                el.click();
                return;
            }

            if (Date.now() - debutConfiguration > 20000) {
                clearInterval(intervalConfiguration);

                console.error(
                    "[Tomy] ❌ Bouton de configuration introuvable après 20 secondes."
                );

            }
        }, 50);

        /*const toggleBtnB = await new Promise((resolve, reject) => {
            const debut = Date.now();
            const interval = setInterval(() => {
                const el = document.querySelector('[data-testid="tux-config-provider"] .cursor-pointer.px-16');
                if (el) {
                    el.click();
                    clearInterval(interval);
                    resolve(el);
                } else if (Date.now() - debut > 2000) {
                    clearInterval(interval);
                    reject(new Error("Bouton de configuration introuvable"));
                }
            }, 30);
        });*/

        //toggleBtnB.click();

        // Si la fenêtre ne s’ouvre pas, autoriser une autre
        // tentative après 15 secondes.
    } catch(error) {
        console.error(
            "[Tomy] Échec de la désactivation des commentaires :",
            error
        );
    }
}

// ==========================================
// 5. GESTION DE LA FILE D'ATTENTE DE MODÉRATION (QUEUE)
// ==========================================
function programmerExecutionModeration(delai = 50) {
    if (moderationRetryTimer !== null) {
        return;
    }

    moderationRetryTimer = setTimeout(() => {
        moderationRetryTimer = null;
        executerFileModeration();
    }, delai);
}
async function executerFileModeration() {
    if (isProcessingQueue) return;
    isProcessingQueue = true;

    if (moderationQueue.length === 0) {
        isProcessingQueue = false;
        return;
    }

    const item = moderationQueue[0];
    const commentNode = item.node;
    const dangerLevel = item.danger;
    const nomCompte = item.nomCompte || "Compte inconnu";
    const contenu = item.contenu || "Commentaire inconnu";

    try {
        if (!commentNode.isConnected) {
            // Le commentaire n'existe plus : il ne doit plus rester dans la queue.
            if (moderationQueue[0] === item) {
                moderationQueue.shift();
            }

            return;
        }

        if (document.body.contains(commentNode) && !commentNode.dataset.modere) {

            const boutonsVisibles = [...commentNode.querySelectorAll("button")]
                .filter(bouton =>
                    bouton.isConnected &&
                    bouton.getClientRects().length > 0
                );

            const boutonsAction = [
                ...commentNode.querySelectorAll(
                    '.moreActionButton, [data-e2e*="more"]'
                )
            ];

            const moreBtn =
                boutonsAction.find(bouton =>
                    bouton.isConnected &&
                    bouton.getClientRects().length > 0
                ) ||
                boutonsVisibles.find(bouton => {
                    const description = String(
                        bouton.getAttribute("aria-label") ||
                        bouton.getAttribute("title") ||
                        ""
                    ).toLowerCase();

                    return (
                        description.includes("more") ||
                        description.includes("plus") ||
                        description.includes("action")
                    );
                }) ||
                boutonsVisibles[boutonsVisibles.length - 1];

            if (moreBtn) {
                moreBtn.click();

                let menuEl;

                try {
                    menuEl = await attenteElementStable(2000);
                } catch (premiereErreur) {
                    if (!moreBtn.isConnected || !commentNode.isConnected) {
                        throw premiereErreur;
                    }

                    // Une seule deuxième tentative.
                    await new Promise(r => setTimeout(r, 150));
                    moreBtn.click();

                    menuEl = await attenteElementStable(2000);
                }

                await new Promise(r => setTimeout(r, 30));

                // Le commentaire a pu disparaître pendant l’ouverture du menu.
                if (!commentNode.isConnected) {
                    return;
                }

                /*
                const racinesMenu = [
                    ...document.querySelectorAll(
                        'div[role="dialog"], ' +
                        '[data-testid*="menu"], ' +
                        '[class*="tux-popover__inner"], ' +
                        '[class*="tux-menu"]'
                    )
                ].filter(element => {
                    if (
                        !element.isConnected ||
                        element.getClientRects().length === 0
                    ) {
                        return false;
                    }

                    const texte = String(element.textContent || "")
                        .trim()
                        .toLowerCase();

                    return (
                        texte.includes("sourdine") ||
                        texte.includes("mute") ||
                        texte.includes("bloquer") ||
                        texte.includes("block")
                    );
                });
                const menuItems = [
                    ...new Set(
                        racinesMenu.flatMap(racine => [
                            racine,
                            ...racine.querySelectorAll(
                                'div, button, [role="menuitem"], .tux-menu-item'
                            )
                        ])
                    )
                ];
                */

                function trouverActionMenu(motsCherches) {

                    const lignesMenu = [
                        ...menuEl.querySelectorAll(".tux-menu-item")
                    ];

                    for (const ligne of lignesMenu) {

                        if (
                            !ligne.isConnected ||
                            ligne.getClientRects().length === 0
                        ) {
                            continue;
                        }

                        const texte = String(
                            ligne.textContent || ""
                        )
                            .trim()
                            .toLowerCase();

                        const correspond =
                            motsCherches.some(mot =>
                                texte.includes(mot)
                            );

                        if (!correspond) {
                            continue;
                        }

                        // TikTok place l'action réelle ici.
                        const interaction = ligne.querySelector(
                            '[data-testid="tux-web-interaction-container"]'
                        );

                        if (
                            interaction &&
                            interaction.isConnected &&
                            interaction.getClientRects().length > 0
                        ) {
                            return interaction;
                        }

                        // Secours si TikTok change légèrement sa structure.
                        return ligne;
                    }

                    return null;
                }

                async function attendreActionTikTok(
                    mots,
                    timeout = 2000
                ) {
                    const debut = Date.now();

                    while (Date.now() - debut < timeout) {

                        const element = trouverActionMenu(mots);

                        if (
                            element &&
                            element.isConnected &&
                            element.getClientRects().length > 0
                        ) {
                            return element;
                        }

                        await new Promise(
                            resolve => setTimeout(resolve, 100)
                        );
                    }

                    return null;
                }

                async function cliquerActionTikTok(
                    element,
                    menuEl
                ) {

                    if (
                        !element ||
                        !element.isConnected ||
                        element.getClientRects().length === 0
                    ) {
                        return false;
                    }

                    console.log(
                        "[Tomy] 🖱️ Clic sur action :",
                        element.textContent.trim()
                    );

                    element.click();

                    const debut = Date.now();

                    while (Date.now() - debut < 3000) {

                        await new Promise(
                            resolve => setTimeout(resolve, 100)
                        );

                        if (
                            !menuEl ||
                            !menuEl.isConnected ||
                            menuEl.getClientRects().length === 0
                        ) {
                            console.log(
                                "[Tomy] ✅ Menu fermé : action confirmée."
                            );

                            return true;
                        }
                    }

                    console.error(
                        "[Tomy] ❌ Le menu est toujours ouvert après 3 secondes."
                    );

                    return false;
                }

                const muteLiveBtn = await attendreActionTikTok([
                    "sourdine",
                    "mute",
                    "mykistä"
                ]);

                if (!muteLiveBtn) {
                    throw new Error(
                        "Bouton de sourdine introuvable après 300 ms"
                    );
                }

                const blockBtn = trouverActionMenu([
                    "bloquer",
                    "block"
                ]);

                console.log(
                    `[Tomy] Actions détectées — ` +
                    `Bloquer : ${Boolean(blockBtn)} — ` +
                    `Sourdine : ${Boolean(muteLiveBtn)}`
                );

                // je le laisse comme ça pour l'instant, que le mute, après je vais y penser
                /*
                if (dangerLevel === 4) {
                    // Niveau 4 : bloquer en priorité.
                    if (blockBtn) {
                        cliquerActionTikTok(blockBtn);
                        blockednbr++;

                        console.error(
                            `[Tomy] ❌ BLOQUÉ — Compte : ${nomCompte}` +
                            ` — Commentaire : "${contenu}"`
                        );

                        console.log(
                            "[Tomy] Action réussie : niveau 4 bloqué."
                        );
                    } else if (muteLiveBtn) {
                        console.log(
                            "[Tomy] Clic SOURDINE sur :",
                            muteLiveBtn,
                            "texte =",
                            muteLiveBtn?.textContent
                        );

                        // Secours si TikTok ne propose pas le blocage.
                        cliquerActionTikTok(muteLiveBtn);
                        mutednbr++;

                        console.warn(
                            `[Tomy] MUTÉ 🔇 — Compte : ${nomCompte}` +
                            ` — Commentaire : "${contenu}"`
                        );

                        console.warn(
                            "[Tomy] Blocage indisponible : niveau 4 mis en sourdine."
                        );
                    } else {
                        throw new Error(
                            "Boutons de blocage et de sourdine introuvables pour le niveau 4"
                        );
                    }

                    commentNode.dataset.modere = "true";
                }
                
                else */if (dangerLevel === 2 || dangerLevel === 3 || dangerLevel === 4) {
                    // Niveau 2 : toujours muter
                    // Niveau 3 : produit seulement si les insultes sont interdites
                    if (!muteLiveBtn) {
                        throw new Error("Bouton de sourdine introuvable");
                    }
                    //const actionOK = await cliquerActionTikTok(muteLiveBtn);
                    const actionOK = await cliquerActionTikTok(
                        muteLiveBtn,
                        menuEl
                    );

                    if (!actionOK) {
                        throw new Error(
                            "Échec du clic sur le bouton de sourdine"
                        );
                    }

                    if (moderationQueue[0] === item) {
                        moderationQueue.shift();
                    }
                    mutednbr++;

                    console.warn(
                        `[Tomy] MUTÉ 🔇 — Compte : ${nomCompte}` +
                        ` — Commentaire : "${contenu}"`
                    );

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
        // Si TikTok a déjà retiré le commentaire, aucune erreur
        // et aucune nouvelle tentative.
        if (!commentNode.isConnected) {
            return;
        }

        commentNode.removeAttribute("data-modere");
        commentNode.setAttribute("data-mod-checked", "true");

        // Nouvelle tentative après une seconde, pas immédiatement.
        /*setTimeout(() => {
            if (
                commentNode.isConnected &&
                !commentNode.dataset.modere
            ) {
                commentNode.removeAttribute("data-mod-checked");
            }
        }, 1000);

        item.retryCount = (item.retryCount || 0) + 1;

        if (item.retryCount >= 3) {
            console.error(
                "[Tomy] ❌ 3 échecs de modération : abandon de cet élément pour éviter une boucle."
            );

            if (moderationQueue[0] === item) {
                moderationQueue.shift();
            }
        }*/

        console.error(
            "[Tomy] Modération échouée, nouvelle tentative possible :",
            error.message
        );
    } finally {
        isProcessingQueue = false;

        if (moderationQueue.length > 0) {
            programmerExecutionModeration(500);
        }
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
        console.error(
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

                        const nomElement = node.querySelector(
                            '[data-e2e="message-owner-name"]'
                        );

                        const nomCompte = String(
                            nomElement?.getAttribute("title") ||
                            nomElement?.textContent ||
                            "Compte inconnu"
                        ).trim();

                        const contenuElement = sonfils_2[3];
                        const contenu = contenuElement.textContent;

                        const contenuSansTagReponse = retirerTagReponsePourAnalyseLangue(contenuElement);

                        enregistrerActiviteChat(contenu);

                        const danger = getDangerLevel(
                            contenu,
                            contenuSansTagReponse
                        );

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
                            const estNotreCommentaire = configor.messageAuto.some(
                                message => String(message).trim() === String(contenu).trim()
                            );

                            node.style.background = estNotreCommentaire
                                ? "lightblue"
                                : "greenyellow";
                            node.style.color = '#000';
                            if (configor.removeAfter) {
                                setTimeout(() => {
                                    if (node && node.parentNode) node.remove();
                                }, 200);
                            }
                        } else {
                            node.setAttribute("data-mod-checked", "true");
                            node.style.background = danger === 4 ? "crimson" : "gold";

                            moderationQueue.push({
                                node,
                                danger,
                                nomCompte,
                                contenu
                            });

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
    moderationRetryTimer = null;
    trackerCompteurSpam.clear();
    compteurNiveau4Rafale = 0;
    dernierNiveau4Timestamp = 0;
    commentairesNiveau4Comptes = new WeakSet();

    commentairesDesactivesParExtension = false;
    nombreVerificationsChatAbsent = 0;
    derniereSignatureChatExterne = "";
    incidentNiveau4Actif = false;
    rechargementEnCours = false;
}
console.info("[Tomy] 🛡️ Modérateur TikTok anti-trolls prêt !");
