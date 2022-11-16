/**
 * ABOUT
 *
 * DATE: 2022-11-16
 * AUTHOR: jungjaedev
 *
 * COMMENT:
 * 음수 앞으로 / 양수 뒤로 / 크기비교할 필요 없음
 * 버블정렬 이용해서 처리
 **/

function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

const arr = [1, 2, 3, -3, -2, 5, 6, -6];

console.log(solution(arr));
