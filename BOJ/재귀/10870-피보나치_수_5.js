/**
 * ABOUT
 *
 * DATE: 2022-01-29
 * AUTHOR: jungjaedev
 *
 * URL: https://www.acmicpc.net/problem/10870
 *
 * COMMENT:
 * 피보나치 수 (재귀)
 **/

const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const num = input[0];

function fibonacci(n) {
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(num));
