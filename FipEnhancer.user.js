// ==UserScript==
// @name        fip enhancer
// @namespace   github.com/fonfano
// @match       https://www.radiofrance.fr/*
// @grant       none
// @version     0.8.3
// @author      Lt Ripley
// @description Remove uggly play buttons, raise lower fip radios sections, colorize currently played radio
// ==/UserScript==

// Historique
// 14-07-2023   0.8.3   Upgrade :  Removes hidden mode on Arts of radios.
// 14-07-2023   0.8.2   Fix     :  For new FIP GUI
// 01-03-2023   0.8.1   Fix     :  New radios order
// 20/02-2023   0.8.0   Redesign:  New way to select elements to allow working when new elements names appear.
// 14/02/2023   0.7.5   Fix     :  For new elements names (one more time !)
// 18/11/2022   0.7.4   Fix     :  For new elements names (one more time !)
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
let scrollValue = 60;             // scroll (pixels)
// let height = "480px";          // Height (decrease to raise).  Deprecated
// End of options

setTimeout(() => {

  if (raiseRadiosSections)  {
    window.scroll(0, scrollValue); // x,y en pixels
  }

  const playButtons = document.querySelectorAll('.WebradioButton-remote-state.svelte-1ycr8m9');

  for (const button of playButtons) {
  button.style.display = "none";

  setInterval(colorRadio, 1000);
  setInterval(deleteUgglyThings, 1000);

}

}, delay);


function deleteUgglyThings()  {

  /*let animation = document.querySelector("#main > section.Home-webradios.g-block-margin.fip.svelte-ekooah.isImmersive > div > div:nth-child(1) > div > button > div > div > div > div.WebradioButton-overlay-background.svelte-1ycr8m9 > div");

  if (animation != null) {
    animation.remove();
  } */

  let overlays = document.querySelectorAll(".WebradioButton-overlay-background.svelte-1ycr8m9");
  for (const overlay of overlays) {
    overlay.remove();
  }

  let hidden1 = document.querySelectorAll(".isSlightlyHidden");
  for (const hidden of hidden1)  {
    hidden.classList.remove("isSlightlyHidden");
  }

  let hidden2 = document.querySelector(".isPlaying");
  hidden2.classList.remove("isPlaying");

  /*let hidden2 = document.querySelectorAll("isPlaying");
  for (const hidden of hidden2)  {
    hidden.classList.remove("isPlaying");
  }*/

}


function colorRadio() {

  var textRadioLue = document.querySelector(".media.svelte-1i7nef6 > span").firstChild.data;  // obtenir texte de la radio lue en bas a gauche (innerHTML donne 5 lignes de trucs :/ )

  //console.log(textRadioLue);
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

    case "FIP Pop" :
    radioNumber = 4;
    break;

    case "FIP Metal" :
    radioNumber = 5;
    break;

    case "FIP Hip-Hop" :
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
   radioNumber++;

  //console.log(radioNumber);

  var radiosToColor = document.querySelectorAll(".WebradioButton-overlay-text.svelte-1ycr8m9 > div");



  var n = 1;

  for (const radio of radiosToColor)  {

    radio.style.color = "#FFFFFF";

    if (radioNumber == n)  {

      radio.style.color = "blue";
    }
    n++;

  }

}
