/**
 * ABOUT
 *
 * DATE: 2021-12-29
 * AUTHOR: jungjaedev
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/12919
 *
 * COMMENT:
 * 배열안에서 'Kim'이 몇번째에 있는지 찾기
 **/

function solution(seoul) {
  var answer = '';
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === 'Kim') {
      answer = `김서방은 ${i}에 있다`;
    }
  }
  return answer;
}
