/**
 * ABOUT
 *
 * DATE: 2022-01-03
 * AUTHOR: jungjaedev
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/12950
 *
 * COMMENT:
 * 두 행렬을 더한 배열 리턴
 **/

function solution(arr1, arr2) {
  var answer = [[]];
  for (let i = 0; i < arr1.length; i++) {
    answer[i] = [];
    for (let j = 0; j < arr1[i].length; j++) {
      answer[i].push(arr1[i][j] + arr2[i][j]);
    }
  }
  return answer;
}
