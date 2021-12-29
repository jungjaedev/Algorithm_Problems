/**
 * ABOUT
 *
 * DATE: 2021-12-29
 * AUTHOR: jungjaedev
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/12922
 *
 * COMMENT:
 * '수', '박' n개만큼 번갈아가며 출력
 **/

function solution(n) {
  var answer = '';
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      answer += '수';
    } else {
      answer += '박';
    }
  }
  return answer;
}
