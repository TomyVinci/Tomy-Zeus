(() => {
    console.log(
        "[Tomy MAIN] ✅ main.js chargé dans le MAIN world."
    );

    let desactivationEnCours = false;
    let commentairesDesactives = false;

    const originalOpen = window.open;

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
                            new Error(
                                "La fenêtre a été fermée."
                            )
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

                    if (
                        Date.now() - debut >
                        timeoutMax
                    ) {
                        clearInterval(interval);

                        reject(
                            new Error(
                                `Élément introuvable : ${selecteur}`
                            )
                        );
                    }

                } catch (error) {

                    if (
                        Date.now() - debut >
                        timeoutMax
                    ) {
                        clearInterval(interval);

                        reject(error);
                    }
                }

            }, 100);
        });
    }


    async function desactiverCommentaires(
        nouvelleFenetre
    ) {
        if (desactivationEnCours) {
            console.log(
                "[Tomy MAIN] ⏸️ Désactivation déjà en cours."
            );

            return;
        }

        if (commentairesDesactives) {
            console.log(
                "[Tomy MAIN] ✅ Commentaires déjà désactivés."
            );

            return;
        }

        desactivationEnCours = true;

        try {
            console.log(
                "[Tomy MAIN] 🪟 Fenêtre de modération chargée."
            );


            /*
             * Étape 1 :
             * attendre la première option de configuration.
             */

            const cible =
                await attendreDansFenetre(
                    nouvelleFenetre,
                    "#app li",
                    10000
                );


            console.log(
                "[Tomy MAIN] ✅ Première option trouvée."
            );


            cible.click();


            console.log(
                "[Tomy MAIN] 🖱️ Première option de configuration cliquée."
            );


            /*
             * Étape 2 :
             * attendre le switch.
             */

            const switchCommentaires =
                await attendreDansFenetre(
                    nouvelleFenetre,
                    'button[role="switch"]',
                    5000
                );


            const etatAvant =
                switchCommentaires.getAttribute(
                    "aria-checked"
                );


            console.log(
                "[Tomy MAIN] État du switch avant action :",
                etatAvant
            );


            /*
             * Si false :
             * les commentaires sont déjà désactivés.
             */

            if (etatAvant === "false") {

                commentairesDesactives = true;

                console.log(
                    "[Tomy MAIN] ✅ Commentaires déjà désactivés. Aucun clic."
                );

                return;
            }


            /*
             * Si true :
             * cliquer pour désactiver.
             */

            if (etatAvant === "true") {

                console.log(
                    "[Tomy MAIN] 🔴 Commentaires activés. Désactivation..."
                );


                switchCommentaires.click();


                /*
                 * Attendre que TikTok mette à jour
                 * aria-checked.
                 */

                await new Promise(
                    resolve =>
                        setTimeout(resolve, 150)
                );


                const etatApres =
                    switchCommentaires.getAttribute(
                        "aria-checked"
                    );


                console.log(
                    "[Tomy MAIN] État du switch après clic :",
                    etatApres
                );


                if (etatApres !== "false") {

                    throw new Error(
                        "Le switch n'est pas passé à false après le clic."
                    );
                }


                commentairesDesactives = true;


                console.log(
                    "[Tomy MAIN] ✅ Commentaires effectivement désactivés."
                );


                return;
            }


            throw new Error(
                `État aria-checked inattendu : ${etatAvant}`
            );

        } catch (error) {

            console.error(
                "[Tomy MAIN] ❌ Impossible de désactiver les commentaires :",
                error
            );

        } finally {

            desactivationEnCours = false;
        }
    }


    function surveillerNouvelleFenetre(
        nouvelleFenetre,
        url
    ) {
        /*
         * On ne s'intéresse qu'à la popup
         * de modération TikTok.
         */

        if (
            !url ||
            !url.includes(
                "/live/popout/"
            ) ||
            !url.includes(
                "/moderator"
            )
        ) {
            console.log(
                "[Tomy MAIN] Popup ignorée :",
                url
            );

            return;
        }


        console.log(
            "[Tomy MAIN] 🚨 Popup de modération détectée."
        );


        const lancer = () => {

            /*
             * Petit délai pour laisser TikTok
             * construire complètement le DOM.
             */

            setTimeout(() => {

                desactiverCommentaires(
                    nouvelleFenetre
                );

            }, 300);
        };


        try {

            /*
             * Si la popup est déjà complètement chargée
             * au moment où window.open retourne,
             * on ne doit pas attendre un load qui est
             * déjà passé.
             */

            if (
                nouvelleFenetre.document.readyState ===
                "complete"
            ) {

                console.log(
                    "[Tomy MAIN] Popup déjà chargée."
                );

                lancer();

            } else {

                console.log(
                    "[Tomy MAIN] ⏳ Attente du chargement de la popup..."
                );


                nouvelleFenetre.addEventListener(
                    "load",
                    lancer,
                    {
                        once: true
                    }
                );
            }

        } catch (error) {

            console.error(
                "[Tomy MAIN] ❌ Impossible d'accéder à la popup :",
                error
            );
        }
    }


    /*
     * INTERCEPTION DE window.open
     *
     * C'est ici que TikTok ouvre la popup.
     */

    window.open = function (...args) {

        console.log(
            "[Tomy MAIN] 🚨 window.open détecté :",
            args
        );


        const nouvelleFenetre =
            originalOpen.apply(
                this,
                args
            );


        console.log(
            "[Tomy MAIN] Résultat window.open :",
            nouvelleFenetre
        );


        if (!nouvelleFenetre) {

            console.error(
                "[Tomy MAIN] ❌ window.open a retourné null."
            );

            return nouvelleFenetre;
        }


        const url =
            args[0] || "";


        surveillerNouvelleFenetre(
            nouvelleFenetre,
            url
        );


        return nouvelleFenetre;
    };

})();