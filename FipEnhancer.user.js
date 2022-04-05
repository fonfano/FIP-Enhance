// ==UserScript==
// @name        fip enhancer
// @namespace   github.com/fonfano
// @match       https://www.radiofrance.fr/*
// @grant       none
// @version     0.4
// @author      Lt Ripley
// @description 07/01/2022, 11:33:14
// ==/UserScript==

// Remove uggly play buttons

// Historique
// 05/04/2022  0.4  Upgrade  Pour nouveau site FIP
// 05/02/2022  0.3  Upgrade  Remove all uggly play buttons
// 25/01/2022  0.2 	Upgrade  Remove uggly play button on art
// 07/01/2022  0.1 	Création

// OLD
//document.querySelector("#root > div > main > div.home-top > div.on-air-wrapper > div > div > div.view.channel-header").style.display = "none";
//document.querySelector("#root > div > main > div.home-top > div.playingnowlist.home-playingnowlist > h1").style.height = "120px";

setTimeout(() => {     
  
  document.querySelector("body > div:nth-child(3) > main > section.Home-webradios.g-block-margin.svelte-19wlv8z.dark.isImmersive > div > div > div > div > div.Carousel-container.svelte-9fayke > div > div:nth-child(1) > div > div > div > div.CardWebRadio-playButton.svelte-msxzte").style.display = "none";
  document.querySelector("body > div:nth-child(3) > main > section.Home-webradios.g-block-margin.svelte-19wlv8z.dark.isImmersive > div > div > div > div > div.Carousel-container.svelte-9fayke > div > div:nth-child(2) > div > div > div > div.CardWebRadio-playButton.svelte-msxzte").style.display = "none";
  document.querySelector("body > div:nth-child(3) > main > section.Home-webradios.g-block-margin.svelte-19wlv8z.dark.isImmersive > div > div > div > div > div.Carousel-container.svelte-9fayke > div > div:nth-child(3) > div > div > div > div.CardWebRadio-playButton.svelte-msxzte").style.display = "none";
  document.querySelector("body > div:nth-child(3) > main > section.Home-webradios.g-block-margin.svelte-19wlv8z.dark.isImmersive > div > div > div > div > div.Carousel-container.svelte-9fayke > div > div:nth-child(4) > div > div > div > div.CardWebRadio-playButton.svelte-msxzte").style.display = "none";
  document.querySelector("body > div:nth-child(3) > main > section.Home-webradios.g-block-margin.svelte-19wlv8z.dark.isImmersive > div > div > div > div > div.Carousel-container.svelte-9fayke > div > div:nth-child(5) > div > div > div > div.CardWebRadio-playButton.svelte-msxzte").style.display = "none";
  document.querySelector("body > div:nth-child(3) > main > section.Home-webradios.g-block-margin.svelte-19wlv8z.dark.isImmersive > div > div > div > div > div.Carousel-container.svelte-9fayke > div > div:nth-child(6) > div > div > div > div.CardWebRadio-playButton.svelte-msxzte").style.display = "none";
  document.querySelector("body > div:nth-child(3) > main > section.Home-webradios.g-block-margin.svelte-19wlv8z.dark.isImmersive > div > div > div > div > div.Carousel-container.svelte-9fayke > div > div:nth-child(7) > div > div > div > div.CardWebRadio-playButton.svelte-msxzte").style.display = "none";
  document.querySelector("body > div:nth-child(3) > main > section.Home-webradios.g-block-margin.svelte-19wlv8z.dark.isImmersive > div > div > div > div > div.Carousel-container.svelte-9fayke > div > div:nth-child(8) > div > div > div > div.CardWebRadio-playButton.svelte-msxzte").style.display = "none";
  
  
  /* OLD
  document.querySelector("#root > div > main > div.home-top > div.playingnowlist.home-playingnowlist > div > div > div:nth-child(1) > a > span").style.display = "none";
  document.querySelector("#root > div > main > div.home-top > div.playingnowlist.home-playingnowlist > div > div > div:nth-child(2) > a > span").style.display = "none";
  document.querySelector("#root > div > main > div.home-top > div.playingnowlist.home-playingnowlist > div > div > div:nth-child(3) > a > span").style.display = "none";
  document.querySelector("#root > div > main > div.home-top > div.playingnowlist.home-playingnowlist > div > div > div:nth-child(4) > a > span").style.display = "none";
  document.querySelector("#root > div > main > div.home-top > div.playingnowlist.home-playingnowlist > div > div > div:nth-child(5) > a > span").style.display = "none";
  document.querySelector("#root > div > main > div.home-top > div.playingnowlist.home-playingnowlist > div > div > div:nth-child(6) > a > span").style.display = "none";
  document.querySelector("#root > div > main > div.home-top > div.playingnowlist.home-playingnowlist > div > div > div:nth-child(7) > a > span").style.display = "none";
  document.querySelector("#root > div > main > div.home-top > div.playingnowlist.home-playingnowlist > div > div > div:nth-child(8) > a > span").style.display = "none";
  document.querySelector("#root > div > main > div.home-top > div.playingnowlist.home-playingnowlist > div > div > div:nth-child(9) > a > span").style.display = "none";
  */
  
}, 900);
