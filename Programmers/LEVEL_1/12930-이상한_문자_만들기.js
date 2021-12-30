/**
 * ABOUT
 *
 * DATE: 2021-12-30
 * AUTHOR: jungjaedev
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/12930
 *
 * COMMENT:
 * 단어별 짝.홀수마다 대소문자 다르게 출력
 **/

function solution(s) {
  var answer = '';
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      answer += ' ';
      count = 0;
    } else if (count % 2 === 0) {
      answer += s[i].toUpperCase();
      count++;
    } else {
      answer += s[i].toLowerCase();
      count++;
    }
  }
  return answer;
}
