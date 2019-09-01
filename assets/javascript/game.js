var $$ = function(id) {
  return document.getElementById(id);
};

// declare variables to initialize array and generate random pick from the array

// 1. Determine how many letters guessed to win
// 2. set how many guesses are allowed
// 3. Initialize the list of letters are in the word and present placeholders
// 4. get the number of letters are in the chosen word
var gameActive = true;
var answer = "";
var letters = [];
var attemptsLeft = 10;
var userGuess = "";
var wrongGuess = "";
var wins = 0,
  losses = 0,
  resetText = "";

function startGame() {
  var game = ["APOLLO100", "BEETHOVEN", "MOZART", "KLF"];
  var choice = Math.floor(Math.random() * game.length);
  answer = game[choice];
  attemptsLeft = 10;
  $$("attemptsLeft").innerHTML = attemptsLeft;
  CreateLetters();
  console.log("This is the assigned Answer: " + answer);
}
// function that puts blanks on page

function CreateLetters() {
  letters = [];
  for (let i = 0; i < answer.length; i++) {
    letters.push("_");
  }
  displayLetters();
}

function displayLetters() {
  $$("game").innerHTML = letters.join(" ");
}

function checkGuess(guess) {
  var foundMatch = false;
  // this loop I want to run over whatever the answer word is
  for (var i = 0; i < answer.length; i++) {
    // for the if/else statement, IF userLetter is in "answer" we want to replace the __ on the screen
    if (guess === answer[i]) {
      foundMatch = true;
      letters[i] = guess;
      displayLetters();
    }
  }

  if (foundMatch) {
    console.log("You found a match");
    if (!letters.includes("_")) {
      resetText = "You have won!";
      wins++;
      $$("wins").innerHTML = wins;
      gameActive = false;
    }
  } else {
    attemptsLeft--;
    if (attemptsLeft === 0) {
      resetText = "you have lost!";
      losses++;
      $$("losses").innerHTML = losses;
      gameActive = false;
    }
    console.log(attemptsLeft);
    $$("attemptsLeft").innerHTML = attemptsLeft;
  }
  console.log("answer is ", letters);
}

// When user chooses letter, check to see if it's in the chosen word string (done).
// if yes, put it in appropriate place (done)
// if not found, put in not found string and display in appropriate place / decrement number of guesses remaining

// if number of correctly guessed letters matches all of chosen word String,

// declare win / play song

// else, continue the game until either guessed letter string matches chosen string or number of guesses remaining reaches zero.

// This function is run whenever the user guesses a letter..

window.onload = function() {
  startGame();
  document.onkeyup = function(event) {
    const userGuess = event.key.toUpperCase();
    if (gameActive) {
      checkGuess(userGuess);
    } else {
      var reset = confirm(resetText);
      if (reset || true) {
        resetText = "";
        gameActive = true;
        startGame();
      }
    }
  };
};
