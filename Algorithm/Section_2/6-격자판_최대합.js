/**
 * ABOUT
 *
 * DATE: 2022-10-03
 * AUTHOR: jungjaedev
 *
 * COMMENT:
 * 좌 우 대각선 최대합 찾기
 **/

function solution(arr) {
  let max = 0;
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum1 = 0;
    sum2 = 0;
    for (let j = 0; j < arr.length; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }
    max = Math.max(max, sum1, sum2);
  }
  sum1 = 0;
  sum2 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][arr.length - 1 - i];
  }
  max = Math.max(max, sum1, sum2);

  return max;
}

const arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
