// ==UserScript==
// @name        fip enhancer
// @namespace   github.com/fonfano
// @match       https://www.radiofrance.fr/*
// @grant       none
// @version     0.8.0
// @author      Lt Ripley
// @description Remove uggly play buttons, raise lower fip radios sections, colorize currently played radio
// ==/UserScript==

// Historique
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
let scrollValue = 70;             // scroll (pixels)
// let height = "480px";          // Height (decrease to raise).  Deprecated
// End of options

setTimeout(() => {

  if (raiseRadiosSections)  {
    window.scroll(0, scrollValue); // x,y en pixels
  }

  setInterval(colorRadio, 1000);

  const playButtons = document.querySelectorAll('.CardWebRadio-playButton');

  for (const button of playButtons) {
  button.style.display = "none";
}

}, delay);


function colorRadio() {


  var textRadioLue = document.querySelector(".line1").firstChild.data;  // obtenir texte de la radio lue en bas a gauche (innerHTML donne 5 lignes de trucs :/ )

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

  var radiosToColor = document.querySelectorAll(".CardWebRadio-details");

  var n = 1;

  for (const radio of radiosToColor)  {

    radio.style.backgroundColor = "#2E2E2E";

    if (radioNumber == n)  {
      radio.style.backgroundColor = "blue";
    }
    n++;

  }

}
