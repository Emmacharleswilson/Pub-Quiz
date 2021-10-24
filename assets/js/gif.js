/*jshint esversion: 6 */

// code sourced from (https://www.geeksforgeeks.org/how-to-add-fade-in-effect-using-pure-javascript/)

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