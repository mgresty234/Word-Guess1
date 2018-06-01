var Letter = require('./letter.js');

var Word = function (wordGuess) {
    this.buildWord = function (word) {
        var tempWord = [];
        for (var i = 0; i < word.length; i++) {
            var currentLetter = new Letter(word[i]);
            tempWord.push(currentLetter);


        }
        console.log(tempWord);
        return tempWord;

    }
    this.word = this.buildWord(wordGuess);

    this.display = function() {
        var displayWord = "";
        for (var i = 0; i < this.word.length; i++){

            var displayLetter = this.word[i].render();

            displayWord += " " + displayLetter;
        }
        return displayWord;
    }
    this.checkGuess = function(guess) {
        for (var i = 0; i < this.word.length; i++) {
            var currentLetter = this.word[i];
            currentLetter.checkGuess(guess);


        }
    }
    this.solved = function() {
       
        for (var i = 0; i < this.word.length; i++) { 
            if (this.word[i].guessed === false) {
                return false;
            }
            
        }
        return true;
    }
}

module.exports = Word;