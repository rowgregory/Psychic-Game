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

      let userGuess = String.fromCharCode(event.keyCode).toLowerCase();

      if (event.keyCode < 65 || event.keyCode > 90) {
                
        alert("Please select a letter!");

      } else if (yourGuess.indexOf(userGuess) >= 0) {
                
        alert('You already guessed that!');

      } else if (userGuess === computerChoice) {


        alert('You Win');
        wins++;
        document.getElementById("wins").innerHTML = wins;
        
        resetGame();

      } else {

        guessesLeft--;
        document.getElementById("guessesLeft").innerHTML = guessesLeft;
        yourGuess.push(userGuess);
        document.getElementById("guessesSoFar").innerHTML = yourGuess.join(", ");
        allOutOfGuesses();
      }
    } 
  };

  checkLetter();

  const resetGame = () => {

    guessesLeft = 10;
    yourGuess = [];
    document.getElementById('guessesLeft').innerHTML = guessesLeft;
    document.getElementById('guessesSoFar').innerHTML = yourGuess;
    game();
  };

  const allOutOfGuesses = () => {

    if(guessesLeft === 0) {
        alert('You Lose!');
        losses++;
        document.getElementById('losses').innerHTML = losses;
        resetGame();

    } else {
        checkLetter();
    }
  }  
};

game();