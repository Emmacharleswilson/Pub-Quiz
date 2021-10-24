/*jshint esversion: 6 */

// Username and Score variables 
const username = document.querySelector('#username');
const saveScoreBtn = document.querySelector('#saveScoreBtn');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

// This function saves and stores users highscores 
saveHighScore = e => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };

    // Adds latest score and user name to the high scores array
    highScores.push(score);

    // Sorts scores highest to lowest
    highScores.sort((a, b) => {
        return b.score - a.score;
    });
    // Only top 5 scores appear 
    highScores.splice(5);
    // Stores scores in local storage
    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('highscores.html');
};