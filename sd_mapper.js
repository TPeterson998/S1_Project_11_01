"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
  Author: Trent Peterson
   Date:   2.12.18

*/
// This is where my varaibles are
// Starts a new date that will keep up eith the current date 
var thisTime = new Date();
// This calls the new date
var timeStr = thisTime.toLocaleString();
// this grabs the hours and months down from the new date
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();
// This does some basic math using the hours and months that are grabed earlier 
var mapNum = (2 * thisMonth + thisHour) % 24;
// this sets a html tag to be added in when I call tbis varaible
var imgStr = "<img src = 'sd_sky" + mapNum + ".png' / >";
// This changes the date in the web site to the new date
document.getElementById("timeStamp").innerHTML = timeStr;
// This changes the picture in the website depending on the math calculation earlier
document.getElementById("planisphere").insertAdjacentHTML('afterbegin', imgStr);