// ==UserScript==
// @name        Plex it
// @namespace   Smart Manoj Scripts
// @match       *://*/*
// @grant       none
// @version     1.0
// @author      Smart Manoj
// @description Adds a shortcut (Alt + A) to search in Perplexity in a search page.
// ==/UserScript==

(function() {
  // Wait for the DOM to be fully loaded
  window.addEventListener('load', function() {

    // Function to handle the button click
    function handleButtonClick() {
      const urlParams = new URLSearchParams(window.location.search);
      const query = urlParams.get('q');
      if (query) {
        const url = `https://www.perplexity.ai/?q=${encodeURIComponent(query)}`;
        window.open(url, '_self');
      } else {
        alert('No search query found.');
      }
    }

    // Add keyboard shortcut for Alt+A
    document.addEventListener('keydown', function(event) {
      if (event.altKey && event.key === 'a') {
        handleButtonClick();
      }
    });
  });
})();
