/**
 * ABOUT
 *
 * DATE: 2022-04-05
 * AUTHOR: jungjaedev
 *
 * URL: https://www.acmicpc.net/problem/9012
 *
 * COMMENT:
 * 올바른 괄호 문자열인지 확인하는 함수
 **/

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const caseCount = Number(input[0]);

for (let i = 1; i <= caseCount; i += 1) {
  const cases = input[i];
  const stack = [];
  let result = 'YES';

  for (let j = 0; j < cases.length; j += 1) {
    if (cases[j] === '(') {
      stack.push(1);
    } else {
      if (!stack.pop()) {
        result = 'NO';
        break;
      }
    }
  }

  if (stack.length !== 0) {
    result = 'NO';
  }

  console.log(result);
}
