/**
 * ABOUT
 *
 * DATE: 2022-09-29
 * AUTHOR: jungjaedev
 *
 * COMMENT:
 * 큰 수 출력하기
 * num의 앞자리보다 큰 수 출력
 **/

function solution(num, arr) {
  const answer = [];
  answer.push(arr[0]);
  const foundNumIndex = arr.findIndex(el => el === num);
  const foundNum = arr[foundNumIndex - 1];
  for (let i = 1; i < arr.length; i++) {
    if (foundNum < arr[i]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

const number = 6;
const numArr = [7, 3, 9, 5, 6, 12];
console.log(solution(number, numArr));
