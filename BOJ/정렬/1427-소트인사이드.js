/**
 * ABOUT
 *
 * DATE: 2022-02-01
 * AUTHOR: jungjaedev
 *
 * URL: https://www.acmicpc.net/problem/1427
 *
 * COMMENT:
 * 숫자 정렬
 **/

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let str = String(input[0]).toS;
answer = [];
for (let i = 0; i < str.length; i++) {
  answer.push(str[i]);
}

console.log(answer.sort((a, b) => b - a).join(''));
