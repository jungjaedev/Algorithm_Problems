/**
 * ABOUT
 *
 * DATE: 2022-02-06
 * AUTHOR: jungjaedev
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/12926
 *
 * COMMENT:
 * 알파벳 변환
 **/

function solution(s, n) {
  var answer = s.split('');
  let result = [];
  answer.forEach((el, idx) => {
    if (s.charCodeAt(idx) === 32) {
      result.push(String.fromCharCode(32));
      return;
    }
    let r = s.charCodeAt(idx);
    if (r >= 65 && r <= 90) {
      r = r + n > 90 ? r + n - 26 : (r += n);
    }
    if (r >= 97 && r <= 122) {
      r = r + n > 122 ? r + n - 26 : (r += n);
    }
    result.push(String.fromCharCode(r));
  });
  answer = result.join('');
  return answer;
}
