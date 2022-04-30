/**
 * ABOUT
 *
 * DATE: 2022-04-30
 * AUTHOR: jungjaedev
 *
 * URL: https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true
 *
 * COMMENT:
 * '#'로 계단만들기
 **/

function staircase(n) {
  let arr = Array(n).fill(' ');
  for (let i = n - 1; i >= 0; i--) {
    arr[i] = '#';
    console.log(arr.join(''));
  }
}
