/**
 * ABOUT
 *
 * DATE: 2022-09-30
 * AUTHOR: jungjaedev
 *
 * COMMENT:
 * 등수구하기
 **/

function solution(arr) {
  let answer = Array(arr.length)
    .fill()
    .map(() => {
      return 1;
    });

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        answer[i]++;
      }
    }
  }
  return answer;
}

const arr = [87, 87, 92, 100, 76];
console.log(solution(arr));
