/**
 * ABOUT
 *
 * DATE: 2022-10-09
 * AUTHOR: jungjaedev
 *
 * COMMENT:
 * 앞에서 보이는 학생
 **/

function solution(arr) {
  let answer = 1;
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      answer++;
      max = arr[i];
    }
  }
  return answer;
}

const arr = [130, 135, 148, 145, 150, 150, 153];
console.log(solution(arr));
