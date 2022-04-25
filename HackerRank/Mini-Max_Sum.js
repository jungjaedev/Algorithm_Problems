/**
 * ABOUT
 *
 * DATE: 2022-04-25
 * AUTHOR: jungjaedev
 *
 * URL: https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true
 *
 * COMMENT:
 * 4개 합한 수 min과 max 출력
 **/

function miniMaxSum(arr) {
  arr.sort();
  let max = 0;
  let min = 0;
  let answer = '';
  for (let i = 0; i < arr.length - 1; i++) {
    max += arr[i + 1];
    min += arr[i];
  }
  answer = min + ' ' + max;
  console.log(answer);
  return answer;
}
