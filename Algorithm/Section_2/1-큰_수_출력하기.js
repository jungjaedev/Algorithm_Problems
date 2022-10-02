/**
 * ABOUT
 *
 * DATE: 2022-09-29
 * AUTHOR: jungjaedev
 *
 * COMMENT:
 * 큰 수 출력하기
 * 앞자리보다 큰 수 출력
 **/

function solution(arr) {
  let answer = [];
  answer.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

const numArr = [7, 3, 10, 9, 5, 6, 7, 9, 20, 19, 12, 15];
console.log(solution(numArr));

const numArr1 = [7, 3, 10, 9, 5, 6, 7, 9, 20, 19, 12, 11, 15, 19];
console.log(solution(numArr1));

const numArr2 = [3, 2, 1, 3, 2, 1, 3];
console.log(solution(numArr2));
