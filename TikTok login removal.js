// ==UserScript==
// @name     Remove TikTok Login
// @version  1
// @grant    none
// @include  https://www.tiktok.com/*
// ==/UserScript==

window.addEventListener('load', function() {
    let loginModal = document.querySelector('.css-py8jux-DivModalContainer');
    if (loginModal) {
        loginModal.remove();
    }
}, false);
