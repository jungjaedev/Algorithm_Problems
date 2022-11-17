/**
 * ABOUT
 *
 * DATE: 2022-11-17
 * AUTHOR: jungjaedev
 *
 * COMMENT:
 * 오름차순 정렬 / x기준 / 같은경우 y값에 의해 정렬
 **/

function solution(arr) {
  arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });
  return arr;
}

const arr = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];

console.log(solution(arr));
