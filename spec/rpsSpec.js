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
// 1st button will randomly assign a move to player 1
describe("Move assignment and scoring", function() {

  it("randomly assigns player 1 a move", function() {
    var playerMove = moves.sample();
    expect(typeof playerMove).toBe('string');
  })

  it("lets a player win if they get 3 sequential victories", function(){

    var winner = isThereAWinner(3, 0);
    expect(winner).toBe("Player 1 Wins!");
  })




})

// Reset button - all scores go to zero
// Reset/Start new game => var = 1
// if var = 0, alert error


// 1.press button 1
// 2. randomly choose move for player 1 (sample from move array, assign move to player 1 move. store move in player1 move variable.

// 3. press button 2
// 4. randomly choose move for player 2 (sample from move array, assign move to player 2 move. store move in player2 move variable.

// 5. pass player1 and player 2 moves into “shoot” function

// 6.  increment winner’s score. First to 3 in a row wins. (if either player has 3 points more than the other, that player wins, game reset, display winner message, score reset)



// 7. display score for each player.




