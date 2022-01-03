/**
 * ABOUT
 *
 * DATE: 2022-01-03
 * AUTHOR: jungjaedev
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/12954
 *
 * COMMENT:
 * x만큼 커지는 수 n개 리턴
 **/

function solution(x, n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}
