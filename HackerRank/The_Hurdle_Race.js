/**
 * ABOUT
 *
 * DATE: 2022-05-07
 * AUTHOR: jungjaedev
 *
 * URL: https://www.hackerrank.com/challenges/the-hurdle-race/problem?isFullScreen=true
 *
 * COMMENT:
 * height차이나는 수의 갯수 출력
 **/

function hurdleRace(k, height) {
  const max = Math.max(...height);
  if (max - k <= 0) {
    return 0;
  } else {
    return max - k;
  }
}
