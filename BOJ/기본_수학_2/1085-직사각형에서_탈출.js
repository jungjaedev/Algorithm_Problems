/**
 * ABOUT
 *
 * DATE: 2022-01-25
 * AUTHOR: jungjaedev
 *
 * URL: https://www.acmicpc.net/problem/1929
 *
 * COMMENT:
 * 직사각형 대각선 최소 거리
 **/

const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

let [x, y, w, h] = input;
let answer = [];
let array = [x, w - x, y, h - y];
answer = Math.min(...array);
console.log(answer);
