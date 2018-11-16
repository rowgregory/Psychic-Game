// Global variables
// =================================================


let wins = 0;
let losses = 0;
let guessesLeft = 10;
let yourGuess = []; 
let computerChoice = '';



const game = () => {

    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let computerGuess = alphabet[Math.floor(Math.random() * 26)];
    let computerChoice = computerGuess;

    console.log(computerChoice);

    

    const checkLetter = () => {

        document.onkeyup = (event) => {

            var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

            console.log(`This is the letter you guessed: ${userGuess}`);

            if (event.keyCode < 65 || event.keyCode > 90) {
                
                alert("Please select a letter!");

            }  else if (yourGuess.indexOf(userGuess) >= 0) {
                console.log('are we here');
                
                alert('You already guessed that!');

            } else if (userGuess === computerChoice) {

                alert('You Win');
                
                wins++;

                document.getElementById("wins").innerHTML = wins;

            } else {

                guessesLeft--;

                document.getElementById("guessesLeft").innerHTML = guessesLeft;

                yourGuess.push(userGuess);

                document.getElementById("guessesSoFar").innerHTML = yourGuess.join(", ");
            }
        } 
    };

    
    checkLetter();
};

game();

// // lets the computer select a random letter from the alphabet

// console.log(`This is the computer guess: ${computerGuess}`);

// window.onload = function () {
//     document.getElementById('wins').innerHTML = `Wins: ${wins}`
//     document.getElementById('losses').innerHTML = `Losses: ${losses}`
//     document.getElementById('guessesLeft').innerHTML = `Guesses Left: ${guessesLeft}`
//     document.getElementById('guessesSoFar').innerHTML = `Guesses so far: ${guessesSoFar}`
// }

// // user inputs a key to the keyboard
// document.onkeyup = function (event) {



//     
//     console.log(userGuess);

//     




//     if (userGuess === computerGuess) {
//         win();
//         alert('You chose the right letter!')
//         guessesLeft = 10;
//         guessesSoFar = [];
//     } else {
//         lose();
//     }

//     if (guessesLeft === 0) {
//         alert("You Lose");
//         guessLeft();
//     }

//     if (userGuess != computerGuess) {
//         guessesSoFar.push(userGuess);
//         document.getElementById('guessesSoFar').innerHTML = `Guesses so far: ${guessesSoFar.join(', ')}`
//     }

//     function guessLeft() {
//         losses++;
//         resetGame();
//         document.getElementById('losses').innerHTML = `Losses: ${losses}`
        
//     }

//     function win() {
//         wins++;
//         document.getElementById('wins').innerHTML = `Wins: ${wins}`
//         resetGame();
//     }

//     function lose() {
//         guessesLeft--;
//         document.getElementById('guessesLeft').innerHTML = `Guesses Left: ${guessesLeft}`
//     }

//     function resetGame() {
//         guessesLeft = 10;
//         computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
//         console.log(`This is the computer guess: ${computerGuess}`);
//         guessesSoFar = [];
//     }




//     // "<p>Losses: " + losses + "</p>" +
//     // "<p>Guesses Left: " + guessesLeft + "</p>" +
//     // "<p>Guesses so far: " + guessesSoFar.join(', ') 


//     // guessesSoFar.innerHTML = guessesSoFar.join(',');
//     // document.getElementById("psychicAct").innerHTML = html;  
// }







// if it is not a match, decrememt 1 from guesses left, display guesses so far

// if guessesLeft = 0, everything gets reset

// if user input matches computer choice then increment wins by 1 and reset game