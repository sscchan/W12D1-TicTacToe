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
    this.nextMove.bind(this);
    this.switchActivePlayer.bind(this);


    this.startGame();
  }

  startGame() {
    this.board.reset();
    this.nextMove();
  }

  nextMove() {
    let handleMoveRecieved = (data) => {
      if (this.board.isValidMove(data[0], data[1])) {
        this.board.set(data[0], data[1], this.currentPlayer.symbol);

        // Print out the board
        console.log(this.board.getRenderedBoard());

        // Check if there are any winner
        if (this.board.getWinner() === null) {
          this.switchActivePlayer();
          this.nextMove();
        } else {
          console.log('Winner is:', this.board.getWinner());
        }

      } else {
        console.log('Invalid Move, Please ReEnter');
        this.nextMove();
      }
    };

    this.currentPlayer.getMove(handleMoveRecieved);

  }



  switchActivePlayer() {
    if (this.currentPlayer === this.player1) {
      this.currentPlayer = this.player2;
    } else {
      this.currentPlayer = this.player1;
    }
  }
}

module.exports = Game;