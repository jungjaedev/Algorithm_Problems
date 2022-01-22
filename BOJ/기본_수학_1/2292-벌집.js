/**
 * ABOUT
 *
 * DATE: 2022-01-21
 * AUTHOR: jungjaedev
 *
 * URL: https://www.acmicpc.net/problem/2292
 *
 * COMMENT:
 * 육각형으로 이루어진 벌집에서 해당 숫자까지 지나가는 방의 수
 **/

const input = require('fs').readFileSync('/dev/stdin');

let block = 1;
let move = 1;

while (block < input) {
  block += 6 * move;
  move++;
}

console.log(move);
