/**
 * ABOUT
 *
 * DATE: 2022-04-01
 * AUTHOR: jungjaedev
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/12951
 *
 * COMMENT:
 * JadenCase 문자열 만들기 - 단어의 첫번째만 대문자로
 **/

function solution(s) {
  let answer = '';
  let temp = '';
  let strArr = s.split(' ');
  for (let i = 0; i < strArr.length; i++) {
    temp = '';
    for (let j = 0; j < strArr[i].length; j++) {
      if (j === 0 && isNaN(strArr[i][j])) {
        temp += strArr[i][j].toUpperCase();
      } else {
        temp += strArr[i][j].toLowerCase();
      }
    }
    answer += temp + ' ';
  }
  return answer.slice(0, answer.length - 1);
}
