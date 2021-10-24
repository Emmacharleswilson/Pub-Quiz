/*jshint esversion: 6 */

/* This document was partially created using a tutorial
 on geeksforgeeks.org, a link can be found in the README.md*/

// fade in effect on gif

window.onload = fadeIn;

function fadeIn() {
    var fade = document.getElementById("gif");
    var opacity = 0;
    var intervalID = setInterval(function () {

        if (opacity < 1) {
            opacity = opacity + 0.1;
            fade.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    }, 100);
}