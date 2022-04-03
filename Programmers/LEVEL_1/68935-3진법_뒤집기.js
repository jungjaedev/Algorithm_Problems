/**
 * ABOUT
 *
 * DATE: 2022-04-03
 * AUTHOR: jungjaedev
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/68935
 *
 * COMMENT:
 * 3진법 뒤집기
 **/

function solution(n) {
  let reversed_N = n.toString(3).split('').reverse().join('');
  return parseInt(reversed_N, 3);
}
