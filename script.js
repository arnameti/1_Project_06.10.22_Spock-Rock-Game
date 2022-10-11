'use strict';
const playerContainer = document.querySelector('.player-container');
const computerContainer = document.querySelector('.computer-container');
const playerIcons = document.querySelectorAll('.player-icon');
const computerIcons = document.querySelectorAll('.computer-icon');
const playerChoice = document.querySelector('.player-choice');
const computerChoice = document.querySelector('.computer-choice');


const choices = {
  rock: {name: 'Rock', defeats: ['scissors', 'lizard']},
  paper: {name: 'Paper', defeats: ['rock', 'spock']},
  scissors: {name: 'Scissors', defeats: ['paper', 'lizard']},
  lizard: {name: 'Lizard', defeats: ['paper', 'spock']},
  spock: {name: 'Spock', defeats: ['scissors', 'rock']},
};

const getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


playerContainer.addEventListener('click', function (e) {
  // player selection
  const clicked = e.target.closest('.player-icon');

  if (!clicked) return;

  // setting color and name for player selection
  playerIcons.forEach((icon) => icon.classList.remove('color-black'));
  clicked.classList.add('color-black');
  playerChoice.textContent = ` --- ${clicked.dataset.choice}`;

  // computer selection
  const randomInt = getRandomInt(0, 4);
  const computerSelection = computerIcons[randomInt];

  // setting color and name for computer selection
  computerIcons.forEach((icon) => icon.classList.remove('color-black'));
  computerSelection.classList.add('color-black');
  computerChoice.textContent = ` --- ${computerSelection.dataset.choice}`
});

