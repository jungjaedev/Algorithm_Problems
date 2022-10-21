/**
 * ABOUT
 *
 * DATE: 2022-10-20
 * AUTHOR: jungjaedev
 *
 * COMMENT:
 * 매출액의 종류
 **/

function solution(k, arr) {
  let answer = [];
  let hash = new Map();
  for (let i = 0; i < arr.length - k + 1; i++) {
    for (let j = i; j < i + k; j++) {
      if (hash.has(arr[j])) {
        hash.set(arr[j], hash.get(arr[j]) + 1);
      } else {
        hash.set(arr[j], 1);
      }
    }
    answer.push(hash.size);
    hash.clear();
  }
  return answer;
}

const k = 4;
const arr = [20, 12, 20, 10, 23, 17, 10];

console.log(solution(k, arr));
