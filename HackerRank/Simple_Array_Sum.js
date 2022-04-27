/**
 * ABOUT
 *
 * DATE: 2022-04-27
 * AUTHOR: jungjaedev
 *
 * URL: https://www.hackerrank.com/challenges/simple-array-sum/problem?isFullScreen=true
 *
 * COMMENT:
 * 배열 합 구하기
 **/

function simpleArraySum(ar) {
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }
  return sum;
}
