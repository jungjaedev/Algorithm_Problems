/**
 * ABOUT
 *
 * DATE: 2022-01-31
 * AUTHOR: jungjaedev
 *
 * URL: https://www.acmicpc.net/problem/2750
 *
 * COMMENT:
 * 오름차순 정렬
 **/

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(el => Number(el));

let arr = input.slice(1, input.length);
arr.sort((a, b) => a - b);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
