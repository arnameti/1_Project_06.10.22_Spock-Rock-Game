'use strict';

const playerScoreEl = document.getElementById('playerScore');
const playerChoiceEl = document.getElementById('playerChoice');
const computerScoreEl = document.getElementById('computerScore');
const computerChoiceEl = document.getElementById('computerChoice');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const allGameIcons = document.querySelectorAll('.far');
const resultText = document.getElementById('resultText');

const choices = {
  rock: {name: 'Rock', defeats: ['scissors', 'lizard']},
  paper: {name: 'Paper', defeats: ['rock', 'spock']},
  scissors: {name: 'Scissors', defeats: ['paper', 'lizard']},
  lizard: {name: 'Lizard', defeats: ['paper', 'spock']},
  spock: {name: 'Spock', defeats: ['scissors', 'rock']},
};

let playerScoreNumber = 0;
let computerScoreNumber = 0;
let computerChoice = '';

// Reset all selected icons
const resetSelected = function () {
  allGameIcons.forEach(icon => {
    icon.classList.remove('selected');
  });
};

// Reset Score & playerChoice/computerChoice
const resetAll = function () {
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  playerScoreEl.textContent = playerScoreNumber;
  computerScoreEl.textContent = computerScoreNumber;
  playerChoiceEl.textContent = ' --- Your Choice';
  computerChoiceEl.textContent = ' --- Computer Choice';
  resultText.textContent = '';
  resetSelected();
};

//Random computer choice
const computerRandomChoice = function () {
  const computerChoiceNumber = Math.random();
  if (computerChoiceNumber > 0.8) computerChoice = 'spock';
  if (computerChoiceNumber <= 0.8) computerChoice = 'lizard';
  if (computerChoiceNumber <= 0.6) computerChoice = 'scissors';
  if (computerChoiceNumber <= 0.4) computerChoice = 'paper';
  if (computerChoiceNumber < 0.2) computerChoice = 'rock';
};

// Ad selected styling and computerChoice
function displayComputerChoice(computerChoice) {
  // Add 'selected' styling & playerChoice
  switch (computerChoice) {
    case 'rock':
      computerRock.classList.add('selected');
      computerChoiceEl.textContent = ' --- Rock';
      break;
    case 'paper':
      computerPaper.classList.add('selected');
      computerChoiceEl.textContent = ' --- Paper';
      break;
    case 'scissors':
      computerScissors.classList.add('selected');
      computerChoiceEl.textContent = ' --- Scissors';
      break;
    case 'lizard':
      computerLizard.classList.add('selected');
      computerChoiceEl.textContent = ' --- Lizard';
      break;
    case 'spock':
      computerSpock.classList.add('selected');
      computerChoiceEl.textContent = ' --- Spock';
      break;
    default:
      break;
  }
}

// Passing player selection value and styling icons
function select(playerChoice) {
  checkResult(playerChoice);
  // Add 'selected' styling & playerChoice
  switch (playerChoice) {
    case 'rock':
      playerRock.classList.add('selected');
      playerChoiceEl.textContent = ' --- Rock';
      break;
    case 'paper':
      playerPaper.classList.add('selected');
      playerChoiceEl.textContent = ' --- Paper';
      break;
    case 'scissors':
      playerScissors.classList.add('selected');
      playerChoiceEl.textContent = ' --- Scissors';
      break;
    case 'lizard':
      playerLizard.classList.add('selected');
      playerChoiceEl.textContent = ' --- Lizard';
      break;
    case 'spock':
      playerSpock.classList.add('selected');
      playerChoiceEl.textContent = ' --- Spock';
      break;
    default:
      break;
  }
}

// Check result, increase Scores, update the resultText
const updateScore = function (playerChoice) {
  if (playerChoice === computerChoice) resultText.textContent = 'It\'s a tie.';

  if (playerChoice !== computerChoice) {
    const choice = choices[playerChoice];

    if (choice.defeats.indexOf(computerChoice) > -1) {
      resultText.textContent = 'You Won!';
      playerScoreNumber++;
      playerScoreEl.textContent = playerScoreNumber;
    }

    if (choice.defeats.indexOf(computerChoice) === -1) {
      resultText.textContent = 'You Lost!';
      computerScoreNumber++;
      computerScoreEl.textContent = computerScoreNumber;
    }
  }
};

// Call functions to process the turn
const checkResult = function (playerChoice) {
  resetSelected();
  computerRandomChoice();
  displayComputerChoice(computerChoice);
  updateScore(playerChoice);
};


// On startup, set initial values
resetAll();
