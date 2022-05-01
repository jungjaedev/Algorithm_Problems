/**
 * ABOUT
 *
 * DATE: 2022-05-01
 * AUTHOR: jungjaedev
 *
 * URL: https://www.hackerrank.com/challenges/kangaroo/problem?isFullScreen=true
 *
 * COMMENT:
 * 두 캥거루가 찾지한 위치가 같은지 확인
 **/

function kangaroo(x1, v1, x2, v2) {
  let result = 'NO';
  if (v1 <= v2) return result;
  while (x1 <= x2) {
    x1 += v1;
    x2 += v2;
    if (x1 === x2) {
      result = 'YES';
      break;
    }
  }
  return result;
}
