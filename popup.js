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
                nbrRepeat: Number(nbrRepeat.value) || 25,
                timeReapeat: Number(timeReapeat.value) || 10,
                messageAutoChaque: Number(messageAutoChaque.value) || 30,
                seuilSpamDangereux: Number(seuilSpamDangereux.value) || 10,
                messageAuto: messageAuto.value || "🎉كبسو 👉🏻بارطاجيو➡️دعمو البث",
                motsNiveau1: motsNiveau1.value || "",
                acceptInsult: Number(acceptInsult.value) || 1,
                motsNiveau3: motsNiveau3.value || "🍓,💀,☠,🐷,👽,🖕,nik,nyk,nic,نيك,qhab,qhaab,qahab,khab,kahab,k7ab,ka7ab,q7ab,q7aab,qa7ab,qahba,qahaba,kahaba,qa7ba,qa7aba,قحاب,قحبة,rkhis,rakhis,rkhas,rakhas,رخيس,رخاس,hachon,hatchon,7achon,7atchon,hachoun,hatchoun,7achoun,7atchoun,hachun,hatchun,7achun,7atchun,حشون,حتشون,طبون,sowa,sowwa,سوة,souwa,3ahir,عاهر,106,tizmok,tizmoc,tizmek,tizmak,tizmmok,tizmmoc,tizmmek,tizmmak,طزمك,طيزمك,zab,زبي,tramtak,tremtak,tremtek,tramtek,ترمتك,tarma,terma,ترمة,طيزامك,thakhna,thakhena,takhna,takhena,abouch,aboch,nbol,nboul,نبول,رنديلة,vetto,naqch,nakch,nkocha,nkucha,nqocha,nqucha,nqoucha,nkoucha,نقش,نقوشة,gwina,guina,قوينة,atay,attay,3atay,3attay,عطاي,makkak,makkac,makac,مكاك,zeb,kalb,klab,kelb,kleb,kalba,kaleba,hmar,hmara,كلب,كلاب,حمار,makak,zbi,aqjoun,aqjun,a9joun,a9jun,akjoun,akjun,aghyoul,aghyol,na3na,na3lat,رونديلة,harki,7arki,harka,7arka,حركي,حركة,جمال بنسماعيل,جمال بن سماعيل,بغل,pute,شوهاظة,شوهاظا,عتروس,فراولة,فيلاج اللفت,بوزعيتر,بوسبير,bghel,بغال,vitto,كرغولي,كراغلة,سنغولي,سناغلة,bghal,bighal,beghal,beghla,baghla,baghla,sewa,nadrabh,nadrebh,nedrabh,nedrebh,نضربه,نظربه,فراقش,بقر,لقيط,لقطاء,sewwa,nadhrabh,nadhrebh,nedhrabh,nedhrebh,rondila,rendila,rondela,rendela,khtok,kahba,khtak,ختك,يماك,باباك,wlid,wlad,وليد,ولاد,ولاد القاف,حرق,, نفرغه,قود,signalez,سينيالو,راهو لايف,راهي لايف,putasse,بيتاس,puta,suka,suck,ass,dick,cock,مثقوبة,مقعورة,ثقبة,قعرة,نمي,nami,nemi,nammi,nemmi,ahtit,a7tit,أحطيط,احطيط,تيكعولت,ثيكعولت,fuck,bitch,joder,حل لايف,حلت لايف,زايلة,مقران,مقحب,صهيوني,صهاينة,sioniste,zioniste,sionniste,zionniste,thoqba,thouqba,thou9ba,شرموط,شراميط,marochien,stkhnk,زب,سوّة,سوتمك,سوّتمك,9lawi,qlawi,qlwi,9elwa,qelwa,qlwa,terma,termet,termat,trmtymk,trmtk,طرمة,طيز,ذبيح,أشلاء,اشلاء,تعطي,زّب,dba7,dbe7,dbah,dbeh,dhba7,dhbe7,dhbah,dhbeh"
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