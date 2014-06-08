var moves = ['rock', 'paper', 'scissors']

// Define sample method
Array.prototype.sample = function() {
  return this[~~(Math.random() * this.length)];
}

var randomMove = function () {
  return moves.sample();
}

 onePlayerScore = 0;
 twoPlayerScore = 0;


function shoot (onePlayerMove, twoPlayerMove) {
  if (onePlayerMove === 'rock' && twoPlayerMove === 'scissors') {
    onePlayerScore++;
    console.log("Player one wins this round!");
    return true;
  }

  else if (onePlayerMove === 'scissors' && twoPlayerMove === 'paper') {
    onePlayerScore++;
    console.log("Player one wins this round!");
    return true;
  }

  else if (onePlayerMove === 'paper' && twoPlayerMove === 'rock') {
    onePlayerScore++;
    console.log("Player one wins this round!");
    return true;
  }

  else if (onePlayerMove === twoPlayerMove) {
    console.log("Tie!")
    return undefined;
  }

  else {
    console.log("Player two wins this round!");
    twoPlayerScore++;
    return false;
  }
}

function isThereAWinner (onePScore, twoPScore) {
      if ((Math.abs(onePScore - twoPScore)) === 3) {
        if (onePScore > twoPScore) {
          console.log("Player 1 Wins!");
          onePlayerScore = 0;
          twoPlayerScore = 0;
          return "Player 1 Wins!";
        }

        else {
          console.log("Player 2 Wins!");
          onePlayerScore = 0;
          twoPlayerScore = 0;
          return "Player 2 Wins!";
        }
      }
    }

var game = function rockPaperScissors () {
  var onePlayerMove = randomMove();
  var twoPlayerMove = randomMove();
  console.log("Player one chose "+onePlayerMove);
  console.log("Player two chose "+twoPlayerMove);
  console.log("rock paper scissors..shoot!");
  shoot(onePlayerMove, twoPlayerMove);
  isThereAWinner(onePlayerScore, twoPlayerScore);
  console.log("Player 1's score: "+onePlayerScore);
  console.log("Player 2's score: "+twoPlayerScore);
};


