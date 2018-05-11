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

document.onkeyup = function(event) {
    
    var userGuess = event.key.toLowerCase();

    var wordChoice = function() {
        return wordBank[Math.floor(Math.random() * wordBank.length)];
    };

    var isAlpha = function(userGuess){
        return /^[A-Z]$/i.test(userGuess);
    };
    
    var gameStart = function () {
        document.getElementById('word').innerHTML = wordChoice();
        guesses = 6;
        document.getElementById('guesses').innerHTML = guesses;
        guessedLetter = [];
        correctGuess = [];
    };

    var theGameIsAfoot = function () {
        gameStart();
        if (isAlpha === true) {
            var guessIndex = wordChoice.indexof(userGuess);
                while (guessIndex != -1); {
                    correctGuess.push(guessIndex);
                    guessIndex = wordChoice.indexof(userGuess, guesIndex + 1);
                }
                if (guessedIndex === -1) {
                    if (guessedLetter.indexof(userGuess) != -1) {
                        guessedLetter.push(userGuess);
                        if (guesses > 1) {
                            guesses--;
                        }
                        else if (guesses === 1) {
                            guesses--;
                            // game over state
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
    document.querySelector('#word').innerHTML = wordChoice();
    document.querySelector('#guesses').innerHTML = // user guess if isAlpha;
    document.querySelector('#remaining_guesses').innerHTML = guesses;
};