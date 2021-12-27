/**
 * ABOUT
 *
 * DATE: 2021-12-24
 * AUTHOR: jungjaedev
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/81301
 *
 * COMMENT:
 * 숫자 영단어 -> integer로 출력하기
 **/

function solution(s) {
  let answer = '';
  let arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let tmp = '';
  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i]) === false) {
      answer += s[i];
    } else {
      tmp += s[i];
      for (let j = 0; j < arr.length; j++) {
        if (tmp === arr[j]) {
          answer += j;
          tmp = '';
        }
      }
    }
  }
  return parseInt(answer);
}
