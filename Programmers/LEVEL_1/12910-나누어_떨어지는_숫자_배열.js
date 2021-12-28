/**
 * ABOUT
 *
 * DATE: 2021-12-28
 * AUTHOR: jungjaedev
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/12910
 *
 * COMMENT:
 * arr에서 나누어떨어지는 값 오름차순 정렬
 **/

function solution(arr, divisor) {
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
    }
  }
  answer.sort(function (a, b) {
    return a - b;
  });
  if (answer.length === 0) answer.push(-1);
  return answer;
}
