/**
 * ABOUT
 *
 * DATE: 2022-01-24
 * AUTHOR: jungjaedev
 *
 * URL: https://www.acmicpc.net/problem/1929
 *
 * COMMENT:
 * 입력되는 두 수 사이의 소수 구하기
 **/

const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const a = Number(input[0]);
const b = Number(input[1]);
const answer = [];
function isPrime(n) {
  if (n === 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
for (let i = a; i <= b; i++) {
  if (isPrime(i)) answer.push(i);
}

console.log(answer.join('\n'));
