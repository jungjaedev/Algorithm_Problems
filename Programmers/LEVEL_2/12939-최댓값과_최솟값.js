/**
 * ABOUT
 *
 * DATE: 2022-04-02
 * AUTHOR: jungjaedev
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/12939
 *
 * COMMENT:
 * 최댓값, 최솟값 구하기
 **/

function solution(s) {
  let answer = '';
  let newArr = s.split(' ');
  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < newArr.length; i++) {
    if (max < parseInt(newArr[i])) {
      max = parseInt(newArr[i]);
    }
    if (min > parseInt(newArr[i])) {
      min = parseInt(newArr[i]);
    }
  }
  answer += min.toString() + ' ';
  answer += max.toString();
  return answer;
}
