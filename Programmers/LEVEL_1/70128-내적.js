/**
 * ABOUT
 *
 * DATE: 2022-04-15
 * AUTHOR: jungjaedev
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/70128
 *
 * COMMENT:
 * 내적
 **/

function solution(a, b) {
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result += a[i] * b[i];
  }
  return result;
}
