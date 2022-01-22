/**
 * ABOUT
 *
 * DATE: 2022-01-23
 * AUTHOR: jungjaedev
 *
 * URL: https://www.acmicpc.net/problem/10757
 *
 * COMMENT:
 * 입력되는 큰 두 수를 합한 값 리턴
 **/

const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const a = BigInt(input[0]);
const b = BigInt(input[1]);
let answer = a + b;

console.log(answer.toString());
