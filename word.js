var Letter = require('./letter.js');

var Word = function (wordGuess) {
    this.buildWord = function (word) {
        for (var i = 0; i < this.guess.length; i++) {
            console.log(i);

        }
        this.returnString = function() {

        }
        this.guessLetter = function() {
            
        }

    }
    this.word = this.buildWord(wordGuess);
}

//module.exports = word;