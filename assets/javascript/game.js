// ========================================================================
// VARIABLES AND ARRAYS
// ========================================================================
var wins = 0;
var losses = 0;
var guesses = 6;
var wordBank = [
    'Marco Reus', 
    'Robert Lewandowski', 
    'Lionel Messi', 
    'Antoine Griezmann', 
    'Zlatan Ibrahimovic', 
    'Michael Bradley', 
    'Mesut Ozil', 
    'Kevin De Bruyne', 
    'Paulo Dybala', 
    'Ciro Immobile'
];
var guessedLetter = [];
var correctGuess = [];
var wordSelection = [];

// ========================================================================
// FUNCTIONS
// ========================================================================

function wordChoice() { 
    return wordBank[Math.floor(Math.random() * wordBank.length)];
    // doesn't seem to be saving the random value to either wordChoice or wordSelection. Tested with console.log()
    wordSelection.push(wordChoice)
};

var isAlpha = function(userGuess){
    return /^[A-Z]$/i.test(userGuess);
};

var gameStart = function () {
    guessedLetter = [];
    correctGuess = [];
    correctGuess = [];
    guesses = 6;
    document.getElementById('word').innerHTML = wordSelection;
    document.getElementById('guesses').innerHTML = guesses;
};

var gameOver = function () {
    losses++;
    alert('Game Over');
    gameStart();
}

var winner = function () {
    wins++;
    alert('You Win!');
    gameStart();
}
// seems to be in a constant cycle of the gameStart()
gameStart();

// ========================================================================
// GAME RULES
// ========================================================================

document.onkeyup = function(event) {
    
    var userGuess = event.key.toLowerCase();

    var theGameIsAfoot = function () {
        if (isAlpha === true) {
            var guessIndex = wordSelection.indexof(userGuess);
                while (guessIndex != -1); {
                    correctGuess.push(guessIndex);
                    guessIndex = wordSelection.indexof(userGuess, guesIndex + 1);
                }
                // reveal the letter in the correct index
                if (correctGuess.length == wordSelection.length) {
                    winner();
                }
                if (guessedIndex === -1) {
                    if (guessedLetter.indexof(userGuess) != -1) {
                        guessedLetter.push(userGuess);
                        if (guesses > 1) {
                            guesses--;
                        }
                        else if (guesses === 1) {
                            guesses--;
                            gameOver();
                        }
                    }
                }
            // add letter to wordChoice and guessed letter
                // done in css?
            // if part of word, reveal to player
                // done in css?
        }
        else {
            alert("Please enter a letter.")
        }
    };

    var html = 
        '<p> Wins: ' + wins + '</p>' +
        '<p> Losses: ' + losses + '</p>';

    document.querySelector('#game').innerHTML = html;
    // not working with wordSelection
    // for some reason it'll print out the randomly selected name, with wordChoice but console.log() shows that nothing was saved
    document.querySelector('#word').innerHTML = wordChoice();
    document.querySelector('#guesses').innerHTML = guessedLetter;
    document.querySelector('#remaining_guesses').innerHTML = guesses;
};
