/**
 * ABOUT
 *
 * DATE: 2022-05-21
 * AUTHOR: jungjaedev
 *
 * URL: https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem?isFullScreen=true
 *
 * COMMENT:
 *
 **/

function beautifulDays(i, j, k) {
  let count = 0;
  for (let x = i; x <= j; x++) {
    let y = x.toString().split('').reverse().join('');
    let sol = Math.abs((x - y) / k);
    if (Number.isInteger(sol)) {
      count++;
    }
  }
  return count;
}
