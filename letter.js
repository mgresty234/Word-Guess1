var Letter = function (character) {
    this.character = character;
    this.guessed = false;
    this.render = function () {
        return (this.guessed) ? this.character : '_';
    }
    this.checkGuess = function (guess) {
        if (guess === this.character) {
            this.guessed = true;
        }

    }

}

module.exports = Letter;