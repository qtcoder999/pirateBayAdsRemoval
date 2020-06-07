// ==UserScript==
// @name         IMDB ad remover
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.imdb.com/*
// @grant        none
// ==/UserScript==

(function() {
    "use strict";

    const advertisementSelectors = [
        "#top_ad_wrapper",
        ".native-ad-promoted-provider",
        "#top_rhs_wrapper"
    ];

    const remove = selector => {
        selector &&
            selector.map(singleSelection => {
            const selection = document.querySelector(singleSelection);
            if (selection) {
                document.querySelector(singleSelection).remove();
                console.log("Ads removed");
            }
        });
    };

    const main = () => {
        window.addEventListener('load', function () {
            remove(advertisementSelectors);
        })
    };
    main();
})();
