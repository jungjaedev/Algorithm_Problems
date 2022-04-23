/**
 * ABOUT
 *
 * DATE: 2022-04-22
 * AUTHOR: jungjaedev
 *
 * URL: https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=true
 *
 * COMMENT:
 * 두 배열 비교해서 점수 출력
 **/

function compareTriplets(a, b) {
  let score = [0, 0];
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      score[0] += 1;
    } else if (b[i] > a[i]) {
      score[1] += 1;
    }
  }
  return score;
}
