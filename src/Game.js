const Board = require('./Board.js');
const Player = require('./Player.js');

class Game {
  constructor() {
    // Create a standard 3x3 gameboard
    console.log(Board);
    this.board = new Board(3, 3);
    this.player1 = new Player('Player 1', 'O');
    this.player2 = new Player('Player 2', 'X');
    this.currentPlayer = this.player1;

    this.startGame.bind(this);
  }

  startGame() {
    this.board.reset();
  }
}

module.exports = Game;