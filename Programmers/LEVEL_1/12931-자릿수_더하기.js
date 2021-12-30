/**
 * ABOUT
 *
 * DATE: 2021-12-30
 * AUTHOR: jungjaedev
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/12931
 *
 * COMMENT:
 * 자릿수 더한 값 출력
 **/

function solution(n) {
  var answer = 0;
  let str = String(n);
  for (let i = 0; i < str.length; i++) {
    answer += parseInt(str[i]);
  }
  return answer;
}
