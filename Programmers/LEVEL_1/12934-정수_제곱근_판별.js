/**
 * ABOUT
 *
 * DATE: 2021-12-31
 * AUTHOR: jungjaedev
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/12934
 *
 * COMMENT:
 * 양의 제곱근이 아니면 -1, 제곱근이면 x+1의 제곱을 리턴
 * ex) 121 => 11의 제곱이므로 11+1의 제곱 리턴 -> 144
 **/

function solution(n) {
  n = Math.sqrt(n);
  return Number.isInteger(n) ? Math.pow(n + 1, 2) : -1;
}
