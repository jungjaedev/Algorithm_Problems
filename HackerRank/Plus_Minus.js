/**
 * ABOUT
 *
 * DATE: 2022-04-29
 * AUTHOR: jungjaedev
 *
 * URL: https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true
 *
 * COMMENT:
 * 음수 양수 0이 될 확률
 **/

function plusMinus(arr) {
  let plus = 0;
  let minus = 0;
  let zero = 0;
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] > 0) {
      plus++;
    } else if (arr[i] < 0) {
      minus++;
    } else {
      zero++;
    }
  }
  console.log(Number(plus / len).toFixed(6));
  console.log(Number(minus / len).toFixed(6));
  console.log(Number(zero / len).toFixed(6));
}
