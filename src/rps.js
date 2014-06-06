var moves = ['rock', 'paper', 'scissors']

// Define sample method
Array.prototype.sample = function() {
  return this[~~(Math.random() * this.length)];
}


