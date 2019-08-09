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
        var answer = game[choice];
        var myLength = answer.length;
        var display = [myLength];
        var win = myLength;
        var letters = answer.split('');
        var attemptsLeft = 10;
        var output="";
        console.log('answer ', answer);
        console.log('userLetter', userLetter);

    var setup = function()
    {
        for (var i=0; i< answer.length; i++)
        {
            display[i] = "_ ";
            output = output + display[i];
        }
        document.getElementById("game").innerHTML = output;
        console.log('output ', output)
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
            
            console.log('userLetter', userLetter)
            // userLetter.push(event.key);
        
        }
    }
  
 //     If the user chooses the corrct letters, the software displays an image and plays a song -->
