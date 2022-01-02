/**
 * ABOUT
 *
 * DATE: 2022-01-02
 * AUTHOR: jungjaedev
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/12944
 *
 * COMMENT:
 * avg
 **/

function solution(arr) {
  var answer = 0;
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  return answer / arr.length;
}
