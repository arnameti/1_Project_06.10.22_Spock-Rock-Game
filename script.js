'use strict';
const playerContainer = document.querySelector('.player-container');
const computerContainer = document.querySelector('.computer-container');
const playerIcons = document.querySelectorAll('.player-icon');
const computerIcons = document.querySelectorAll('.computer-icon');


const choices = {
  rock: {name: 'Rock', defeats: ['scissors', 'lizard']},
  paper: {name: 'Paper', defeats: ['rock', 'spock']},
  scissors: {name: 'Scissors', defeats: ['paper', 'lizard']},
  lizard: {name: 'Lizard', defeats: ['paper', 'spock']},
  spock: {name: 'Spock', defeats: ['scissors', 'rock']},
};


playerContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.player-icon');

  if (!clicked) return;

  playerIcons.forEach((icon) => icon.classList.remove('color-black'));
  clicked.classList.add('color-black');
});

