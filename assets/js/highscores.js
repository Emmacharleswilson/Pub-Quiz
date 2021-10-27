/*jshint esversion: 6 */
// code sourced from (https://www.youtube.com/watch?v=f4fB9Xg2JEY) 
// Highscores variables 
const highScoresList = document.querySelector('#highScoresList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
// function to retrieve and display user names and scores  
highScoresList.innerHTML =
    highScores.map(score => {
        return `<li class="high-score">${score.name} - ${score.score}</li>`;
    }).join('');