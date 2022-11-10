/**
 * ABOUT
 *
 * DATE: 2022-11-10
 * AUTHOR: jungjaedev
 *
 * COMMENT:
 * 오름차순 선택정렬
 * 최솟값 찾아서 맨 앞이랑 바꿔줌
 **/

function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIdx] > arr[j]) {
        minIdx = j;
      }
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}

const arr = [13, 5, 11, 7, 23, 15];

console.log(solution(arr));
