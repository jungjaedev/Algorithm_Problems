const input = require('fs').readFileSync('/dev/stdin');

let block = 1;
let move = 1;

while (block < input) {
  block += 6 * move;
  move++;
}

console.log(move);
