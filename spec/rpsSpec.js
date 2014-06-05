describe("Rock, Paper, Scissors", function() {
  it("works", function() {
    expect(true).toBe(true);
  })

  it("lets rock crush scissors", function() {
    var rockWinsvsScissors = shoot("rock", "scissors")
    expect(rockWinsvsScissors).toBe(true);
  })


});
