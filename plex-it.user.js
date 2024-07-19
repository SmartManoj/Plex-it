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

    // Create a button element
    const button = document.createElement('button');
    button.id = 'plexit-button';
    button.innerText = 'Plex it 🚀';
    button.style.marginLeft = '10px';
    button.style.padding = '10px';
    button.style.backgroundColor = '#4285f4';
    button.style.color = '#fff';
    button.style.border = 'none';
    button.style.borderRadius = '0px 10px 10px 0px';
    button.style.cursor = 'pointer';
    button.type = 'button';

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

    // Add click event to the button
    button.addEventListener('click', handleButtonClick);
  
    // Add keyboard shortcut for Alt+A
    document.addEventListener('keydown', function(event) {
      if (event.altKey && event.key === 'a') {
        handleButtonClick();
      }
    });

    // Append the button next to the search bar
    const searchBarContainer = document.querySelector('#tsf > div:nth-child(1) > div.A8SBwf > div.RNNXgb');
    if (searchBarContainer) {
      searchBarContainer.appendChild(button);
    }

  });
})();
