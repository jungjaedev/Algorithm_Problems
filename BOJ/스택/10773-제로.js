/**
 * ABOUT
 *
 * DATE: 2022-04-06
 * AUTHOR: jungjaedev
 *
 * URL: https://www.acmicpc.net/problem/10773
 *
 * COMMENT:
 * 0이면 최근 숫자 삭제
 **/

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const caseCount = Number(input[0]);
const stack = [];

for (let i = 1; i <= caseCount; i++) {
  const value = Number(input[i]);

  if (value === 0) {
    stack.pop();
  } else {
    stack.push(value);
  }
}

let result = 0;

for (let i = 0; i < stack.length; i += 1) {
  result += stack[i];
}

console.log(result);
