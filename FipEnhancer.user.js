// ==UserScript==
// @name        fip enhancer
// @namespace   github.com/fonfano
// @match       https://www.radiofrance.fr/*
// @grant       none
// @version     0.4.1
// @author      Lt Ripley
// @description 07/01/2022, 11:33:14
// ==/UserScript==

// Remove uggly play buttons

// Historique
// 05/05/2022   0.4.1  Correction : Adaptation aux nouveaux nom des boutons
// 05/04/2022   0.4    Upgrade  Pour nouveau site FIP
// 05/02/2022   0.3    Upgrade  Remove all uggly play buttons
// 25/01/2022   0.2    Upgrade  Remove uggly play button on art
// 07/01/2022   0.1    Création


setTimeout(() => {     
         
  document.querySelector("body > div:nth-child(3) > main > section.Home-webradios.g-block-margin.svelte-19wlv8z.dark.isImmersive > div > div > div > div > div.Carousel-container.svelte-qnall9 > div > div:nth-child(1) > div > div > div > div.CardWebRadio-playButton.svelte-msxzte").style.display = "none";
  document.querySelector("body > div:nth-child(3) > main > section.Home-webradios.g-block-margin.svelte-19wlv8z.dark.isImmersive > div > div > div > div > div.Carousel-container.svelte-qnall9 > div > div:nth-child(2) > div > div > div > div.CardWebRadio-playButton.svelte-msxzte").style.display = "none";
  document.querySelector("body > div:nth-child(3) > main > section.Home-webradios.g-block-margin.svelte-19wlv8z.dark.isImmersive > div > div > div > div > div.Carousel-container.svelte-qnall9 > div > div:nth-child(3) > div > div > div > div.CardWebRadio-playButton.svelte-msxzte").style.display = "none";
  document.querySelector("body > div:nth-child(3) > main > section.Home-webradios.g-block-margin.svelte-19wlv8z.dark.isImmersive > div > div > div > div > div.Carousel-container.svelte-qnall9 > div > div:nth-child(4) > div > div > div > div.CardWebRadio-playButton.svelte-msxzte").style.display = "none";
  document.querySelector("body > div:nth-child(3) > main > section.Home-webradios.g-block-margin.svelte-19wlv8z.dark.isImmersive > div > div > div > div > div.Carousel-container.svelte-qnall9 > div > div:nth-child(5) > div > div > div > div.CardWebRadio-playButton.svelte-msxzte").style.display = "none";
  document.querySelector("body > div:nth-child(3) > main > section.Home-webradios.g-block-margin.svelte-19wlv8z.dark.isImmersive > div > div > div > div > div.Carousel-container.svelte-qnall9 > div > div:nth-child(6) > div > div > div > div.CardWebRadio-playButton.svelte-msxzte").style.display = "none";
  document.querySelector("body > div:nth-child(3) > main > section.Home-webradios.g-block-margin.svelte-19wlv8z.dark.isImmersive > div > div > div > div > div.Carousel-container.svelte-qnall9 > div > div:nth-child(7) > div > div > div > div.CardWebRadio-playButton.svelte-msxzte").style.display = "none";
  document.querySelector("body > div:nth-child(3) > main > section.Home-webradios.g-block-margin.svelte-19wlv8z.dark.isImmersive > div > div > div > div > div.Carousel-container.svelte-qnall9 > div > div:nth-child(8) > div > div > div > div.CardWebRadio-playButton.svelte-msxzte").style.display = "none";
  
}, 1000);
