/**
 * ABOUT
 *
 * DATE: 2022-04-26
 * AUTHOR: jungjaedev
 *
 * URL: https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true
 *
 * COMMENT:
 * 2차원배열 대각의 합의 차이
 **/

function diagonalDifference(arr) {
  let num1 = 0;
  let num2 = 0;
  let diff = 0;
  for (let i = 0; i < arr.length; i++) {
    num1 += arr[i][i];
    num2 += arr[i][arr.length - 1 - i];
  }
  diff = num1 - num2;
  return Math.abs(diff);
}
