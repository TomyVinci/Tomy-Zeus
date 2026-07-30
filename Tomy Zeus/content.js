// ==========================================
// Developed By: @Tomy_seus
// With the help of @new_world_order_agency
// ==========================================
// ==========================================
// 1. CONFIGURATION DES MOTS DANGEREUX
// ==========================================

// Commentaire automatique chaque 30 secondes, vous pouvez modifier le temps en secondes
// Pas moins de 20 secondes
let messageAutoChaque = 30;
/*
    Nombre de commentaires répétés dans un nombre de secondes, les paramètres ci-dessous
    par exemple 25 commentaires identiques en 10 secondes, ils seront muté
    1, 2, 3, up ne sont pas pris en compte
*/
let nbrRepeat = 25;// Nombre de commentaires identiques autorisé en "timeReapeat"
let timeReapeat = 10;// Nombre de secondes d'analyse de commentaires identiques
const configor = {
    // Si ( acceptInsult: true ) alors le systeme ne regarde pas le tableau ( motsNiveau3 )
    acceptInsult: false, 
    // Nombre de commentaires en chinois pour désactiver les commentaires
    seuilSpamDangereux: 10, 
    // Le ou les commentaires automatique à publier
// Maria
    //messageAuto: ["🎉كبسو 👉🏻بارطاجيو➡️دعمو البث", "X: 13september13", "Ytb: MariaMoori"], 
// Mirou
    //messageAuto: ["🎉كبسو 👉🏻بارطاجيو➡️دعمو البث", "Ytb: Mirou_Ath"], 
// Emma
    //messageAuto: ["🎉كبسو 👉🏻بارطاجيو➡️دعمو البث", "X: ftari272", "Ytb: anni8275"], 
// Chawki
    //messageAuto: ["🎉كبسو 👉🏻بارطاجيو➡️دعمو البث", "X: ChawkiBenzehra", "Ytb: ChawkiBenzehra", "Insta: chawki_benzehra"], 
// Comment only
    //messageAuto: ["🎉كبسو 👉🏻بارطاجيو➡️دعمو البث"], 
// vide - security
    messageAuto: [""], 
    removeAfter: false, // si true, chaque commentaire vérifié sera supprimé dans le PC (mais pas sur TIKTOK)
    // mots dangereux à ne pas toucher (mute)
    motsNiveau2: [
        "𒌧𒈙𒈙ဪဪV𒀱𒈓𒈙꧅", "﷽𒈙ဪဪV𒀱𒈓𒈙꧅𒈙𒈙ဪzဪ𒈙𒈙𒈙﷽ဪ♗ဪ", 
        "𒈙ဪဪ", "﷽", "﷽𒅌꧅꧅𒈙𒈙ဪဪ", "💣", "💊", "💥", "☣", "☢", "🗡", "⚔", "☠", 
        "pédophile", "pedophile", "pédofile", "pedofile", "pédophil", "pedophil", "pédofil", "pedofil", "مخدرات",
        "térroriste", "téroriste", "terroriste", "teroriste", "térrorist", "térorist", "terrorist", "terorist",
        "௵", "꧄", "බොහෝ අය", "viol", "viole", "إرهاب", "إغتصاب", "ارهاب", "اغتصاب", "تعذيب", "زواف", 
        'انسخ', "إنسخ", "اخرب", "خرب", "عنف", "شرطة", "bengo3ra", "ben go3ra", "بنقعرة", "بن قعرة", 
        "قنبلة", "تفجير", "ذبح", "porn", "porno", "pornographie", "pornography", "إغتصب", "اغتصب", 
        "egorger", "égorger"
    ], 
    // mots si le systeme les trouve il mute (tant que acceptInsult = false)
    motsNiveau3: [
        "🍓", "💀", "☠", "🐷", "👽", "🖕", "nik", "nyk", "nic", "نيك", 
        "qhab", "qhaab", "qahab", "khab", "kahab", "k7ab", "ka7ab", "q7ab", "q7aab", "qa7ab", "qahba", "qahaba", 
        "kahaba", "qa7ba", "qa7aba", "قحاب", "قحبة", "rkhis", "rakhis", "rkhas", "rakhas", "رخيس", "رخاس", 
        "hachon", "hatchon", "7achon", "7atchon", "hachoun", "hatchoun", "7achoun", "7atchoun", "hachun", "hatchun", 
        "7achun", "7atchun", "حشون", "حتشون", "طبون", "sowa", "sowwa", "سوة", "souwa", "3ahir", "عاهر", "106", 
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
        "khtak", "ختك", "يماك", "باباك", "wlid", "wlad", "وليد", "ولاد", "ولاد القاف", "حرق", , "نفرغه", "قود", 
        "signalez", "سينيالو", "راهو لايف", "راهي لايف", "putasse", "بيتاس", "puta", "suka", "suck", "ass", 
        "dick", "cock", "مثقوبة", "مقعورة", "ثقبة", "قعرة", "نمي", "nami", "nemi", "nammi", "nemmi", "ahtit", 
        "a7tit", "أحطيط", "احطيط", "تيكعولت", "ثيكعولت", "fuck", "bitch", "joder", "حل لايف", "حلت لايف", 
        "زايلة", "مقران", "مقحب", "صهيوني", "صهاينة", "sioniste", "zioniste", "sionniste", "zionniste", "thoqba", 
        "thouqba", "thou9ba", "شرموط", "شراميط", "marochien", "stkhnk", "زب", "سوّة", "سوتمك", "سوّتمك", 
        "9lawi", "qlawi", "qlwi", "9elwa", "qelwa", "qlwa", "terma", "termet", "termat", "trmtymk", "trmtk",
        "طرمة", "طيز", "ذبيح", "أشلاء", "اشلاء", "تعطي", "زّب", "dba7", "dbe7", "dbah", "dbeh", "dhba7", "dhbe7", 
        "dhbah", "dhbeh"
    ], 
    // mots si le systeme les trouve il BLOCK
    motsNiveau1: ["فداج", "feddaj", "feddadj", "faddaj", "faddadj"]
};
 
      


// ==========================================
// 2. SUIVI DES RÉPÉTITIONS (SPAM TEXTE)
// ==========================================
// ########################################################################################################
// #########################################################################################
// ##########################################################################

//              ICI VERS LE BAS, A NE RIEN TOUCHER
//              DOWN HERE, DO NOT TOUCH ANYTHING

// ##########################################################################
// #########################################################################################
// ########################################################################################################
let interval_1 = null;
let interval_2 = null;
let surveillanceTimeout = null;
let isModoActive = false;
let mutednbr = 0, blockednbr = 0, livedone = false; 
let dernierCommentaireTimestamp = Date.now();
const trackerCompteurSpam = new Map();

chrome.runtime.sendMessage({ action: "verifierEtat" }, (response) => {
    if (response && response.status) {
        console.warn("🔄 [Tomy] Reprise automatique après le rechargement anti-freeze !");
        isModoActive = true;
        demarrerSurveillance();
        interval_2 = setInterval(postAutomatedComment, messageAutoChaque*1000);
        interval_1 = setInterval(() => {trackerCompteurSpam.clear()}, timeReapeat*1000);
    }
});
// Écoute les ordres venant de l'icône de l'extension
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "toggle") {
        isModoActive = request.status;

        if (isModoActive) {
            console.warn("🛡️ [Tomy] Modérateur ACTIVÉ par l'utilisateur.");
            demarrerSurveillance();
            interval_2 = setInterval(postAutomatedComment, messageAutoChaque*1000);
            
            // Nettoyage spam global
            var interval_1 = setInterval(() => {trackerCompteurSpam.clear();}, timeReapeat*1000);
        } else {
            console.warn("🛑 [Tomy] Modérateur ARRÊTÉ par l'utilisateur.");
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
            return 2;
        }
    }

    if (configor.motsNiveau2.some(mot => textLower.includes(mot))) return 2;
    if (configor.motsNiveau3.some(mot => textLower.includes(mot))) return 3;
    if (configor.motsNiveau1.some(mot => textLower.includes(mot))) return 4;
    return 0; 
}

// ==========================================
// 4. ACTIONS ET UTILITAIRES (Gestion Nouvelle Fenêtre TikTok)
// ==========================================

function randomIntFromInterval(min, max) {return Math.floor(Math.random() * (max - min + 1) + min);}
function postAutomatedComment() {
    var actualCommentaireTimestamp=Date.now();
    var diff=actualCommentaireTimestamp-dernierCommentaireTimestamp;

    if (diff > 45000) {
        console.warn("⚠️ [Tomy] Le chat TikTok semble bloqué (aucun message reçu depuis 45s). Actualisation automatique de la page...");
        // On prévient l'extension de se rallumer toute seule après le reload
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
            // 1. Focaliser l'élément de chat
            input.focus();

            // 2. Utilisation de l'API moderne d'insertion si disponible, ou simulation React
            document.execCommand('insertText', false, commentaire);

            // Si execCommand est bloqué, on force l'écriture avec l'événement de saisie React
            if (input.textContent !== commentaire) {
                input.textContent = commentaire;
                input.dispatchEvent(new InputEvent('input', { bubbles: true, inputType: 'insertText', data: commentaire }));
            }

            // 3. Petit délai humain avant de cliquer sur le bouton d'envoi
            setTimeout(() => {
                sendBtn.removeAttribute('disabled');
                sendBtn.click();
                console.log("[Tomy] Commentaire envoyé : " + commentaire);
                console.log("[Tomy] Mutes : " + mutednbr + " -- Blocks : " + blockednbr);
            }, 400);
        }
    }
}

function attenteElementStable(timeoutMax = 3000) {
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
        }, 50);
    });
}

// --- Tes fonctions pour gérer la nouvelle fenêtre de configuration TikTok ---
function auChargementFenetre(event) {
    const nouvelleFenetre = event.target.defaultView; 
    console.log("[Tomy] La fenêtre est chargée !");
    
    const verifAffichage = setInterval(() => {
        if (!nouvelleFenetre || !nouvelleFenetre.document) return;

        const alpha = nouvelleFenetre.document.querySelectorAll('#app li');
        
        if (alpha && alpha.length > 0) {
            clearInterval(verifAffichage); 
            console.log("[Tomy] Élément trouvé ! Tentative de clic...");

            const cible = alpha[0];
            cible.click();

            const evenementClic = new nouvelleFenetre.PointerEvent('click', {
                bubbles: true,
                cancelable: true,
                view: nouvelleFenetre
            });
            cible.dispatchEvent(evenementClic);
            console.log("[Tomy] Clic effectué.");

            var beta = nouvelleFenetre.document.querySelector('button[role="switch"]');
            if (beta) {
                beta.click();
                const evenementClico = new nouvelleFenetre.PointerEvent('click', {
                    bubbles: true,
                    cancelable: true,
                    view: nouvelleFenetre
                });
                beta.dispatchEvent(evenementClico);
                console.log("[Tomy] Switch effectué.");
            }
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
            }, 50);
        });

        if (toggleBtnB) {
            toggleBtnB.click();
            console.log("[Tomy] 🔒 Demande d'ouverture de configuration globale lancée.");
        }
    } catch(e) {
        console.warn("[Tomy] Erreur désactivation globale :", e);
    }
}

let removingNow = false;
async function applySanction(commentNode, dangerLevel) {
    const moreBtn = commentNode.querySelector('.moreActionButton, [data-e2e*="more"], button');
    if (!moreBtn) {
        removingNow = false;
        return;
    }

    moreBtn.click();

    try {
        await attenteElementStable(2000);
        await new Promise(r => setTimeout(r, 100));

        const menuItems = document.querySelectorAll('div[role="dialog"] div, [data-testid*="menu"] div, .tux-menu-item');
        let muteLiveBtn = null;
        let blockBtn = null;

        menuItems.forEach(item => {
            const txt = item.textContent.trim().toLowerCase();
            if (txt.includes('mettre en sourdine - live entier') || txt.includes('mute entire live') || txt.includes('sourdine')) {
                muteLiveBtn = item;
            }
            if (txt.includes('bloquer') || txt.includes('block')) {
                blockBtn = item;
            }
        });

        if ((dangerLevel > 1 && dangerLevel < 4 && muteLiveBtn && !configor.acceptInsult) || dangerLevel === 4) {
            muteLiveBtn.click();
            mutednbr++;
        }
        if (dangerLevel === 4 && blockBtn) {
            await new Promise(r => setTimeout(r, 150));
            blockBtn.click();
            blockednbr++;
        }

        if (configor.removeAfter) {
            commentNode.remove();
        } else {
            if (dangerLevel === 4) commentNode.style.background = 'crimson';
                else commentNode.style.background = 'gold';
        }

        if (!muteLiveBtn && !blockBtn) console.error("[Tomy] T'as pas le modo dans ce live 😅😅! ça peut être un commentaire interdit par un modérateur");
    } catch (error) {
        console.warn("[Tomy] Impossible d'interagir avec le menu du commentaire :", error);
        console.warn("[Tomy] Vous n'avez peut être pas le modérateur");
    } finally {
        removingNow = false;
    }
}

// ==========================================
// 5. BOUCLE DE SURVEILLANCE RÉCURSIVE (ANTI-SATURATION)
// ==========================================
function demarrerSurveillance() {
    const termino = document.querySelector('[data-e2e="live-content-container"] .H2-Medium');
    if (termino && termino.textContent === 'Le LIVE est terminé') {
        chrome.runtime.sendMessage({ action: "eteindreAutomatiquement" });
        arreterModoComplet();
        livedone = true;
        console.log("[Tomy] 🛑 Live terminé, tous les scripts de modération ont été arrêtés proprement.");
        console.log("[Tomy] Le nombre de personnes mutées au total est: "+mutednbr);
        console.log("[Tomy] Le nombre de personnes bloquées au total est: "+blockednbr);
        return;
    }

    if (!removingNow) {
        const commentaires = document.querySelectorAll('div[data-e2e="chat-message"]:not([data-mod-checked="true"])');
        
        if (commentaires && commentaires.length > 0) {
            let compteDangereux = 0;
            const commentairesTraites = [];

            commentaires.forEach(node => {
                dernierCommentaireTimestamp = Date.now();
                try {
                    var sonfils_1 = node.getElementsByTagName('div');
                    if (sonfils_1 && sonfils_1[2]) {
                        var sonfils_2 = sonfils_1[2].getElementsByTagName('div');
                        if (sonfils_2 && sonfils_2[3]) {
                            const contenu = sonfils_2[3].textContent;
                            const danger = getDangerLevel(contenu);

                            if (danger == 2 || danger == 3) console.log('[Tomy] mute com: '+contenu);
                            if (danger == 4) console.log('[Tomy] mute+BLOCK com: '+contenu);

                            commentairesTraites.push({ node, danger });
                            if (danger > 3) compteDangereux++;
                        }
                    }
                } catch(err) {}
            });

            if (compteDangereux >= configor.seuilSpamDangereux) {
                disableAllComments();
                console.warn(`[Tomy] ⚠️ Raid massif détecté : ${compteDangereux} spams simultanés.`);
            } else {
                for (let item of commentairesTraites) {
                    item.node.setAttribute('data-mod-checked', 'true');

                    if (item.danger < 2) {
                        if (configor.removeAfter) {
                            item.node.style.background = 'slategrey';
                            setTimeout(() => {
                                if (item.node && item.node.parentNode) item.node.remove();
                            }, 300);
                        } else {
                            item.node.style.background = 'slategrey';
                        }
                    } else {
                        removingNow = true;
                        if (item.danger == 4) item.node.style.background = 'crimson';
                            else item.node.style.background = 'gold';
                        item.node.style.background = 'gold';
                        applySanction(item.node, item.danger);
                        break; 
                    }
                }
            }
        }
    } else {
        console.warn("[Tomy] ⚠️ Déblocage forcé du verrou de sécurité.");
        removingNow = false;
    }

    if (!livedone) {setTimeout(demarrerSurveillance, 500);}
}

function arreterModoComplet() {
    clearInterval(interval_1);
    clearInterval(interval_2);
    clearTimeout(surveillanceTimeout);
    livedone = true; // Force l'arrêt des boucles internes
    console.log("🛑 Tous les scripts de modération ont été stoppés.");
}
console.warn("[Tomy] 🛡️ Modérateur TikTok anti-trolls Tomy_zeus❤️ with help of Dajal !");