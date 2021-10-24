/*jshint esversion: 6 */

// Question, Choices, Progress and Score variables 
const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// Quiz questions and answers defined in an array of objects
let questions = [{
        question: 'What is the highest Mountain in the World?',
        choice1: 'Makalu',
        choice2: 'K2',
        choice3: 'Mount Everest',
        choice4: 'Kangchenjunga',
        answer: 3,
    },
    {
        question: 'How many of Henry VIIIs wives were called Catherine?',
        choice1: '1',
        choice2: '3',
        choice3: '2',
        choice4: '5',
        answer: 2,
    },
    {
        question: 'What is the smallest planet in our solar system?',
        choice1: 'Mercury',
        choice2: 'Pluto',
        choice3: 'Jupiter',
        choice4: 'Venus',
        answer: 1,
    },
    {
        question: 'What is the name of the Coffee shop in the US sitcom Friends',
        choice1: 'Central State',
        choice2: 'Central Park',
        choice3: 'Central Coffee',
        choice4: 'Central Perk',
        answer: 4,
    },
    {
        question: 'How many films have Al Pacino and Robert De Niro appeared in together?',
        choice1: '3',
        choice2: '4',
        choice3: '2',
        choice4: '7',
        answer: 2,
    },
    {
        question: 'Street artist Banksy is originally associated with which British city?',
        choice1: 'Manchester',
        choice2: 'London',
        choice3: 'Bristol',
        choice4: 'Leeds',
        answer: 3,
    },
    {
        question: 'From what grain is the Japanese spirit Sake made?',
        choice1: 'Wheat',
        choice2: 'Rice',
        choice3: 'Corn',
        choice4: 'Malt',
        answer: 2,
    },
    {
        question: 'How many human players are there on each side in a polo match?',
        choice1: '4',
        choice2: '7',
        choice3: '5',
        choice4: '10',
        answer: 1,
    },
    {
        question: 'From which US city do the band The Killers originate?',
        choice1: 'Los Angeles',
        choice2: 'New York',
        choice3: 'Las Vegas',
        choice4: 'Chicago',
        answer: 3,
    },
    {
        question: 'What is the most sold flavour of Walkers crisps?',
        choice1: 'Prawn Cocktail',
        choice2: 'Cheese and Onion',
        choice3: 'Ready Salted',
        choice4: 'Salt and Vinegar',
        answer: 2,
    },
];

// Sets points for each correct answer and the maximum number of questions
const SCORE_POINTS = 100;
const MAX_QUESTIONS = 10;

// This functions starts the game 
function startgame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

/* This function gets a new question from the question array until the maximum number of 
questions is reached. It then sets the most recent score variable and returns the user to the end.html page */
function getNewQuestion() {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);

        return window.location.assign('end.html');
    }

    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;

    // This generates a random integer to enable the next question to be selected from the available questions 
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    // This displays the choices for the question
    choices.forEach(choice => {
        const number = choice.dataset.number;
        choice.innerText = currentQuestion['choice' + number];
    });

    // This removes the question from the available questions array
    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
}

// This function adds a listener for each choice, and increments score if user answers correctly
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset.number;

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
        }


        selectedChoice.parentElement.classList.add(classToApply);

        // This function sets the question change-over speed 
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 500);
    });
});

// Increment score function
incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};

startgame();