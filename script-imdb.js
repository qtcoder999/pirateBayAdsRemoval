// ==UserScript==
// @name         Imdb ad removal
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.imdb.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
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
      "#top_ad_wrapper",
        ".native-ad-promoted-provider",
        "#sidebar > div:nth-child(7)"
    ];
    remove(selectorsForRemoval);
  };

  const main = () => {
    setInterval(removeAds, 1000);
  };
  main();
    // Your code here...
})();
