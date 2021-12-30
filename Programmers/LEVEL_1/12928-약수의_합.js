/**
 * ABOUT
 *
 * DATE: 2021-12-30
 * AUTHOR: jungjaedev
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/12928
 *
 * COMMENT:
 * 약수의 합을 리턴
 **/

function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) answer += i;
  }
  return answer;
}
