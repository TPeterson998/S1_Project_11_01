"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
  Author: Trent Peterson
   Date:   2.12.18

*/
var thisTime = new Date();
var timeStr = thisTime.toLocaleString();
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();
var mapNum = (2 * thisMonth + thisHour) % 24;
var imgStr = `< img src = 'sd_sky${mapNum}.png' / >`;
document.getElementById("timeStamp").innerHTML = timeStr;
document.getElementById("planisphere").insertAdjacentElement("afterbegin", imgStr)