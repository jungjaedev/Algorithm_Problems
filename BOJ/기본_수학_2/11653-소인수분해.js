/**
 * ABOUT
 *
 * DATE: 2022-01-27
 * AUTHOR: jungjaedev
 *
 * URL: https://www.acmicpc.net/problem/11653
 *
 * COMMENT:
 * 소인수분해
 **/

const inputs = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let num = parseInt(inputs[0]);

let i = 2;
let answer = [];
while (true) {
  if (num % i === 0) {
    num = num / i;
    answer.push(i);
    i = 1;
  }
  i++;
  if (i > num) {
    break;
  }
}

console.log(answer.join('\n'));
