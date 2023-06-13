// ==UserScript==
// @name         Twitter Auto Retweet
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Automatically presses the "Retweet" button on Twitter retweet pages.
// @author       Your Name
// @match        https://twitter.com/intent/retweet?tweet_id=*
// @grant        none
// ==/UserScript==
// ==UserScript==
// @name         Twitter Auto Retweet
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Automatically presses the "Retweet" button on Twitter retweet pages.
// @author       Your Name
// @match        https://twitter.com/*/status/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to click the "Like" button
    function clickLikeButton() {
        const likeButton = document.querySelector('[data-testid="confirmationSheetConfirm"]');
        if (likeButton) {
            likeButton.click();
        } else {
            setTimeout(clickLikeButton, 1000); // Retry after 1 second
        }
    }
    // Function to close the tab
    function closeTab() {
        window.close();
    }

    // Start waiting for the "Like" button
    setTimeout(clickLikeButton, 1000); // Start after 1 second
})();
