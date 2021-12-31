/**
 * ABOUT
 *
 * DATE: 2021-12-31
 * AUTHOR: jungjaedev
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/12932
 *
 * COMMENT:
 * int'n'-> 역으로 배열 출력
 **/

function solution(n) {
  var answer = [];
  let str = n.toString();
  for (let i = str.length - 1; i >= 0; i--) {
    answer.push(Number(str[i]));
  }
  return answer;
}
