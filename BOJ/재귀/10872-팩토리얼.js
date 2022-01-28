/**
 * ABOUT
 *
 * DATE: 2022-01-28
 * AUTHOR: jungjaedev
 *
 * URL: https://www.acmicpc.net/problem/10872
 *
 * COMMENT:
 * 팩토리얼 재귀로 풀이
 **/

const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

function factorial(num) {
  if (num <= 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

console.log(factorial(input));
