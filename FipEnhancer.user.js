// ==UserScript==
// @name        fip enhancer
// @namespace   github.com/fonfano
// @match       https://www.radiofrance.fr/*
// @grant       none
// @version     0.5
// @author      Lt Ripley
// @description 07/01/2022, 11:33:14
// ==/UserScript==

// Remove uggly play buttons, raise lower FIP radios sections

// Historique
// 07/06/2022   0.5     Upgrade :  Raise lower FIP Radios sections
// 05/05/2022   0.4.1   Fix : For new buttons name
// 05/04/2022   0.4     Upgrade :  For new fip site (including URL)
// 05/02/2022   0.3     Upgrade :  Remove all uggly play buttons
// 25/01/2022   0.2     Upgrade :  Remove uggly play button on art
// 07/01/2022   0.1     Creation


// Options
let delay = 1500;              // Time (in MS) before the script runs (wait the page to be fully loaded).  Increase if necessary.
let raiseFipSections = true;   // Raise a little bit the lower FIP radios sections, to be able to read the text, especialy in case of MS Windows 125% display scale
let height = "480px";          // Height (decrease to raise) 
// End of options


setTimeout(() => {     
     
  document.querySelector("body > div:nth-child(3) > main > section.Home-webradios.g-block-margin.svelte-19wlv8z.dark.isImmersive > div > div > div > div > div.Carousel-container.svelte-qnall9 > div > div:nth-child(1) > div > div > div > div.CardWebRadio-playButton.svelte-msxzte").style.display = "none";
  document.querySelector("body > div:nth-child(3) > main > section.Home-webradios.g-block-margin.svelte-19wlv8z.dark.isImmersive > div > div > div > div > div.Carousel-container.svelte-qnall9 > div > div:nth-child(2) > div > div > div > div.CardWebRadio-playButton.svelte-msxzte").style.display = "none";
  document.querySelector("body > div:nth-child(3) > main > section.Home-webradios.g-block-margin.svelte-19wlv8z.dark.isImmersive > div > div > div > div > div.Carousel-container.svelte-qnall9 > div > div:nth-child(3) > div > div > div > div.CardWebRadio-playButton.svelte-msxzte").style.display = "none";
  document.querySelector("body > div:nth-child(3) > main > section.Home-webradios.g-block-margin.svelte-19wlv8z.dark.isImmersive > div > div > div > div > div.Carousel-container.svelte-qnall9 > div > div:nth-child(4) > div > div > div > div.CardWebRadio-playButton.svelte-msxzte").style.display = "none";
  document.querySelector("body > div:nth-child(3) > main > section.Home-webradios.g-block-margin.svelte-19wlv8z.dark.isImmersive > div > div > div > div > div.Carousel-container.svelte-qnall9 > div > div:nth-child(5) > div > div > div > div.CardWebRadio-playButton.svelte-msxzte").style.display = "none";
  document.querySelector("body > div:nth-child(3) > main > section.Home-webradios.g-block-margin.svelte-19wlv8z.dark.isImmersive > div > div > div > div > div.Carousel-container.svelte-qnall9 > div > div:nth-child(6) > div > div > div > div.CardWebRadio-playButton.svelte-msxzte").style.display = "none";
  document.querySelector("body > div:nth-child(3) > main > section.Home-webradios.g-block-margin.svelte-19wlv8z.dark.isImmersive > div > div > div > div > div.Carousel-container.svelte-qnall9 > div > div:nth-child(7) > div > div > div > div.CardWebRadio-playButton.svelte-msxzte").style.display = "none";
  document.querySelector("body > div:nth-child(3) > main > section.Home-webradios.g-block-margin.svelte-19wlv8z.dark.isImmersive > div > div > div > div > div.Carousel-container.svelte-qnall9 > div > div:nth-child(8) > div > div > div > div.CardWebRadio-playButton.svelte-msxzte").style.display = "none";
  
  if (raiseFipSections)  { document.querySelector("body > div:nth-child(3) > main > section.Home-coverRadio").style.maxHeight = height; 
  }             
  
}, delay);
