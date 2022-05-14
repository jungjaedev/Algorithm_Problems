/**
 * ABOUT
 *
 * DATE: 2022-05-14
 * AUTHOR: jungjaedev
 *
 * URL: https://www.hackerrank.com/challenges/camelcase/problem?isFullScreen=true
 *
 * COMMENT:
 * Camel case count
 **/

function camelcase(s) {
  let cnt = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      cnt++;
    }
  }
  return cnt;
}
