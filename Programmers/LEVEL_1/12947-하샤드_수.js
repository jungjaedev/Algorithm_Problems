/**
 * ABOUT
 *
 * DATE: 2022-01-02
 * AUTHOR: jungjaedev
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/12947
 *
 * COMMENT:
 * x와 x의 자리수의합이 나누어떨어지면 true
 **/

function solution(x) {
  var answer = true;
  let sum = 0;
  let str = x.toString();
  for (let i = 0; i < str.length; i++) {
    sum += parseInt(str[i]);
  }
  if (x % sum !== 0) answer = false;
  return answer;
}
