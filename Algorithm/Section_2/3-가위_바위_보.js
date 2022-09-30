/**
 * ABOUT
 *
 * DATE: 2022-09-30
 * AUTHOR: jungjaedev
 *
 * COMMENT:
 * 가위 바위 보
 *  1   2  3
 **/

function solution(arr1, arr2) {
  const answer = [];
  const round = arr1.length;
  for (let i = 0; i < round; i++) {
    if (arr1[i] === arr2[i]) {
      answer.push('D');
    } else if ((arr1[i] === 1 && arr2[i] === 3) || (arr1[i] === 2 && arr2[i] === 1) || (arr1[i] === 3 && arr2[i] === 2)) {
      answer.push('A');
    } else {
      answer.push('B');
    }
  }
  return answer;
}

const arr1 = [2, 3, 3, 1, 3];
const arr2 = [1, 1, 2, 2, 3];
console.log(solution(arr1, arr2));
