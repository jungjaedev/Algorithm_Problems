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
      if (arr[j] > arr[i]) {
        answer[i]++;
      }
      console.log(1);
    }
  }
  return answer;
}

const arr = [87, 89, 92, 100, 76];
console.log(solution(arr));
