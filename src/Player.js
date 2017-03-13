const prompt = require('prompt');

class Player {
  constructor(name, symbol) {
    this.name = name;
    this.symbol = symbol; 

    this.getMove.bind(this);
    this.parseUserMoveinput.bind(this);
  }

  getMove(onMoveRecieve) {
    // Prompt user for the next move
    console.log(this.name, ': Please Enter Your Move in the form of X, Y');
    prompt.start();

    prompt.get(['move'], (error, result) => {
      if (error) {
        onMoveRecieve(error);
      }

      onMoveRecieve(this.parseUserMoveinput(result.move));
    });
  }

  parseUserMoveinput(rawInput) {
    // Remove all whitespaces
    let conditionedInput = rawInput.replace(/\s/, '');
    let moveArray = conditionedInput.split(',');
    console.log('parseUserMoveInput: moveArray', moveArray);
    // See if we have 2 values
    if (moveArray.length !== 2) {
      throw 'Invalid User Input';
    } else {
      return moveArray;
    }
  }
}

module.exports = Player;