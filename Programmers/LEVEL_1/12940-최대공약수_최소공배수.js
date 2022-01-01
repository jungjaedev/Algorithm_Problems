/**
 * ABOUT
 *
 * DATE: 2022-01-01
 * AUTHOR: jungjaedev
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/12940
 *
 * COMMENT:
 * 최대공약수, 최소공배수
 **/

function solution(n, m) {
  var answer = [];
  const greatest = (a, b) => {
    if (b === 0) return a;
    return greatest(b, a % b);
  };
  const least = (a, b) => (a * b) / greatest(a, b);
  return [greatest(n, m), least(n, m)];
}
