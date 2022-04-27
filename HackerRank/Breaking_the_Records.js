/**
 * ABOUT
 *
 * DATE: 2022-04-27
 * AUTHOR: jungjaedev
 *
 * URL: https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?isFullScreen=true
 *
 * COMMENT:
 * 기록 갱신한 횟수 구하기(최대 최소 각각)
 **/

function breakingRecords(scores) {
  let min = scores[0];
  let minCnt = 0;
  let max = scores[0];
  let maxCnt = 0;
  let idx = [];
  for (let i = 0; i < scores.length; i++) {
    if (min > scores[i]) {
      min = scores[i];
      minCnt++;
    }
    if (max < scores[i]) {
      max = scores[i];
      maxCnt++;
    }
  }
  idx.push(maxCnt);
  idx.push(minCnt);
  return idx;
}
