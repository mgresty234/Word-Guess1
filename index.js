var Word = require('./word');

var letter = require('./letter');

var inquirer = require('inquirer');

var computerChoices = ['smart', 'hayward', 'irving', 'baynes', 'rozier', 'brown'];

var hiddenWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var gameWord = new Word(hiddenWord);

function playTurn(){


    inquirer
        .prompt([
            {
                name: "guess",
                type: "input",
                message: "Guess a letter of the last name of a Celtic's player?"
            }]).then(function(answer){
                var currentGuess = answer.guess;
                gameWord.checkGuess(currentGuess);
                console.log(answer);
                console.log(gameWord.display());
                if (gameWord.solved()) {
                    return;
                }
                playTurn();
                
            })
 
}
playTurn();
// var count = 0;

// var winCount = 0;
// var guessCount = 10;
// var guessSofar = [];

// Words.prototype.splitWord = function(selectedWord){
//     var selectedLetters = [];
//     selectedLetters = selectedWord.split('');
// }