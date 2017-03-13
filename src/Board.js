const clearScreen = require('./ClearScreen.js');

class Board {
  constructor(sizeX, sizeY) {

    this.sizeX = sizeX;
    this.sizeY = sizeY;

    this.boardState = [];

    this.reset.bind(this);
    this.get.bind(this);
    this.set.bind(this);
    this.isValidMove.bind(this);
    this.getWinner.bind(this);

    this.reset();
  }

  // This reset board's state array elements to empty string ""
  reset() {
    for (let i = 0; i < this.sizeX; i++) {
      this.boardState[i] = [];
      for (let j = 0; j < this.sizeY; j++) {
        this.boardState[i].push(' ');
      }
    }
  }

  get(x, y) {
    return this.boardState[x][y];
  }

  // Set a particular position of the board with a symbol
  set(x, y, symbol) {
    if (this.isValidMove(x, y)) {
      this.boardState[x][y] = symbol;
    } else {
      // throw error
    }
  }

  isValidMove(x, y) {
    return (this.get(x, y) === ' ');
  }

  // Check if there are any winners on this round
  getWinner() {

    // Check horizontal for winners
    for (let i = 0; i < this.sizeX; i++) {
      let currentRow = this.boardState[i];
      let lastSymbol = currentRow[0];
      let foundWinner = true;

      for (let j = 0; j < currentRow.length; j++) {
        if (currentRow[j] === ' ') {
          foundWinner = false;
          break;
        } else {
          if (currentRow[j] !== lastSymbol) {
            foundWinner = false;
            break;
          }
        }
      }

      if (foundWinner) {
        return lastSymbol;
      }
    }

    // Check vertical for winners
    for (let i = 0; i < this.sizeY; i++) {
      let lastSymbol = this.boardState[0][i];
      let foundWinner = true;

      for (let j = 0; j < this.sizeX; j++) {
        if (this.boardState[j][i] === ' ') {
          foundWinner = false;
          break;
        } else {
          if (this.boardState[j][i] !== lastSymbol) {
            foundWinner = false;
            break;
          }
        }
      }

      if (foundWinner) {
        return lastSymbol;
      }
    }

    // Check diagonal for winners
    let foundWinner = true;
    let lastSymbol = this.boardState[0][0];    
    for (let i = 0; i < this.sizeX; i++) {
      if (this.boardState[i][i] === ' ') {
        foundWinner = false;
        break;
      }

      if (this.boardState[i][i] !== lastSymbol) {
        foundWinner = false;
        break;
      }
    }

    if (foundWinner) {
      return lastSymbol;
    }

    // Check diagonal (backwards) for winners
    foundWinner = true;
    lastSymbol = this.boardState[0][this.sizeY - 1];    
    for (let i = 0; i < this.sizeX; i++) {
      if (this.boardState[i][this.sizeY - 1 - i] === ' ') {
        foundWinner = false;
        break;
      }

      if (this.boardState[i][this.sizeY - 1 - i] !== lastSymbol) {
        foundWinner = false;
        break;
      }
    }
    
    if (foundWinner) {
      return lastSymbol;
    }    


    return null;
  }

  getRenderedBoard() {
    let renderedBoardText = '';

    for (let i = 0; i < this.sizeX; i++) {
      renderedBoardText += ('|' + this.boardState[i].join(',') + '|\n');
    }

    return renderedBoardText;
  }
}

module.exports = Board;