// ==UserScript==
// @name        fip enhancer
// @namespace   github.com/fonfano
// @match       https://www.radiofrance.fr/*
// @grant       none
// @version     0.6
// @author      Lt Ripley
// @description Remove uggly play buttons, raise lower fip radios sections
// ==/UserScript==



// Historique
// 02/09/2022   0.6     Upgrade :  Color the currently played radio
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
let delay = 2500;              // Time (in MS) before the script runs (waits the page to be fully loaded).  Increase if necessary.
let raiseFipSections = true;   // Raises a little bit the lower FIP radios sections, to be able to read the text, especialy in case of MS Windows 125% display scale
let height = "480px";          // Height (decrease to raise) 
// End of options



setTimeout(() => {   
  
  for (let i=1 ; i < 11 ; i++)  {               
    
    let playButton = "body > div:nth-child(3) > main > section.Home-webradios.g-block-margin.svelte-19wlv8z.dark.isImmersive > div > div > div > div > div.Carousel-container.svelte-enrlw0 > div > div:nth-child(";
    playButton += i.toString();
    playButton += ") > div > div > div > div.CardWebRadio-playButton.svelte-1wsgm83";
                      
    
    document.querySelector(playButton).style.display = "none";
  }
  
  if (raiseFipSections)  {
    document.querySelector("body > div:nth-child(3) > main > section.Home-coverRadio").style.maxHeight = height; 
  }       
  
  setInterval(colorRadio, 1000);
  
}, delay);


function colorRadio() {
   
  var textRadioLue = document.querySelector("#player > div.media.svelte-4b2113 > span").firstChild.data;
                                            
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

    let radioLueToColor = "body > div:nth-child(3) > main > section.Home-webradios.g-block-margin.svelte-19wlv8z.dark.isImmersive > div > div > div > div > div.Carousel-container.svelte-enrlw0 > div > div:nth-child(";
    radioLueToColor += i.toString();
    radioLueToColor += ") > div > div > a > div";
    document.querySelector(radioLueToColor).style.backgroundColor = "#2E2E2E";
    if (radioNumber == i)  {
      document.querySelector(radioLueToColor).style.backgroundColor = "blue";
    }
    
  }
  
  
  let radioLueToColor = "body > div:nth-child(3) > main > section.Home-webradios.g-block-margin.svelte-19wlv8z.dark.isImmersive > div > div > div > div > div.Carousel-container.svelte-enrlw0 > div > div:nth-child(";
  radioLueToColor += radioNumber.toString();
  radioLueToColor += ") > div > div > a > div";
  document.querySelector(radioLueToColor).style.backgroundColor = "blue";   
    
}
