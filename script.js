'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number';

// document.querySelector('.number').textContent = 13;

// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //   console.log(guess, typeof guess);

  //   When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number';

    // when guess is greater than 20 or less than 0
  } else if (guess > 20 || guess < 0) {
    document.querySelector('.message').textContent =
      'Wrong number. Guess a number between 1 and 20!';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high' : '📉 Too Low';
      // score = score - 1
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
    }

    // When guess is too low
  } 
  
});

// Coding Challenge

// Implement a game rest functionality, so that the player can make a new guess!

// Your tasks:
//  1. Select the element with the 'again' class and attach a click event handler
//  2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables
//  3. Restore the initial conditions of the message, number, score and guess input fields
//  4. Also restore the original background color (#222) and number width (15rem)

// GOOD LUCK 


