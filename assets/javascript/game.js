        var $ = function (id)
    {
        return document.getElementById(id);
    } 
     

// declare variables to initialize array and generate random pick from the array

// 1. Determine how many letters guessed to win
// 2. set how many guesses are allowed
// 3. Initialize the list of letters are in the word and present placeholders
// 4. get the number of letters are in the chosen word
        var game = ["APOLLO100", "BEETHOVEN", "MOZART", "KLF"]
        var choice = Math.floor(Math.random()*4);
        var answer = "";
        // var myLength = answer.length;
        // var display = [myLength];
        // var win = myLength;
        var letters = [];
        var attemptsLeft = 10;
        var userLetter="";
        var wrongGuess="";
        // console.log('answer ', answer);

    
    function assignAnswer() {
        answer = game[choice] 
        // letters = answer.split('');
        console.log("This is the assigned Answer: " + answer)
        // console.log("this should be an array with all the letters in answer: "+ letters)

    }

    assignAnswer()

    // function that puts blanks on page
    for (let i = 0; i < answer.length; i++) {
        letters.push("_");
        console.log()
    }

    var setup = function()
    {
        var output="";
        // console.log('working with ', answer);
        // console.log('letters ', letters);
        for (var i=0; i< answer.length; i++)
        {
            output = output + letters[i] + " ";
        }
        document.getElementById("game").innerHTML = output;
        // console.log('output ', output)
    }

    function checkGuess(userLetter) {
        
        // this loop I want to run over whatever the answer word is
        for (var i = 0; i < answer.length; i++) {
           
            // for the if/else statement, IF userLetter is in "answer" we want to replace the __ on the screen 
            if (userLetter === answer[i]){
                letters[i] = userLetter;
            }
        }
        console.log('answer is ', letters);
        setup();
    }

    // updateGuesses: function(letter) {
    //     // If the letter is not in the guessedLetters array, and the letter is not in the lettersOfTheWord array..
    //     if ((this.guessedLetters.indexOf(letter) === -1) && (this.lettersOfTheWord.indexOf(letter) === -1)) {
    
    //       // Add the letter to the guessedLetters array.
    //       this.guessedLetters.push(letter);
    
    //       // Decrease guesses by one.
    //       this.guessesLeft--;
    
    //       // Update guesses remaining and guesses letters on the page.
    //       document.querySelector("#guesses-remaining").innerHTML = this.guessesLeft;
    //       document.querySelector("#guessed-letters").innerHTML =
    //       this.guessedLetters.join(", ");
    //     }





    var submit = function()
    {
        output = "";
        $("letter").value(userLetter);
        $("letter").value = "";


        for (var c= 0; c<answer.length; c++)
        {
            alert(letters[c]);
            if (userLetter.toUpperCase() == letters[c])
                {
                    display[c] = userLetter.toUpperCase();
                    win--;
                }
                    output = output + display[c] + " ";
        }


        // When user chooses letter, check to see if it's in the chosen word string (done).
        // if yes, put it in appropriate place (done)
        // if not found, put in not found string and display in appropriate place / decrement number of guesses remaining
        
        // if number of correctly guessed letters matches all of chosen word String,

        // declare win / play song

        // else, continue the game until either guessed letter string matches chosen string or number of guesses remaining reaches zero.

// This function is run whenever the user guesses a letter..
gameProcess = function() {
    // If the user has no guesses left, restart the game.
    if (this.attemptsLeft === 0) {
      this.restartGame();
    }
    // Otherwise...
    else {
      // Check for and handle incorrect guesses.
      this.wrongGuess(userLetter);

      // Check for and handle correct guesses.
      this.updateMatchedLetters(userLetter);

      // If the user wins, restart the game.
      if (this.updateWins() === true) {
        this.restartGame();
      }
    }

  }

  gameProcess();






        // OLD CODE HERE
        // document.getElementById("game").innerHTML = output;
        // output="";
        // attemptsLeft--;

        // if (win < 1)
        // {
        //     document.getElementById("gusses").innerHTML = "You win!";
        // }
        // else if (attemptsLeft < 1)
        //     {
        //         document.getElementById("gusses").innerHTML = "You Lose!";
        //     }
        // else
        //     {
        //     document.getElementById("guesses").innerHTML = "You have " + attemptsLeft + "guesses left";
        //  }
    }
  
    window.onload = function()
    {
        setup();
        // $("submit").onclick = submit;

        document.onkeyup = function() {
            const userGuess = event.key.toUpperCase();
            checkGuess(userGuess);
            console.log('userGuess', userGuess)
        }
    }
  

