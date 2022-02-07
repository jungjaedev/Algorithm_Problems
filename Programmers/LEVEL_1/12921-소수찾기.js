/**
 * ABOUT
 *
 * DATE: 2022-02-07
 * AUTHOR: jungjaedev
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/12921
 *
 * COMMENT:
 * 소수찾기
 **/

function solution(n) {
  const result = 0;
  let cnt = 0;
  for (let a = 2; a <= n; a++) {
    cnt = 0;
    for (let b = 1; b <= a; b++) {
      if (a % b === 0) cnt++;
    }
    if (cnt === 2) result++;
  }
  return result;
}
