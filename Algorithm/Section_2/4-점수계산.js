/**
 * ABOUT
 *
 * DATE: 2022-10-02
 * AUTHOR: jungjaedev
 *
 * COMMENT:
 * 연속으로 맞으면 다음 점수 추가 1점
 **/

function solution(arr) {
  let answer = 0;
  let point = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      point = 0;
    } else {
      point++;
    }
    answer += point;
  }
  return answer;
}

const arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
