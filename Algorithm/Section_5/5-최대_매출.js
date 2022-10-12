/**
 * ABOUT
 *
 * DATE: 2022-10-12
 * AUTHOR: jungjaedev
 *
 * COMMENT:
 * 연속 n일 최대 매출
 **/

function solution(n, arr) {
  let max = 0;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    max += arr[i];
    sum += arr[i];
  }
  for (let i = n; i < arr.length; i++) {
    sum = sum - arr[i - n] + arr[i];
    if (max < sum) {
      max = sum;
    }
  }

  return max;
}

const arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
const n = 3;

console.log(solution(n, arr));
