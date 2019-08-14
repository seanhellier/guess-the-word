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
        var myLength = answer.length;
        var display = [myLength];
        var win = myLength;
        var letters = [];
        var attemptsLeft = 10;
        var userLetter="";
        console.log('answer ', answer);
// hello sean this is dave

    
    function assignAnswer() {
        answer = game[choice] 
        // letters = answer.split('');
        console.log("This is the assigned Answer: " + answer)
        // console.log("this should be an array with all the letters in answer: "+ letters)

    }

    assignAnswer()

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
                

                //parens is condition, brackets are what we do
                // replace the underscore on the screen, with userLetter
                // document.getElementById("game")
            }
            // ELSE -- guesses and nothing else


        }
        console.log('answer is ', letters);
        setup();
    }

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

        document.getElementById("game").innerHTML = output;
        output="";
        attemptsLeft--;

        if (win < 1)
        {
            document.getElementById("gusses").innerHTML = "You win!";
        }
        else if (attemptsLeft < 1)
            {
                document.getElementById("gusses").innerHTML = "You Lose!";
            }
        else
            {
            document.getElementById("guesses").innerHTML = "You have " + attemptsLeft + "guesses left";
         }
    }
  
    window.onload = function()
    {
        setup();
        // $("submit").onclick = submit;

        document.onkeyup = function() {
            const userGuess = event.key.toUpperCase();
            checkGuess(userGuess);
            console.log('userGuess', userGuess)
            // userLetter.push(event.key);
        
        }
    }
  
 //     If the user chooses the corrct letters, the software displays an image and plays a song -->
