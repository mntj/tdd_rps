var moves = ['rock', 'paper', 'scissors']

// Define sample method
Array.prototype.sample = function() {
  return this[~~(Math.random() * this.length)];
}

var randomMove = function () {
  return moves.sample();
}

var onePlayerMove = randomMove();
var twoPlayerMove = randomMove();

function shoot (onePlayerMove, twoPlayerMove) {
  if (onePlayerMove === 'rock' && twoPlayerMove === 'scissors') {
    return true;
  }

  else if (onePlayerMove === 'scissors' && twoPlayerMove === 'paper') {
    return true;
  }

  else if (onePlayerMove === 'paper' && twoPlayerMove === 'rock') {
    return true;
  }

  else if (onePlayerMove === twoPlayerMove) {
    return undefined;
  }

  else {
    return false;
  }
}

shoot(onePlayerMove, twoPlayerMove);

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
