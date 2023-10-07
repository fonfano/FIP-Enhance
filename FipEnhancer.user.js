// ==UserScript==
// @name        fip enhancer
// @namespace   github.com/fonfano
// @match       https://www.radiofrance.fr/*
// @grant       none
// @version     0.9.3
// @author      Lt Ripley
// @description Remove uggly play buttons on arts, raise lower fip radios sections, add border to currently played radio
// ==/UserScript==

// Historique
// 07-10-2023   0.9.3   Update  :  For new buttons and animated overlay names
// 29-08-2023   0.9.2   Update  :  New radios order
// 28-08-2023   0.9.1   Update  :  Added new radio (Sacré Français).
// 09-08-2023   0.9.0   Update  :  Added blinking mode for border, with option.
// 08-08-2023   0.8.9   Update  :  Added a border to playing radio and removed colorRadio function
// 06-08-2023   0.8.8   Update  :  Added clic detection to reduce costs (removed focus detection).  Also reduced delay (delay to wait the page to be loaded)
// 06-08-2023   0.8.7   Update  :  Added focus detection to reduce costs
// 05-08-2023   0.8.6   Update  :  Added a dedicated function to hide play buttons on radios
// 29-07-2023   0.8.5   Upgrade :  New way to raise
// 17-07-2023   0.8.4   Upgrade :  Colorize artist name of current radio
// 14-07-2023   0.8.3   Upgrade :  Removes slightly hidden modes on Arts of radios.
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
let delay = 1000;                 // Time (in MS) before the script runs (to wait the page to be fully loaded).  Increase if the scripts doesn't work.
let raiseRadiosSections = true;   // Raises a little bit the lower FIP radios sections, to be able to read the text, especialy in case of MS Windows 125% display scale. True = enabled, false = disabled
let headerHeight = "40px";        // header height.  You can increase or decrease to adjust radio section position
let border = "3px";               // Border thickness
let borderBlinkBool = true;       // Blinking border.  true = yes, false = no
// End of options


border +=" dashed white";
var borderVisible = true;  // to blink
var a;                     // to blink
var b;                     //
var dual = true;           //


window.addEventListener("load", (event) => {  // Censé attendre que la page soit complètement chargée

  setTimeout(() => {

    if (raiseRadiosSections)  {
      let header = document.querySelector("body > div > header");
      header.style.maxHeight = headerHeight;
    }

    removePlayButtons();

    document.addEventListener('click', function(event) {  //detection clic sur la page
      setTimeout(() => {
        deleteUgglyThings();
        radioBorder();
      }, 200);
    });

  }, delay);
});



function removePlayButtons() {

  const playButtons = document.querySelectorAll('.WebradioButton-remote-state.svelte-18lspnn')
  for (const button of playButtons) {
  //button.style.display = "none";
    button.remove();
  }
}


function deleteUgglyThings()  {

  let overlays = document.querySelectorAll(".WebradioButton-overlay-background.svelte-18lspnn");
  for (const overlay of overlays) {
    overlay.remove();
  }

  let hidden1 = document.querySelectorAll(".isSlightlyHidden");
  for (const hidden of hidden1)  {
    hidden.classList.remove("isSlightlyHidden");
  }

  let hidden2 = document.querySelector(".isPlaying");
  if (hidden2 != null) {
    hidden2.classList.remove("isPlaying");
  }
}


function radioBorder()  {

  let textRadioLue = document.querySelector(".media.svelte-1i7nef6 > span").firstChild.data;  // obtenir texte de la radio lue en bas a gauche (innerHTML donne 5 lignes de trucs :/ )

  let radioNumber=0;

  switch (textRadioLue)  {

    case "FIP" : radioNumber = 0; break;

    case "FIP Sacré Français !" : radioNumber = 1; break;

    case "FIP Rock" : radioNumber = 2; break;

    case "FIP Jazz" : radioNumber = 3; break;

    case "FIP Groove" : radioNumber = 4; break;

    case "FIP Reggae" : radioNumber = 5; break;

    case "FIP Pop" : radioNumber = 6; break;

    case "FIP Electro" : radioNumber = 7; break;

    case "FIP Monde" : radioNumber = 8; break;

    case "FIP Nouveautés" : radioNumber = 9; break;

    case "FIP Metal" : radioNumber = 10; break;

    case "FIP Hip-Hop" : radioNumber = 11; break;

  }


  let radios = document.querySelectorAll(".WebradioButton-overlay");

  let n = 0;

  for (const radio of radios)  {

    radio.style.border = "none";

    if (n == radioNumber) {

      if (!borderBlinkBool) {
        radio.style.border = border;
        radio.style.borderRadius = "8px";
      }

      // blinking mode.  Need "dual" boolean to switch between a and b to be able to clearInterval
      else {
        if (dual) {
          clearInterval(b);
          a = setInterval(function() {
            //console.log ("testA");
            borderBlink(radio);
          }, 1000);
          dual = !dual;
        }

        else {
          clearInterval(a);
          b = setInterval(function() {
            //console.log ("testB");
            borderBlink(radio);
          }, 1000);
          dual = !dual;
        }
      }

    }

    n++;
  }

}


function borderBlink(radio)  {

  if (borderVisible) {
    radio.style.border = border;
    radio.style.borderRadius = "8px";
    borderVisible = !borderVisible;
  }
  else  {
    radio.style.border = "none";
    borderVisible = !borderVisible;
  }


}

