/**
 * ABOUT
 *
 * DATE: 2021-12-29
 * AUTHOR: jungjaedev
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/12918
 *
 * COMMENT:
 * 4,6개수이고 숫자로만 이루어진 문자열 찾기
 **/

function solution(s) {
  let answer = true;
  if (!(s.length === 6 || s.length === 4)) return false;
  for (let i = 0; i < s.length; i++) {
    if (!(s[i].charCodeAt() >= 48 && s[i].charCodeAt() <= 57)) {
      return false;
    }
  }
  return answer;
}
