var moves = ['rock', 'paper', 'scissors']

// Define sample method
Array.prototype.sample = function() {
  return this[~~(Math.random() * this.length)];
}

var onePlayerMove = undefined;
var twoPlayerMove = undefined;

var onePlayerScore = 0;
var twoPlayerScore = 0;

var isThereAWinner = function (onePlayerScore, twoPlayerScore) {
      if ((Math.abs(onePlayerScore - twoPlayerScore)) === 3) {
        if (onePlayerScore > twoPlayerScore) {
          return "Player 1 Wins!";
        }
        else {
          return "Player 2 Wins!";
        }
      }
    }
