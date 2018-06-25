// Global variables
// =================================================

var computerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar =[];

// lets the computer select a random letter from the alphabet
var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
console.log(computerGuess);


 
    // user inputs a key to the keyboard
    document.onkeyup = function (event) {      

        

        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        console.log(userGuess);

        /*if (userGuess =< 65 && userGuess >= 90); {
            alert("I said a letter!");  ================ This is the part that isn't working*/                   
        
        

        
        if (userGuess === computerGuess) {
            win();
            guessesLeft = 10;
           
        } else {
            lose();
        }

        if (guessesLeft === 0) {
            alert("You Lose");
            guessLeft();
        }

        if (userGuess != computerGuess) {
            guessesSoFar.push(userGuess);
        } 
        
        function guessLeft() {
            losses++;
            resetGame();
        }

        function win() {
            wins++;
            resetGame();  
        }

        function lose() {
            guessesLeft--;
        }

        function resetGame() {
            guessesLeft = 10;
            computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
            console.log(computerGuess);
            guessesSoFar = [];  
        } 
        
        var html =
            "<h1>Guess what I'm thinking!" +
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses Left: " + guessesLeft + "</p>" +
            "<p>Guesses so far: " + guessesSoFar.join(',') 
            

            guessesSoFar.innerHTML = guessesSoFar.join(',');
            document.getElementById("psychicAct").innerHTML = html;  
    }
        
    





// if it is not a match, decrememt 1 from guesses left, display guesses so far

// if guessesLeft = 0, everything gets reset

// if user input matches computer choice then increment wins by 1 and reset game