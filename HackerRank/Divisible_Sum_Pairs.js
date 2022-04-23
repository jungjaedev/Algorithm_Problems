/**
 * ABOUT
 *
 * DATE: 2022-04-23
 * AUTHOR: jungjaedev
 *
 * URL: https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?isFullScreen=true
 *
 * COMMENT:
 * ar의 두 수를 합한 값이 k로 나누어떨어지는 배열 갯수
 **/

function divisibleSumPairs(n, k, ar) {
  let sorted = ar.sort((a, b) => a - b);
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((sorted[i] + sorted[j]) % k === 0) {
        cnt++;
      }
    }
  }
  return cnt;
}
