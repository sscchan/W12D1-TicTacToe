class Board {
  constructor(sizeX, sizeY) {

    this.sizeX = sizeX;
    this.sizeY = sizeY;

    this.boardState = [];

    this.reset.bind(this);
    this.get.bind(this);
    this.set.bind(this);

    this.reset();
  }

  // This reset board's state array elements to empty string ""
  reset() {
    for (let i = 0; i < this.sizeX; i++) {
      for (let j = 0; j < this.sizeY; j++) {
        this.boardState[i, j] = '';
      }
    }
  }

  get(x, y) {
    return this.boardState[x, y];
  }

  // Set a particular position of the board with a symbol
  set(x, y, symbol) {
    if (this.get(x, y) === '') {
      this.boardState[x, y] = symbol;
    } else {
      // throw error
    }
  }

  getRenderedBoard() {
    let renderedBoardText = '';

    for (let i = 0; i < this.sizeX; i++) {
      console.log(this.boardState[i].join('|'));
    }
  }
}

module.exports = Board;