/*jshint esversion: 6 */

// title animation 

// code sourced from (https://tobiasahlin.com/moving-letters/#6) 

// Wrap every letter in a span 
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

/* Loop to display pub quiz heading on a continual loop with delays 
set for each letter and a fade out effect */

anime.timeline({
    loop: true
  })
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 80 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });