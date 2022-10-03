/**
 * ABOUT
 *
 * DATE: 2022-10-03
 * AUTHOR: jungjaedev
 *
 * COMMENT:
 * 임시반장 구하기
 **/

function solution(arr) {
  let answer = 0;
  let count = Array(arr.length)
    .fill()
    .map(() => {
      return 0;
    });
  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < 5; j++) {
      for (let k = 0; k < arr[0].length; k++) {
        if (i === k) {
          continue;
        } else if (arr[i][j] === arr[k][j]) {
          console.log(arr[i][j], arr[k][j]);
          count[i]++;
        }
      }
    }
  }
  console.log(count);
  return answer;
}

let arr = [
  [2, 3, 1, 7, 3],
  [4, 1, 9, 6, 8],
  [5, 5, 2, 4, 4],
  [6, 5, 2, 6, 7],
  [8, 4, 2, 2, 2],
];
console.log(solution(arr));
