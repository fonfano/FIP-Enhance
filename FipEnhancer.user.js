// ==UserScript==
// @name        fip enhancer
// @namespace   github.com/fonfano
// @match       https://www.radiofrance.fr/*
// @grant       none
// @version     0.7.3
// @author      Lt Ripley
// @description Remove uggly play buttons, raise lower fip radios sections, colorize currently played radio
// ==/UserScript==

// Historique
// 13/11/2022   0.7.3   Fix     :  For new elements names (one more time !)
// 01/11/2022   0.7.2   Fix     :  For new elements names (one more time !)
// 21/10/2022   0.7.1   Fix     :  For new elements names (one more time !)
// 25/09/2022   0.7     Fix     :  For new elements names (one more time !)
// 02/09/2022   0.6     Upgrade :  Colorize the currently played radio
// 26/08/2022   0.5.4   Fix     :  For 2 new radios and new buttons names (one more time !)
// 26/08/2022   0.5.3   Fix     :  For new buttons names (one more time !)
// 01/08/2022   0.5.2   Fix     :  For new buttons names (one more time !)
// 31/07/2022   0.5.1   Fix     :  For new buttons names
// 07/06/2022   0.5     Upgrade :  Raise lower fip Radios sections
// 05/05/2022   0.4.1   Fix     :  For new buttons names
// 05/04/2022   0.4     Upgrade :  For new fip site (including URL)
// 05/02/2022   0.3     Upgrade :  Remove all uggly play buttons
// 25/01/2022   0.2     Upgrade :  Remove uggly play button on art
// 07/01/2022   0.1     Creation

// Options
let delay = 2500;                 // Time (in MS) before the script runs (waits the page to be fully loaded).  Increase if necessary.
let raiseRadiosSections = true;   // Raises a little bit the lower FIP radios sections, to be able to read the text, especialy in case of MS Windows 125% display scale
let scrollValue = 70;             // scroll (pixels)
// let height = "480px";          // Height (decrease to raise).  Deprecated
// End of options

setTimeout(() => {

  if (raiseRadiosSections)  {
    window.scroll(0, scrollValue); // x,y en pixels
    //document.querySelector("body > div > main > section.Home-coverRadio > div").style.maxHeight = height;  // fonctionne mal a present
  }

  setInterval(colorRadio, 1000);

  for (let i=1 ; i < 11 ; i++)  {

    let playButton = "body > div > main > section.Home-webradios.g-block-margin.svelte-qhvycx.dark.isImmersive > div > div > div > div > div.Carousel-container.svelte-18716dr > div > div:nth-child(";
    playButton += i.toString();
    playButton += ") > div > div > div > div.CardWebRadio-playButton.svelte-j4h921";

    document.querySelector(playButton).style.display = "none";
  }

}, delay);


function colorRadio() {

  var textRadioLue = document.querySelector("#player > div.media.svelte-1mel42u > span").firstChild.data;  // obtenir texte de la radio lue en bas a gauche (innerHTML donne 5 lignes de trucs :/ )

  console.log(textRadioLue);
  var radioNumber=0;

  switch (textRadioLue)  {

    case "FIP" :
    radioNumber = 0;
    break;

    case "FIP Rock" :
    radioNumber = 1;
    break;

    case "FIP Jazz" :
    radioNumber = 2;
    break;

    case "FIP Groove" :
    radioNumber = 3;
    break;

    case "FIP Metal" :
    radioNumber = 4;
    break;

    case "FIP Hip-Hop" :
    radioNumber = 5;
    break;

    case "FIP Pop" :
    radioNumber = 6;
    break;

    case "FIP Electro" :
    radioNumber = 7;
    break;

    case "FIP Monde" :
    radioNumber = 8;
    break;

    case "FIP Reggae" :
    radioNumber = 9;
    break;

    case "FIP Nouveautés" :
    radioNumber = 10;
    break;

  }

  console.log(radioNumber);

  for (var i = 1 ; i < 11 ; i++)  {

    let radioToColor = "body > div > main > section.Home-webradios.g-block-margin.svelte-qhvycx.dark.isImmersive > div > div > div > div > div.Carousel-container.svelte-18716dr > div > div:nth-child(";
    radioToColor += i.toString();
    radioToColor += ") > div > div > a > div";

    document.querySelector(radioToColor).style.backgroundColor = "#2E2E2E";
    if (radioNumber == i)  {
      document.querySelector(radioToColor).style.backgroundColor = "blue";
    }

  }

}  // colorRadio


/* OLD

function observe()  {

  console.log("Appel observe");
  let elementToObserve2 = document.querySelector("body > div:nth-child(3) > footer > div.StickyPlayer-wrapper.svelte-1o84z2t");
  //let elementToObserve2 = document.querySelector("#player > div.media.svelte-4b2113");
    let observer2 = new MutationObserver(colorRadio); // déclaration avec appel fonction

    let options2 = {
      childList: true,
      attributes: true,
      characterData: true,
      subtree: true

    };

    observer2.observe(elementToObserve2, options2);

}

  if (raiseRadiosSections)  {
    document.querySelector("body > div:nth-child(3) > main > section.Home-coverRadio").style.maxHeight = height;
  }

    let playButton = "body > div:nth-child(3) > main > section.Home-webradios.g-block-margin.svelte-19wlv8z.dark.isImmersive > div > div > div > div > div.Carousel-container.svelte-enrlw0 > div > div:nth-child(";
    playButton += i.toString();
    playButton += ") > div > div > div > div.CardWebRadio-playButton.svelte-1wsgm83";

    let radioToColor = "body > div:nth-child(3) > main > section.Home-webradios.g-block-margin.svelte-19wlv8z.dark.isImmersive > div > div > div > div > div.Carousel-container.svelte-enrlw0 > div > div:nth-child(";
    // entier : body > div:nth-child(3) > main > section.Home-webradios.g-block-margin.svelte-19wlv8z.dark.isImmersive > div > div > div > div > div.Carousel-container.svelte-enrlw0 > div > div:nth-child(4) > div > div > a > div
    radioToColor += i.toString();
    radioToColor += ") > div > div > a > div";

  let radioToColor = "body > div:nth-child(3) > main > section.Home-webradios.g-block-margin.svelte-19wlv8z.dark.isImmersive > div > div > div > div > div.Carousel-container.svelte-enrlw0 > div > div:nth-child(4) > div > div > a > div";
  document.querySelector("body > div:nth-child(3) > main > section.Home-webradios.g-block-margin.svelte-19wlv8z.dark.isImmersive > div > div > div > div > div.Carousel-container.svelte-enrlw0 > div > div:nth-child(4) > div > div > a > div").style.backgroundColor = "blue";
  document.querySelector(radioToColor).style.backgroundColor = "blue";
  */

  //radioToColor.style.backgroundColor = "blue";

  /* Fonctionne
  let radioToColor = "body > div:nth-child(3) > main > section.Home-webradios.g-block-margin.svelte-19wlv8z.dark.isImmersive > div > div > div > div > div.Carousel-container.svelte-enrlw0 > div > div:nth-child(4) > div > div > a > div";
  document.querySelector(radioToColor).style.backgroundColor = "blue";
  */
