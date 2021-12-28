/**
 * ABOUT
 *
 * DATE: 2021-12-28
 * AUTHOR: jungjaedev
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/12912
 *
 * COMMENT:
 * a,b사이의 모든 정수의 합
 **/

function solution(a, b) {
  var answer = 0;
  if (a > b) [a, b] = [b, a];
  for (let i = a; i <= b; i++) {
    answer += i;
  }
  return answer;
}
