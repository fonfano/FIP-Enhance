// ==UserScript==
// @name        fip enhancer
// @namespace   github.com/fonfano
// @match       https://www.fip.fr/*
// @grant       none
// @version     0.2
// @author      Lt Ripley
// @description 07/01/2022, 11:33:14
// ==/UserScript==

// reduces some sizes to fit the screen with windows scale set to 125%

// Historique
// 25/01-2022  0.2 	Upgrade  Remove uggly play button on art
// 07/01/2022  0.1 	Création



document.querySelector("#root > div > main > div.home-top > div.on-air-wrapper > div > div > div.view.channel-header").style.display = "none";
document.querySelector("#root > div > main > div.home-top > div.playingnowlist.home-playingnowlist > h1").style.height = "120px";

setTimeout(() => {     
  
document.querySelector("#root > div > main > div.home-top > div.on-air-wrapper > div > div > div:nth-child(2) > div > button > span").style.display = "none";
                        
}, 400);
