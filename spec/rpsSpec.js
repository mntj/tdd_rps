describe("Move assignment and scoring", function() {

  it("randomly assigns player 1 a move", function() {
    var playerMove = moves.sample();
    expect(typeof playerMove).toBe('string');
  })

  it("lets a player win if they get 3 sequential victories", function(){
    var winner = isThereAWinner(3, 0);
    expect(winner).toBe("Player 1 Wins!");
  })

  it("increments player1's score if they win a round", function() {
    shoot('rock', 'scissors');
    expect(onePlayerScore).toEqual(1);
  })

  it("resets players' scores", function() {
    var onePScore = 3;
    var twoPScore = 0;
    isThereAWinner(onePScore, twoPScore);
    expect(onePlayerScore).toEqual(0);
  })

})

describe("Rock, Paper, Scissors Rules", function() {

  it('works', function(){
    expect(true).toBe(true);
  })

  it("lets rock crush scissors", function() {
    var rockWinsvsScissors = shoot("rock", "scissors");
    expect(rockWinsvsScissors).toBe(true);
  })

  it("lets scissors cut paper", function() {
    var scissorsWinsvsPaper = shoot("scissors", "paper");
    expect(scissorsWinsvsPaper).toBe(true);
  })

  it("lets paper overwhelm rock", function() {
    var paperWinsvsRock = shoot("paper", "rock");
    expect(paperWinsvsRock).toBe(true);
  })

  it("lets draws happen", function() {
    var someoneWins = shoot("paper", "paper");
    expect(someoneWins).toBe(undefined);
  })

});





