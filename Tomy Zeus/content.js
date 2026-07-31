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
    acceptInsult: false, 
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
        "كرغولي", "كراغلة", "سنغولي", "سناغلة", "bghal", "bighal", "beghal", "beghla", "baghla", "baghla", "sewa", 
        "nadrabh", "nadrebh", "nedrabh", "nedrebh", "نضربه", "نظربه", "فراقش", "بقر", "لقيط", "لقطاء", "sewwa", 
        "nadhrabh", "nadhrebh", "nedhrabh", "nedhrebh", "rondila", "rendila", "rondela", "rendela", "khtok", "kahba", 
        "khtak", "ختك", "يماك", "باباك", "wlid", "wlad", "وليد", "ولاد", "ولاد القاف", "حرق", "نفرغه", "قود", 
        "signalez", "سينيالو", "راهو لايف", "راهي لايف", "putasse", "بيتاس", "puta", "suka", "suck", "ass", 
        "dick", "cock", "مثقوبة", "مقعورة", "ثقبة", "قعرة", "نمي", "nami", "nemi", "nammi", "nemmi", "ahtit", 
        "a7tit", "أحطيط", "احطيط", "تيكعولت", "ثيكعولت", "fuck", "bitch", "joder", "حل لايف", "حلت لايف", 
        "زايلة", "مقران", "مقحب", "صهيوني", "صهاينة", "sioniste", "zioniste", "sionniste", "zionniste", "thoqba", 
        "thouqba", "thou9ba", "شرموط", "شراميط", "marochien", "stkhnk", "زب", "سوّة", "سوتمك", "سوّتمك", 
        "9lawi", "qlawi", "qlwi", "9elwa", "qelwa", "qlwa", "terma", "termet", "termat", "trmtymk", "trmtk",
        "طرمة", "طيز", "ذبيح", "أشلاء", "اشلاء", "تعطي", "زّب", "dba7", "dbe7", "dbah", "dbeh", "dhba7", "dhbe7", 
        "dhbah", "dhbeh"
    ], 
    motsNiveau1: ["فداج", "feddaj", "feddadj", "faddaj", "faddadj"]
};

// ==========================================
// 2. CHARGEMENT DES PARAMÈTRES
// ==========================================
function chargerParametres(callback) {
    var localostomios = [
        'nbrRepeat', 'timeReapeat', 'messageAutoChaque', 'seuilSpamDangereux', 'messageAuto', 'motsNiveau1', 'acceptInsult', 'motsNiveau3'
    ];
    chrome.storage.local.get(localostomios, (data) => {
        if (!chrome.runtime.lastError) {
            if (data.nbrRepeat !== undefined) nbrRepeat = Number(data.nbrRepeat);
            if (data.timeReapeat !== undefined) timeReapeat = Number(data.timeReapeat);
            if (data.messageAutoChaque !== undefined) messageAutoChaque = Number(data.messageAutoChaque);
            if (data.seuilSpamDangereux !== undefined) configor.seuilSpamDangereux = Number(data.seuilSpamDangereux);
            if (data.messageAuto !== undefined) {
                configor.messageAuto = typeof data.messageAuto === 'string' ? data.messageAuto.split(',').map(m => m.trim()) : data.messageAuto;
            }
            if (data.motsNiveau1 !== undefined) {
                configor.motsNiveau1 = typeof data.motsNiveau1 === 'string' ? data.motsNiveau1.split(',').map(m => m.trim()) : data.motsNiveau1;
            }
            if (data.acceptInsult !== undefined) configor.acceptInsult = Boolean(data.acceptInsult);
            if (data.motsNiveau3 !== undefined) {
                configor.motsNiveau3 = typeof data.motsNiveau3 === 'string' ? data.motsNiveau3.split(',').map(m => m.trim()) : data.motsNiveau3;
            }
        }
        if (callback) callback();
    });
}

let interval_1 = null;
let interval_2 = null;
let surveillanceTimeout = null;
let isModoActive = false;
let mutednbr = 0, blockednbr = 0, livedone = false; 
let dernierCommentaireTimestamp = Date.now();
const trackerCompteurSpam = new Map();

// File d'attente asynchrone pour encaisser les pics de 100 msg/sec sans rater ni bloquer le DOM
let moderationQueue = [];
let isProcessingQueue = false;
const MAX_QUEUE_SIZE = 40;

chrome.runtime.sendMessage({ action: "verifierEtat" }, (response) => {
    if (response && response.status) {
        chargerParametres(() => {
            console.warn("🔄 [Tomy] Reprise automatique avec les paramètres du popup !");
            isModoActive = true;
            demarrerSurveillance();
            interval_2 = setInterval(postAutomatedComment, messageAutoChaque * 1000);
            interval_1 = setInterval(() => { trackerCompteurSpam.clear() }, timeReapeat * 1000);
        });
    }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "toggle") {
        isModoActive = request.status;

        if (isModoActive) {
            chargerParametres(() => {
                console.warn("🛡️ [Tomy] Modérateur ACTIVÉ via le Popup.");
                livedone = false;
                demarrerSurveillance();
                interval_2 = setInterval(postAutomatedComment, messageAutoChaque * 1000);
                interval_1 = setInterval(() => { trackerCompteurSpam.clear(); }, timeReapeat * 1000);
            });
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

    if (textLower !== "3" && textLower !== "2" && textLower !== "1" && textLower !== "up") {
        let count = trackerCompteurSpam.get(textLower) || 0;
        count++;
        trackerCompteurSpam.set(textLower, count);
        
        if (count > nbrRepeat) {
            return 2; // Spam répétitif (200 fois en 10 secondes)
        }
    }

    if (configor.motsNiveau2.some(mot => textLower.includes(mot))) return 2;
    if (!configor.acceptInsult && configor.motsNiveau3.some(mot => textLower.includes(mot))) return 3;
    if (configor.motsNiveau1.some(mot => textLower.includes(mot))) return 4;
    return 0; 
}

// ==========================================
// 4. ACTIONS ET UTILITAIRES
// ==========================================

function randomIntFromInterval(min, max) { return Math.floor(Math.random() * (max - min + 1) + min); }

function postAutomatedComment() {
    var actualCommentaireTimestamp = Date.now();
    var diff = actualCommentaireTimestamp - dernierCommentaireTimestamp;

    if (diff > 45000) {
        console.warn("⚠️ [Tomy] Le chat TikTok semble bloqué (aucun message reçu depuis 45s). Actualisation automatique de la page...");
        chrome.runtime.sendMessage({ action: "preparerReload" }, () => {
            location.reload(); 
        });
        return;
    }

    const input = document.querySelector('[data-e2e="room-chat-input-field"]'); 
    const sendBtn = document.querySelector('[data-e2e="room-chat-send-btn"]');

    if (configor.messageAuto.length > 0 && configor.messageAuto[0] !== "") {
        let commentaire = configor.messageAuto[0];
        if (configor.messageAuto.length > 1) {
            commentaire = configor.messageAuto[randomIntFromInterval(0, configor.messageAuto.length - 1)];
        }
        
        if (input && sendBtn) {
            input.focus();
            document.execCommand('insertText', false, commentaire);

            if (input.textContent !== commentaire) {
                input.textContent = commentaire;
                input.dispatchEvent(new InputEvent('input', { bubbles: true, inputType: 'insertText', data: commentaire }));
            }

            setTimeout(() => {
                sendBtn.removeAttribute('disabled');
                sendBtn.click();
                console.log("[Tomy] Commentaire envoyé : " + commentaire);
                console.log("[Tomy] Mutes : " + mutednbr + " -- Blocks : " + blockednbr);
            }, 400);
        }
    }
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

function auChargementFenetre(event) {
    const nouvelleFenetre = event.target.defaultView; 
    const verifAffichage = setInterval(() => {
        if (!nouvelleFenetre || !nouvelleFenetre.document) return;
        const alpha = nouvelleFenetre.document.querySelectorAll('#app li');
        if (alpha && alpha.length > 0) {
            clearInterval(verifAffichage); 
            const cible = alpha[0];
            cible.click();
            var beta = nouvelleFenetre.document.querySelector('button[role="switch"]');
            if (beta) beta.click();
        }
    }, 100); 
}

function automatiserNouvelleFenetre() {
    const originalOpen = window.open;
    window.open = function(...args) {
        const nouvelleFenetre = originalOpen.apply(this, args);
        if (nouvelleFenetre) {
            nouvelleFenetre.removeEventListener('load', auChargementFenetre);
            nouvelleFenetre.addEventListener('load', auChargementFenetre);
        }
        return nouvelleFenetre;
    };
}

async function disableAllComments() {
    try {
        automatiserNouvelleFenetre();
        const toggleBtn = document.querySelector('[data-e2e="live-chat-container"]');
        if (!toggleBtn) return;
        var lav_a = toggleBtn.children;
        var lav_b = lav_a[1].children;
        var lav_c = lav_b[0].children;
        lav_c[1].click();

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

        if (toggleBtnB) toggleBtnB.click();
    } catch(e) {}
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
            commentNode.dataset.modere = "true";

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

                if ((dangerLevel > 1 && dangerLevel < 4 && muteLiveBtn && !configor.acceptInsult) || dangerLevel === 4) {
                    muteLiveBtn.click();
                    mutednbr++;
                }
                if (dangerLevel === 4 && blockBtn) {
                    await new Promise(r => setTimeout(r, 80));
                    blockBtn.click();
                    blockednbr++;
                }

                if (configor.removeAfter) {
                    commentNode.remove();
                } else {
                    commentNode.style.background = dangerLevel === 4 ? 'crimson' : 'gold';
                }
            }
        }
    } catch (error) {
        // En cas d'erreur de popover, on ignore silencieusement pour ne pas bloquer la file
    } finally {
        // Cadencement stable entre chaque action de modération (50ms) pour absorber les gros volumes
        setTimeout(executerFileModeration, 50);
    }
}

// ==========================================
// 6. BOUCLE DE SURVEILLANCE
// ==========================================
function demarrerSurveillance() {
    if (livedone) return;

    const termino = document.querySelector('[data-e2e="live-content-container"] .H2-Medium');
    if (termino && termino.textContent === 'Le LIVE est terminé') {
        chrome.runtime.sendMessage({ action: "eteindreAutomatiquement" });
        arreterModoComplet();
        console.log("[Tomy] 🛑 Live terminé. Mutes: " + mutednbr + " | Blocks: " + blockednbr);
        return;
    }

    const commentaires = document.querySelectorAll('div[data-e2e="chat-message"]:not([data-mod-checked="true"])');
    
    if (commentaires && commentaires.length > 0) {
        let compteDangereux = 0;

        commentaires.forEach(node => {
            dernierCommentaireTimestamp = Date.now();
            node.setAttribute('data-mod-checked', 'true');

            try {
                var sonfils_1 = node.getElementsByTagName('div');
                if (sonfils_1 && sonfils_1[2]) {
                    var sonfils_2 = sonfils_1[2].getElementsByTagName('div');
                    if (sonfils_2 && sonfils_2[3]) {
                        const contenu = sonfils_2[3].textContent;
                        const danger = getDangerLevel(contenu);

                        if (danger == 2 || danger == 3) {
                            console.log('[Tomy] mute com: ' + contenu);
                        }
                        if (danger == 4) {
                            console.log('[Tomy] mute+BLOCK com: ' + contenu);
                        }

                        if (danger > 3) {
                            compteDangereux++;
                        }

                        if (danger < 2) {
                            // Couleur greenyellow garantie pour les commentaires propres
                            node.style.background = 'greenyellow';
                            if (configor.removeAfter) {
                                setTimeout(() => {
                                    if (node && node.parentNode) node.remove();
                                }, 200);
                            }
                        } else {
                            // Message toxique ou spam détecté : envoi dans la file d'attente asynchrone
                            node.style.background = danger === 4 ? 'crimson' : 'gold';

                            if (moderationQueue.length >= MAX_QUEUE_SIZE) {
                                moderationQueue.shift(); // Écarter le plus ancien si la file sature lors d'un pic extrême
                            }

                            moderationQueue.push({ node, danger });

                            if (!isProcessingQueue) {
                                executerFileModeration();
                            }
                        }
                    }
                }
            } catch(err) {}
        });

        // Sécurité anti-raid massif
        if (compteDangereux >= configor.seuilSpamDangereux) {
            disableAllComments();
            console.warn(`[Tomy] ⚠️ Raid massif détecté : ${compteDangereux} spams simultanés.`);
        }
    }

    if (!livedone) {
        surveillanceTimeout = setTimeout(demarrerSurveillance, 200); // Cadence rapide à 200ms
    }
}

function arreterModoComplet() {
    clearInterval(interval_1);
    clearInterval(interval_2);
    clearTimeout(surveillanceTimeout);
    livedone = true;
    moderationQueue = [];
    isProcessingQueue = false;
}

console.warn("[Tomy] 🛡️ Modérateur TikTok anti-trolls prêt avec file d'attente optimisée !");