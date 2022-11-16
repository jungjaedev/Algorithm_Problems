/**
 * ABOUT
 *
 * DATE: 2022-11-16
 * AUTHOR: jungjaedev
 *
 * COMMENT:
 * 오름차순 버블정렬
 * 맨앞에서부터 두 값 비교해서 큰 수 뒤로.
 **/

function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

const arr = [11, 7, 5, 6, 10, 9];

console.log(solution(arr));
