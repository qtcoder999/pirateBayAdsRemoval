// ==UserScript==
// @name         Pirate Live Ad Removal
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Paras Anand
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
  "use strict";

  // Your code here...

  const remove = selector => {
    selector &&
      selector.map(singleSelection => {
        const selection = document.querySelector(singleSelection);
        if (selection) {
          document.querySelector(singleSelection).remove();
          console.log("Ad removed");
        }
      });
  };

  const removeAds = () => {
    const selectorsForRemoval = [
      ".vpn-banner-table",
      "#nord-stiky",
      "#nord-message"
    ];
    remove(selectorsForRemoval);
  };

  const main = () => {
    setInterval(removeAds, 1000);
  };
  main();
})();
