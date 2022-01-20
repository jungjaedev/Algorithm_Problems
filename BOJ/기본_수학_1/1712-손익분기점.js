/**
 * ABOUT
 *
 * DATE: 2022-01-20
 * AUTHOR: jungjaedev
 *
 * URL: https://www.acmicpc.net/problem/1712
 *
 * COMMENT:
 * 손익분기점(최초로 이익이 발생하는 판매량)은 고정 비용 + n대 생산하는데 드는 비용 < n대 판매한 비용을 만족할 때이다
 **/

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let fix = parseInt(input[0]);
let produce = parseInt(input[1]);
let price = parseInt(input[2]);

if (produce >= price) {
  // 손익분기점이 존재하지 않음
  console.log(-1);
} else {
  // 수익분기점: 고정비용 + 1대 만드는데 드는 비용 < 판매 비용
  let differ = price - produce;
  let answer = Math.floor(fix / differ) + 1;
  console.log(answer);
}
