/**
 * ABOUT
 *
 * DATE: 2021-12-31
 * AUTHOR: jungjaedev
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/12933
 *
 * COMMENT:
 * n을 내림차순으로 리턴
 **/

function solution(n) {
  var answer = 0;
  let str = n
    .toString()
    .split('')
    .sort((a, b) => b - a)
    .join('');
  answer = parseInt(str);
  return answer;
}
