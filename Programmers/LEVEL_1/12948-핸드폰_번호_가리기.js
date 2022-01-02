/**
 * ABOUT
 *
 * DATE: 2022-01-02
 * AUTHOR: jungjaedev
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/12948
 *
 * COMMENT:
 * 맨 끝 네자리 제외한 수는 '*'
 **/

function solution(phone_number) {
  var answer = '';
  for (let i = 0; i < phone_number.length; i++) {
    if (phone_number.length - 5 < i) {
      answer += phone_number[i];
    } else {
      answer += '*';
    }
  }
  return answer;
}
